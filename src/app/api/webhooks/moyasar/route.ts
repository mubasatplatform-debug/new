import { NextRequest, NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import { db } from '@/lib/db'
import { checkIdempotency, setIdempotency } from '@/lib/redis'
import { getSecret } from '@/lib/vault'
import { sendEsimDeliveryEmail } from '@/lib/email'
import { moyasarWebhookSchema } from '@/lib/validations'

function verifyMoyasarSignature(payload: string, signature: string): boolean {
  const secret = process.env.MOYASAR_WEBHOOK_SECRET ?? ''
  const expected = createHmac('sha256', secret).update(payload).digest('hex')
  const expectedBuffer = Buffer.from(expected, 'hex')
  const signatureBuffer = Buffer.from(signature, 'hex')

  if (expectedBuffer.length !== signatureBuffer.length) return false
  return timingSafeEqual(expectedBuffer, signatureBuffer)
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('x-moyasar-signature') ?? ''

  // 1. Verify HMAC signature
  if (!verifyMoyasarSignature(body, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let payload: unknown
  try {
    payload = JSON.parse(body)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = moyasarWebhookSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const { data: event } = parsed

  // Only handle paid events
  if (event.type !== 'payment_paid' && event.data.status !== 'paid') {
    return NextResponse.json({ received: true })
  }

  const paymentRef = event.data.id
  const idempotencyKey = `moyasar:${paymentRef}`

  // 2. Check idempotency — skip if already processed
  const alreadyProcessed = await checkIdempotency(idempotencyKey)
  if (alreadyProcessed) {
    return NextResponse.json({ received: true, skipped: true })
  }

  try {
    await db.$transaction(async (tx) => {
      // 3. Find the payment record
      const payment = await tx.payment.findUnique({
        where: { gatewayRef: paymentRef },
        include: { order: { include: { items: true, user: true } } },
      })

      if (!payment || payment.status === 'PAID') return

      // 4. Find an AVAILABLE eSIM profile for the package
      const packageId = payment.order.items[0]?.packageId
      if (!packageId) throw new Error('No package found in order')

      const esimProfile = await tx.esimProfile.findFirst({
        where: { packageId, status: 'AVAILABLE' },
        orderBy: { createdAt: 'asc' },
      })

      if (!esimProfile) throw new Error('No eSIM available for this package')

      // 5. Reserve the eSIM profile
      await tx.esimProfile.update({
        where: { id: esimProfile.id },
        data: {
          status: 'RESERVED',
          reservedUntil: new Date(Date.now() + 5 * 60 * 1000),
        },
      })

      // 6. Update payment + order status
      await tx.payment.update({
        where: { id: payment.id },
        data: { status: 'PAID', webhookPayload: parsed.data as object },
      })

      await tx.order.update({
        where: { id: payment.orderId },
        data: { status: 'PROCESSING' },
      })

      // 7. Mark eSIM as SOLD and link to order
      await tx.esimProfile.update({
        where: { id: esimProfile.id },
        data: {
          status: 'SOLD',
          soldAt: new Date(),
          orderId: payment.orderId,
          reservedUntil: null,
        },
      })

      // 8. Mark order as COMPLETED
      await tx.order.update({
        where: { id: payment.orderId },
        data: { status: 'COMPLETED' },
      })

      // 9. Log delivery event
      await tx.deliveryEvent.create({
        data: {
          orderId: payment.orderId,
          status: 'PROCESSING',
          message: 'eSIM profile assigned, sending email',
        },
      })

      // 10. Log audit
      await tx.auditLog.create({
        data: {
          userId: payment.order.userId,
          action: 'ESIM_DELIVERED',
          entity: 'esim_profile',
          entityId: esimProfile.id,
          metadata: { orderId: payment.orderId, gateway: 'MOYASAR' },
        },
      })

      // 11. Decrypt and send email (outside transaction is fine)
      const [activationCode, qrPayload] = await Promise.all([
        getSecret(esimProfile.activationCodeVaultId),
        getSecret(esimProfile.qrPayloadVaultId),
      ])

      await sendEsimDeliveryEmail({
        to: payment.order.user.email,
        name: payment.order.user.name,
        orderId: payment.orderId,
        activationCode,
        qrPayload,
      })

      // 12. Final delivery log
      await tx.deliveryEvent.create({
        data: {
          orderId: payment.orderId,
          status: 'DELIVERED',
          message: 'Email sent successfully',
        },
      })
    })

    // 13. Mark idempotency key to prevent double-processing
    await setIdempotency(idempotencyKey)

    return NextResponse.json({ received: true, processed: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'

    await db.deliveryEvent.create({
      data: {
        orderId: 'unknown',
        status: 'FAILED',
        message,
      },
    }).catch(() => null)

    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }
}
