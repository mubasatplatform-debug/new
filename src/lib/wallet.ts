import { db } from '@/lib/db'
import type { WalletTransactionType } from '@prisma/client'

export async function getOrCreateWallet(userId: string) {
  return db.wallet.upsert({
    where: { userId },
    update: {},
    create: { userId, balanceSar: 0 },
  })
}

export async function getBalance(userId: string): Promise<number> {
  const wallet = await db.wallet.findUnique({ where: { userId } })
  return Number(wallet?.balanceSar ?? 0)
}

interface CreditParams {
  userId: string
  amount: number
  type: WalletTransactionType
  description?: string
  reference?: string
  orderId?: string
}

export async function creditWallet(params: CreditParams): Promise<void> {
  const { userId, amount, type, description, reference, orderId } = params

  if (amount <= 0) throw new Error('Credit amount must be positive')

  await db.$transaction(async (tx) => {
    const wallet = await tx.wallet.upsert({
      where: { userId },
      update: { balanceSar: { increment: amount } },
      create: { userId, balanceSar: amount },
    })

    const balanceBefore = Number(wallet.balanceSar) - amount

    await tx.walletTransaction.create({
      data: {
        walletId: wallet.id,
        type,
        amount,
        balanceBefore,
        balanceAfter: Number(wallet.balanceSar),
        description,
        reference,
        orderId,
      },
    })
  })
}

interface DebitParams {
  userId: string
  amount: number
  type: WalletTransactionType
  description?: string
  reference?: string
  orderId?: string
}

export async function debitWallet(params: DebitParams): Promise<void> {
  const { userId, amount, type, description, reference, orderId } = params

  if (amount <= 0) throw new Error('Debit amount must be positive')

  await db.$transaction(async (tx) => {
    const wallet = await tx.wallet.findUnique({ where: { userId } })
    if (!wallet) throw new Error('Wallet not found')

    const currentBalance = Number(wallet.balanceSar)
    if (currentBalance < amount) throw new Error('Insufficient wallet balance')

    await tx.wallet.update({
      where: { userId },
      data: { balanceSar: { decrement: amount } },
    })

    await tx.walletTransaction.create({
      data: {
        walletId: wallet.id,
        type,
        amount,
        balanceBefore: currentBalance,
        balanceAfter: currentBalance - amount,
        description,
        reference,
        orderId,
      },
    })
  })
}

export async function addCashback(userId: string, orderAmount: number, percent = 2): Promise<void> {
  const cashbackAmount = (orderAmount * percent) / 100
  if (cashbackAmount < 0.5) return // لا نضيف أقل من 50 هللة

  await creditWallet({
    userId,
    amount: cashbackAmount,
    type: 'CASHBACK',
    description: `كاش باك ${percent}% على طلبك`,
  })
}

export async function refundToWallet(userId: string, orderId: string, amount: number): Promise<void> {
  await creditWallet({
    userId,
    amount,
    type: 'REFUND',
    description: 'استرداد مبلغ الطلب',
    orderId,
  })
}
