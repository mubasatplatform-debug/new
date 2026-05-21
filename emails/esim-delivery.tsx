import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface EsimDeliveryEmailProps {
  name: string
  orderId: string
  activationCode: string
  qrPayload: string
}

export function EsimDeliveryEmail({
  name,
  orderId,
  activationCode,
  qrPayload,
}: EsimDeliveryEmailProps) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrPayload)}`
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://esimplatform.com'

  return (
    <Html dir="rtl" lang="ar">
      <Head />
      <Preview>شريحة eSIM الخاصة بك جاهزة للتفعيل 🎉</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>شريحة eSIM جاهزة! 🎉</Heading>

          <Text style={text}>مرحباً {name}،</Text>
          <Text style={text}>
            شكراً لك على طلبك. شريحة eSIM الخاصة بك جاهزة الآن للتفعيل.
          </Text>

          <Section style={qrSection}>
            <Text style={label}>امسح رمز QR لتفعيل شريحتك:</Text>
            <Img src={qrUrl} width={200} height={200} alt="QR Code" style={qrImage} />
          </Section>

          <Hr style={hr} />

          <Section style={codeSection}>
            <Text style={label}>أو أدخل كود التفعيل يدوياً:</Text>
            <Text style={codeBlock}>{activationCode}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={instructionTitle}>خطوات التفعيل:</Text>
            <Text style={text}>1. اذهب إلى الإعدادات &gt; شبكة الجوال &gt; إضافة شريحة eSIM</Text>
            <Text style={text}>2. امسح رمز QR أعلاه</Text>
            <Text style={text}>3. اتبع التعليمات على شاشتك</Text>
            <Text style={text}>4. فعّل شريحة eSIM عند الوصول إلى الوجهة</Text>
          </Section>

          <Hr style={hr} />

          <Button href={`${appUrl}/account/esims`} style={button}>
            عرض شريحتي في حسابي
          </Button>

          <Text style={footer}>رقم الطلب: #{orderId}</Text>
          <Text style={footer}>
            إذا واجهت أي مشكلة، تواصل معنا عبر الدعم الفني.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px',
  borderRadius: '8px',
}

const heading = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#1a1a2e',
  textAlign: 'center' as const,
  margin: '0 0 24px',
}

const text = {
  fontSize: '16px',
  color: '#374151',
  lineHeight: '24px',
  margin: '0 0 12px',
}

const label = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#6b7280',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  margin: '0 0 8px',
}

const qrSection = {
  textAlign: 'center' as const,
  margin: '24px 0',
}

const qrImage = {
  margin: '0 auto',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
}

const codeSection = {
  margin: '24px 0',
}

const codeBlock = {
  fontFamily: 'monospace',
  fontSize: '14px',
  backgroundColor: '#f3f4f6',
  padding: '12px 16px',
  borderRadius: '6px',
  wordBreak: 'break-all' as const,
  color: '#1f2937',
}

const instructionTitle = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0 0 8px',
}

const button = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: '600',
  display: 'block',
  textAlign: 'center' as const,
  textDecoration: 'none',
  margin: '24px 0',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
}

const footer = {
  fontSize: '12px',
  color: '#9ca3af',
  textAlign: 'center' as const,
  margin: '4px 0',
}
