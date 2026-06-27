// WhatsApp notifications via Infobip (REST wrapper)
// Docs: https://www.infobip.com/docs/api/channels/whatsapp
// MCP:  https://mcp.infobip.com/whatsapp
//
// Business-initiated WhatsApp messages must use a pre-approved template.
// Template names are configurable via env so they can be changed without a deploy.

const INFOBIP_BASE = process.env.INFOBIP_BASE_URL ?? ''
const INFOBIP_API_KEY = process.env.INFOBIP_API_KEY ?? ''
const INFOBIP_SENDER = process.env.INFOBIP_WHATSAPP_SENDER ?? ''
const DEFAULT_LANG = process.env.INFOBIP_WHATSAPP_LANGUAGE ?? 'ar'

const TEMPLATE_ESIM_DELIVERY = process.env.INFOBIP_TEMPLATE_ESIM_DELIVERY ?? 'esim_delivery'
const TEMPLATE_ORDER_CONFIRMATION = process.env.INFOBIP_TEMPLATE_ORDER_CONFIRMATION ?? 'order_confirmation'

export type WhatsAppResult = {
  to: string
  messageId?: string
  status?: string
}

/** True only when every Infobip credential is present. Callers skip silently otherwise. */
export function isWhatsAppConfigured(): boolean {
  return Boolean(INFOBIP_BASE && INFOBIP_API_KEY && INFOBIP_SENDER)
}

function infobipUrl(path: string): string {
  // INFOBIP_BASE may be given with or without protocol — normalize to https.
  const host = INFOBIP_BASE.replace(/^https?:\/\//, '').replace(/\/$/, '')
  return `https://${host}${path}`
}

function infobipHeaders(): Record<string, string> {
  return {
    'Authorization': `App ${INFOBIP_API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

/** Infobip expects MSISDN digits only, no leading "+". */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

// ─── Low-level senders ──────────────────────────────────────────────────────

/**
 * Send a free-form WhatsApp text message. Only valid inside the 24h customer
 * service window; for business-initiated messages use sendWhatsAppTemplate.
 */
export async function sendWhatsAppText(
  to: string,
  text: string,
  messageId?: string,
): Promise<WhatsAppResult> {
  const res = await fetch(infobipUrl('/whatsapp/1/message/text'), {
    method: 'POST',
    headers: infobipHeaders(),
    body: JSON.stringify({
      from: INFOBIP_SENDER,
      to: normalizePhone(to),
      ...(messageId ? { messageId } : {}),
      content: { text },
    }),
  })

  const data = await res.json() as {
    messageId?: string
    status?: { name?: string }
    requestError?: { serviceException?: { text?: string } }
  }

  if (!res.ok) {
    throw new Error(
      `Infobip WhatsApp text failed (${res.status}): ${data.requestError?.serviceException?.text ?? 'unknown error'}`,
    )
  }

  return { to, messageId: data.messageId, status: data.status?.name }
}

/**
 * Send a business-initiated WhatsApp template message.
 * `placeholders` fill the template body in order ({{1}}, {{2}}, ...).
 */
export async function sendWhatsAppTemplate(params: {
  to: string
  templateName: string
  placeholders?: string[]
  language?: string
  messageId?: string
}): Promise<WhatsAppResult> {
  const { to, templateName, placeholders = [], language = DEFAULT_LANG, messageId } = params

  const res = await fetch(infobipUrl('/whatsapp/1/message/template'), {
    method: 'POST',
    headers: infobipHeaders(),
    body: JSON.stringify({
      messages: [{
        from: INFOBIP_SENDER,
        to: normalizePhone(to),
        ...(messageId ? { messageId } : {}),
        content: {
          templateName,
          templateData: { body: { placeholders } },
          language,
        },
      }],
    }),
  })

  const data = await res.json() as {
    messages?: Array<{ messageId?: string; status?: { name?: string } }>
    requestError?: { serviceException?: { text?: string } }
  }

  if (!res.ok) {
    throw new Error(
      `Infobip WhatsApp template failed (${res.status}): ${data.requestError?.serviceException?.text ?? 'unknown error'}`,
    )
  }

  const msg = data.messages?.[0]
  return { to, messageId: msg?.messageId, status: msg?.status?.name }
}

// ─── High-level helpers (mirror src/lib/email.ts) ───────────────────────────

interface EsimDeliveryWhatsAppParams {
  to: string
  name: string
  orderId: string
  activationCode: string
}

/**
 * Notify the customer over WhatsApp that their eSIM is ready.
 * Deliberately omits the QR payload — only the order reference + activation code
 * go through the template; full QR delivery stays on the email channel.
 */
export async function sendEsimDeliveryWhatsApp(
  params: EsimDeliveryWhatsAppParams,
): Promise<WhatsAppResult> {
  return sendWhatsAppTemplate({
    to: params.to,
    templateName: TEMPLATE_ESIM_DELIVERY,
    placeholders: [params.name, params.orderId, params.activationCode],
    messageId: `esim-${params.orderId}`,
  })
}

interface OrderConfirmationWhatsAppParams {
  to: string
  name: string
  orderId: string
  packageName: string
  amount: number
  currency: string
}

/** Notify the customer over WhatsApp that their order is confirmed. */
export async function sendOrderConfirmationWhatsApp(
  params: OrderConfirmationWhatsAppParams,
): Promise<WhatsAppResult> {
  return sendWhatsAppTemplate({
    to: params.to,
    templateName: TEMPLATE_ORDER_CONFIRMATION,
    placeholders: [
      params.name,
      params.orderId,
      params.packageName,
      `${params.amount} ${params.currency}`,
    ],
    messageId: `order-${params.orderId}`,
  })
}
