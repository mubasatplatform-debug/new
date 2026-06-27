// WhatsApp AI customer-service agent powered by Claude.
// Receives the customer's phone + message, runs a tool-use loop against the DB,
// and returns a short plain-text reply suitable for WhatsApp.

import Anthropic from '@anthropic-ai/sdk'
import { db } from '@/lib/db'
import { getSecret } from '@/lib/vault'
import { redis } from '@/lib/redis'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY ?? '',
})

const SYSTEM_PROMPT = `أنت مساعد خدمة عملاء ذكي لمنصة SIM/eSIM. تتواصل مع العملاء عبر WhatsApp.

*قدراتك:*
- الاستعلام عن حالة الطلبات ومحتوياتها
- استرجاع رمز تفعيل eSIM أو QR للعميل
- عرض الباقات المتاحة (مع إمكانية التصفية بالدولة)
- الاستعلام عن رصيد المحفظة

*قواعد صارمة:*
- تحدث بلغة العميل (عربي أو إنجليزي) — لا تخلط اللغتين
- رسائل WhatsApp قصيرة ومباشرة — تجنب الفقرات الطويلة
- رمز التفعيل آمن للمشاركة مع صاحبه — لكن تحقق أن الطلب يخص رقم المتصل
- لا تكشف معلومات مستخدم آخر أبداً
- إذا لم تجد الحساب بالهاتف، اطلب رقم الطلب صراحةً
- في حالة خطأ تقني، اعتذر بإيجاز وأخبر العميل بالتواصل مع الدعم`

// ─── Tool definitions ────────────────────────────────────────────────────────

const TOOLS: Anthropic.Tool[] = [
  {
    name: 'get_orders_by_phone',
    description:
      'Look up recent orders for the customer using their phone number. Returns order IDs, statuses, and package summaries.',
    input_schema: {
      type: 'object' as const,
      properties: {
        phone: { type: 'string', description: 'Customer phone (digits only, no + prefix)' },
        limit: { type: 'number', description: 'Max orders to return (default 5)' },
      },
      required: ['phone'],
    },
  },
  {
    name: 'get_esim_details',
    description:
      'Retrieve the eSIM activation code for a specific order. Verifies the order belongs to the calling customer\'s phone.',
    input_schema: {
      type: 'object' as const,
      properties: {
        orderId: { type: 'string', description: 'The order ID' },
        phone: { type: 'string', description: 'Customer phone to verify ownership (digits only)' },
      },
      required: ['orderId', 'phone'],
    },
  },
  {
    name: 'get_packages',
    description: 'List available eSIM/SIM packages, optionally filtered by ISO country code.',
    input_schema: {
      type: 'object' as const,
      properties: {
        countryCode: { type: 'string', description: 'ISO-2 country code e.g. SA, AE, US (optional)' },
        limit: { type: 'number', description: 'Max packages to return (default 8)' },
      },
      required: [],
    },
  },
  {
    name: 'get_wallet_balance',
    description: 'Get the wallet balance for a customer by phone number.',
    input_schema: {
      type: 'object' as const,
      properties: {
        phone: { type: 'string', description: 'Customer phone (digits only)' },
      },
      required: ['phone'],
    },
  },
]

// ─── Tool implementations ────────────────────────────────────────────────────

async function getOrdersByPhone(phone: string, limit = 5) {
  const user = await db.user.findFirst({
    where: { phone: { contains: phone } },
    select: { id: true, name: true },
  })
  if (!user) {
    return { found: false, message: 'No account found for this phone number.' }
  }

  const orders = await db.order.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    take: Math.min(limit, 10),
    select: {
      id: true,
      status: true,
      totalSar: true,
      currency: true,
      createdAt: true,
      items: {
        select: {
          quantity: true,
          package: {
            select: { nameAr: true, name: true, dataGb: true, validityDays: true },
          },
        },
      },
    },
  })

  return {
    found: true,
    customerName: user.name,
    orders: orders.map((o) => ({
      id: o.id,
      status: o.status,
      totalSar: o.totalSar.toString(),
      date: o.createdAt.toISOString().split('T')[0],
      items: o.items.map((i) => ({
        package: i.package.nameAr || i.package.name,
        dataGb: i.package.dataGb.toString(),
        validityDays: i.package.validityDays,
        qty: i.quantity,
      })),
    })),
  }
}

async function getEsimDetails(orderId: string, phone: string) {
  const user = await db.user.findFirst({
    where: { phone: { contains: phone } },
    select: { id: true },
  })
  if (!user) {
    return { found: false, message: 'No account found for this phone number.' }
  }

  const order = await db.order.findFirst({
    where: { id: orderId, userId: user.id },
    include: {
      esimProfile: {
        select: {
          status: true,
          activationCodeVaultId: true,
          soldAt: true,
        },
      },
    },
  })

  if (!order) {
    return { found: false, message: 'Order not found or does not belong to this account.' }
  }
  if (!order.esimProfile) {
    return {
      found: false,
      message: 'No eSIM profile for this order. If it is a physical SIM, check your delivery email.',
    }
  }
  if (order.esimProfile.status !== 'SOLD') {
    return { found: false, message: `eSIM is not yet delivered (status: ${order.esimProfile.status}).` }
  }

  const activationCode = await getSecret(order.esimProfile.activationCodeVaultId)

  return {
    found: true,
    orderId,
    activationCode,
    deliveredAt: order.esimProfile.soldAt?.toISOString().split('T')[0] ?? null,
  }
}

