import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { checkoutSchema } from '@/lib/validations'
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
  // Auth check
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body: unknown = await request.json()
  const parsed = checkoutSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'بيانات غير صحيحة' }, { status: 400 })
  }

  const { packageId, couponCode } = parsed.data

  // Get package
  const pkg = await db.package.findUnique({
    where: { id: packageId, isActive: true },
  })
  if (!pkg) return NextResponse.json({ error: 'الباقة غير موجودة' }, { status: 404 })

  // Check availability
  const available = await db.esimProfile.count({
    where: { packageId, status: 'AVAILABLE' },
  })
  if (available === 0) {
    return NextResponse.json({ error: 'الباقة غير متوفرة حالياً' }, { status: 409 })
  }

  // Apply coupon if provided
  let discountAmount = 0
  let couponId: string | undefined

  if (couponCode) {
    const coupon = await db.coupon.findUnique({
      where: { code: couponCode, isActive: true },
    })
    if (coupon) {
      if (coupon.type === 'PERCENTAGE') {
        discountAmount = (Number(pkg.priceSar) * Number(coupon.value)) / 100
      } else {
        discountAmount = Number(coupon.value)
      }
      couponId = coupon.id
    }
  }

  const finalPrice = Math.max(0, Number(pkg.priceSar) - discountAmount)

  // Create order
  const order = await db.order.create({
    data: {
      userId: session.user.id,
      status: 'PENDING',
      totalSar: finalPrice,
      totalUsd: finalPrice / 3.75,
      currency: 'SAR',
      couponId,
      discountAmount: discountAmount > 0 ? discountAmount : undefined,
      items: {
        create: { packageId, quantity: 1, unitPrice: pkg.priceSar },
      },
    },
  })

  // Create Moyasar payment URL
  const moyasarUrl = `https://api.moyasar.com/v1/payments`
  const amountHalala = Math.round(finalPrice * 100)

  const moyasarBody = {
    publishable_api_key: process.env.MOYASAR_PUBLIC_KEY,
    amount: amountHalala,
    currency: 'SAR',
    description: `باقة ${pkg.nameAr}`,
    callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/checkout/callback`,
    metadata: { orderId: order.id, packageId, userId: session.user.id },
    source: {
      type: 'creditcard',
      // Front-end collects card details via Moyasar.js
    },
  }

  // For now, return a Moyasar hosted page URL
  const paymentUrl = `https://payment.moyasar.com/?publishable_api_key=${process.env.MOYASAR_PUBLIC_KEY}&amount=${amountHalala}&currency=SAR&description=${encodeURIComponent(`باقة ${pkg.nameAr}`)}&callback_url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_APP_URL}/account`)}&metadata[orderId]=${order.id}`

  // Store payment record
  await db.payment.create({
    data: {
      orderId: order.id,
      gateway: 'MOYASAR',
      gatewayRef: `pending-${order.id}`,
      amount: finalPrice,
      currency: 'SAR',
      status: 'PENDING',
      idempotencyKey: `checkout-${order.id}`,
    },
  })

  return NextResponse.json({ url: paymentUrl, orderId: order.id })
}
