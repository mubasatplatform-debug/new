import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface OrderConfirmationEmailProps {
  name: string
  orderId: string
  packageName: string
  amount: number
  currency: string
}

export function OrderConfirmationEmail({
  name,
  orderId,
  packageName,
  amount,
  currency,
}: OrderConfirmationEmailProps) {
  const formattedAmount = new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency,
  }).format(amount)

  return (
    <Html dir="rtl" lang="ar">
      <Head />
      <Preview>تأكيد طلبك #{orderId}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>تم استلام طلبك ✅</Heading>

          <Text style={text}>مرحباً {name}،</Text>
          <Text style={text}>
            تم استلام طلبك بنجاح وجارٍ معالجته. ستصلك رسالة أخرى مع شريحة eSIM فور تأكيد الدفع.
          </Text>

          <Hr style={hr} />

          <Section style={detailsSection}>
            <Text style={detailRow}>
              <strong>رقم الطلب:</strong> #{orderId}
            </Text>
            <Text style={detailRow}>
              <strong>الباقة:</strong> {packageName}
            </Text>
            <Text style={detailRow}>
              <strong>المبلغ:</strong> {formattedAmount}
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            إذا لم تقم بهذا الطلب، تواصل معنا فوراً.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = { backgroundColor: '#f6f9fc', fontFamily: 'sans-serif' }
const container = { backgroundColor: '#fff', margin: '0 auto', padding: '40px 20px', maxWidth: '560px', borderRadius: '8px' }
const heading = { fontSize: '24px', fontWeight: '700', color: '#1a1a2e', textAlign: 'center' as const }
const text = { fontSize: '16px', color: '#374151', lineHeight: '24px', margin: '0 0 12px' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const detailsSection = { backgroundColor: '#f9fafb', padding: '16px', borderRadius: '6px' }
const detailRow = { fontSize: '15px', color: '#374151', margin: '0 0 8px' }
const footer = { fontSize: '12px', color: '#9ca3af', textAlign: 'center' as const }