async function getPackages(countryCode?: string, limit = 8) {
  const packages = await db.package.findMany({
    where: {
      isActive: true,
      ...(countryCode
        ? { country: { code: countryCode.toUpperCase() } }
        : {}),
    },
    orderBy: [{ isFeatured: 'desc' }, { sortOrder: 'asc' }, { priceSar: 'asc' }],
    take: Math.min(limit, 20),
    select: {
      id: true,
      nameAr: true,
      name: true,
      dataGb: true,
      validityDays: true,
      priceSar: true,
      priceUsd: true,
      isFeatured: true,
      country: { select: { nameAr: true, name: true, code: true } },
    },
  })

  return {
    count: packages.length,
    packages: packages.map((p) => ({
      id: p.id,
      name: p.nameAr || p.name,
      dataGb: Number(p.dataGb),
      validityDays: p.validityDays,
      priceSar: Number(p.priceSar),
      priceUsd: Number(p.priceUsd),
      country: p.country?.nameAr ?? p.country?.name ?? 'عالمي / Global',
      featured: p.isFeatured,
    })),
  }
}

async function getWalletBalance(phone: string) {
  const user = await db.user.findFirst({
    where: { phone: { contains: phone } },
    select: {
      id: true,
      wallet: { select: { balanceSar: true, currency: true, isActive: true } },
    },
  })
  if (!user) {
    return { found: false, message: 'No account found for this phone number.' }
  }
  if (!user.wallet) {
    return { found: true, balance: 0, currency: 'SAR' }
  }
  return {
    found: true,
    balance: Number(user.wallet.balanceSar),
    currency: user.wallet.currency,
    isActive: user.wallet.isActive,
  }
}

// ─── Tool dispatcher ─────────────────────────────────────────────────────────

async function executeTool(name: string, input: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case 'get_orders_by_phone':
      return getOrdersByPhone(String(input.phone), Number(input.limit) || 5)
    case 'get_esim_details':
      return getEsimDetails(String(input.orderId), String(input.phone))
    case 'get_packages':
      return getPackages(input.countryCode ? String(input.countryCode) : undefined, Number(input.limit) || 8)
    case 'get_wallet_balance':
      return getWalletBalance(String(input.phone))
    default:
      return { error: `Unknown tool: ${name}` }
  }
}

// ─── Type-safe content conversion for the agentic loop ──────────────────────

// Converts API response content to message params for the next API call.
// Handles text and tool_use blocks; skips server-side or web-search blocks.
function toAssistantContent(blocks: Anthropic.ContentBlock[]): Anthropic.ContentBlockParam[] {
  return blocks.flatMap((b): Anthropic.ContentBlockParam[] => {
    if (b.type === 'text') return [{ type: 'text', text: b.text }]
    if (b.type === 'tool_use') return [{ type: 'tool_use', id: b.id, name: b.name, input: b.input }]
    if (b.type === 'thinking') return [{ type: 'thinking', thinking: b.thinking, signature: b.signature }]
    if (b.type === 'redacted_thinking') return [{ type: 'redacted_thinking', data: b.data }]
    return []
  })
}

// ─── Conversation history (Redis, 24h TTL, last 10 turns) ────────────────────

type HistoryEntry = { role: 'user' | 'assistant'; content: string }

async function loadHistory(phone: string): Promise<HistoryEntry[]> {
  try {
    const raw = await redis.get<string>(`wa:history:${phone}`)
    if (!raw) return []
    return JSON.parse(raw) as HistoryEntry[]
  } catch {
    return []
  }
}

async function saveHistory(phone: string, entries: HistoryEntry[]): Promise<void> {
  const trimmed = entries.slice(-10)
  await redis.setex(`wa:history:${phone}`, 86400, JSON.stringify(trimmed))
}

// ─── Main entry point ────────────────────────────────────────────────────────

/**
 * Run the WhatsApp AI agent for one incoming customer message.
 * Returns the agent's plain-text reply (≤ ~1000 chars for WhatsApp).
 */
export async function runWhatsAppAgent(customerPhone: string, incomingText: string): Promise<string> {
  const history = await loadHistory(customerPhone)

  // Build messages for the API including conversation history
  const messages: Anthropic.MessageParam[] = [
    ...history.map((h) => ({ role: h.role, content: h.content })),
    { role: 'user', content: incomingText },
  ]

  let response = await anthropic.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    tools: TOOLS,
    messages,
  })

  // Agentic loop — continue until stop_reason is not 'tool_use'
  while (response.stop_reason === 'tool_use') {
    const toolUseBlocks = response.content.filter(
      (b): b is Anthropic.ToolUseBlock => b.type === 'tool_use',
    )

    const toolResults: Anthropic.ToolResultBlockParam[] = await Promise.all(
      toolUseBlocks.map(async (block) => {
        const result = await executeTool(block.name, block.input as Record<string, unknown>)
        return {
          type: 'tool_result' as const,
          tool_use_id: block.id,
          content: JSON.stringify(result),
        }
      }),
    )

    messages.push({ role: 'assistant', content: toAssistantContent(response.content) })
    messages.push({ role: 'user', content: toolResults })

    response = await anthropic.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    })
  }

  // Extract final text reply
  const textBlock = response.content.find((b): b is Anthropic.TextBlock => b.type === 'text')
  const reply = textBlock?.text?.trim() ?? 'عذراً، حدث خطأ مؤقت. يرجى المحاولة مجدداً أو التواصل مع الدعم.'

  // Persist updated history
  await saveHistory(customerPhone, [
    ...history,
    { role: 'user', content: incomingText },
    { role: 'assistant', content: reply },
  ])

  return reply
}
