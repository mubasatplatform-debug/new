import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { db } from '@/lib/db'
import { checkIdempotency, setIdempotency } from '@/lib/redis'
import { getSecret } from '@/lib/vault'
import { sendEsimDeliveryEmail } from '@/lib/email'
import { isWhatsAppConfigured, sendEsimDeliveryWhatsApp } from '@/lib/whatsapp'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '')

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature') ?? ''

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET ?? '',
    )
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  if (session.payment_status !== 'paid') {
    return NextResponse.json({ received: true })
  }

  const paymentRef = session.id
  const idempotencyKey = `stripe:${paymentRef}`

  const alreadyProcessed = await checkIdempotency(idempotencyKey)
  if (alreadyProcessed) {
    return NextResponse.json({ received: true, skipped: true })
  }

  try {
    await db.$transaction(async (tx) => {
      const payment = await tx.payment.findUnique({
        where: { gatewayRef: paymentRef },
        include: { order: { include: { items: true, user: true } } },
      })

      if (!payment || payment.status === 'PAID') return

      const packageId = payment.order.items[0]?.packageId
      if (!packageId) throw new Error('No package in order')

      const esimProfile = await tx.esimProfile.findFirst({
        where: { packageId, status: 'AVAILABLE' },
        orderBy: { createdAt: 'asc' },
      })

      if (!esimProfile) throw new Error('No eSIM available')

      await tx.esimProfile.update({
        where: { id: esimProfile.id },
        data: { status: 'RESERVED', reservedUntil: new Date(Date.now() + 5 * 60 * 1000) },
      })

      await tx.payment.update({
        where: { id: payment.id },
        data: { status: 'PAID', webhookPayload: event as unknown as object },
      })

      await tx.order.update({
        where: { id: payment.orderId },
        data: { status: 'PROCESSING' },
      })

      await tx.esimProfile.update({
        where: { id: esimProfile.id },
        data: { status: 'SOLD', soldAt: new Date(), orderId: payment.orderId, reservedUntil: null },
      })

      await tx.order.update({
        where: { id: payment.orderId },
        data: { status: 'COMPLETED' },
      })

      await tx.deliveryEvent.create({
        data: { orderId: payment.orderId, status: 'PROCESSING' },
      })

      await tx.auditLog.create({
        data: {
          userId: payment.order.userId,
          action: 'ESIM_DELIVERED',
          entity: 'esim_profile',
          entityId: esimProfile.id,
          metadata: { orderId: payment.orderId, gateway: 'STRIPE' },
        },
      })

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

      // WhatsApp notification (best-effort — must not break delivery)
      if (isWhatsAppConfigured() && payment.order.user.phone) {
        try {
          await sendEsimDeliveryWhatsApp({
            to: payment.order.user.phone,
            name: payment.order.user.name,
            orderId: payment.orderId,
            activationCode,
          })
        } catch (whatsappError) {
          const msg = whatsappError instanceof Error ? whatsappError.message : 'unknown'
          console.error('[STRIPE WEBHOOK] WhatsApp notify failed:', msg)
        }
      }

      await tx.deliveryEvent.create({
        data: { orderId: payment.orderId, status: 'DELIVERED', message: 'Email sent' },
      })
    })

    await setIdempotency(idempotencyKey)
    return NextResponse.json({ received: true, processed: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('[STRIPE WEBHOOK]', message)
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }
}
