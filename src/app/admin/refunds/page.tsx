import { db } from '@/lib/db'
import { formatPrice, formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'المستردات' }

async function getRefunds() {
  return db.walletTransaction.findMany({
    where: { type: 'REFUND' },
    include: {
      wallet: { include: { user: { select: { name: true, email: true } } } },
    },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })
}

export default async function RefundsPage() {
  const refunds = await getRefunds()

  const totalRefunded = refunds.reduce((sum, r) => sum + Number(r.amount), 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">المستردات</h1>
        <div className="border rounded-xl px-4 py-2 bg-card text-sm">
          الإجمالي: <span className="font-bold text-red-500">{formatPrice(totalRefunded)}</span>
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {['العميل', 'المبلغ', 'الوصف', 'التاريخ'].map(h => (
                <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {refunds.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-12 text-muted-foreground">لا توجد مستردات</td>
              </tr>
            ) : (
              refunds.map((r, i) => (
                <tr key={r.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                  <td className="px-4 py-3">
                    <p className="font-medium">{r.wallet.user.name}</p>
                    <p className="text-xs text-muted-foreground">{r.wallet.user.email}</p>
                  </td>
                  <td className="px-4 py-3 font-medium text-red-500">{formatPrice(Number(r.amount))}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.description ?? '—'}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(r.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
