// Infobip inbound WhatsApp webhook — receives messages from customers
// and replies via the AI agent powered by Claude.
//
// Security: register a secret token in the Infobip dashboard as a query
// param in your webhook URL, e.g.:
//   https://yourdomain.com/api/webhooks/infobip?token=<INFOBIP_WEBHOOK_SECRET>
//
// If INFOBIP_WEBHOOK_SECRET is not set the endpoint is open (dev/testing only).

import { NextRequest, NextResponse } from 'next/server'
import { infobipInboundSchema } from '@/lib/validations'
import { runWhatsAppAgent } from '@/lib/agent'
import { sendWhatsAppText } from '@/lib/whatsapp'
import { whatsappAgentRatelimit } from '@/lib/redis'
import { db } from '@/lib/db'

function verifyToken(request: NextRequest): boolean {
  const secret = process.env.INFOBIP_WEBHOOK_SECRET
  if (!secret) return true // no secret configured → allow all (use only in dev)

  const tokenFromQuery = request.nextUrl.searchParams.get('token')
  const tokenFromHeader = request.headers.get('x-infobip-token')

  return tokenFromQuery === secret || tokenFromHeader === secret
}

export async function POST(request: NextRequest) {
  // 1. Authenticate the request
  if (!verifyToken(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // 2. Parse body
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // 3. Validate structure
  const parsed = infobipInboundSchema.safeParse(payload)
  if (!parsed.success) {
    // Infobip may send delivery reports and other events — silently accept them
    return NextResponse.json({ received: true })
  }

  const { results } = parsed.data

  // Process each incoming message (Infobip batches rarely, but handle it)
  await Promise.allSettled(
    results.map(async (msg) => {
      // Only handle text messages
      if (msg.message.type !== 'TEXT' || !msg.message.text?.trim()) return

      const customerPhone = msg.from
      const text = msg.message.text.trim()

      // 4. Rate limit — 10 messages per hour per phone
      const { success: allowed } = await whatsappAgentRatelimit.limit(customerPhone)
      if (!allowed) {
        await sendWhatsAppText(
          customerPhone,
          'عذراً، تجاوزت الحد المسموح من الرسائل. يرجى المحاولة بعد ساعة.\nSorry, too many messages. Please try again in an hour.',
        )
        return
      }

      // 5. Run agent and get reply
      const reply = await runWhatsAppAgent(customerPhone, text)

      // 6. Send reply back to customer
      await sendWhatsAppText(customerPhone, reply)

      // 7. Audit log for inbound agent interaction
      const user = await db.user.findFirst({
        where: { phone: { contains: customerPhone } },
        select: { id: true },
      })
      await db.auditLog.create({
        data: {
          userId: user?.id ?? null,
          action: 'WHATSAPP_AGENT_REPLY',
          entity: 'whatsapp_message',
          entityId: msg.messageId,
          metadata: { from: customerPhone, messageLength: text.length },
        },
      })
    }),
  )

  // Infobip expects 200 quickly — always return success
  return NextResponse.json({ received: true })
}
