import { Resend } from 'resend'
import { EsimDeliveryEmail } from '@/emails/esim-delivery'
import { OrderConfirmationEmail } from '@/emails/order-confirmation'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.EMAIL_FROM ?? 'eSIM Platform <noreply@esimplatform.com>'

interface EsimDeliveryParams {
  to: string
  name: string
  orderId: string
  activationCode: string
  qrPayload: string
}

export async function sendEsimDeliveryEmail(params: EsimDeliveryParams): Promise<void> {
  const { error } = await resend.emails.send({
    from: FROM,
    to: params.to,
    subject: 'شريحة eSIM الخاصة بك جاهزة! 🎉',
    react: EsimDeliveryEmail({
      name: params.name,
      orderId: params.orderId,
      activationCode: params.activationCode,
      qrPayload: params.qrPayload,
    }),
  })

  if (error) throw new Error(`Email send failed: ${error.message}`)
}

interface OrderConfirmationParams {
  to: string
  name: string
  orderId: string
  packageName: string
  amount: number
  currency: string
}

export async function sendOrderConfirmationEmail(params: OrderConfirmationParams): Promise<void> {
  const { error } = await resend.emails.send({
    from: FROM,
    to: params.to,
    subject: `تأكيد الطلب #${params.orderId}`,
    react: OrderConfirmationEmail(params),
  })

  if (error) throw new Error(`Email send failed: ${error.message}`)
}
