import { db } from '@/lib/db'
import { formatPrice, formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'العملاء' }

async function getCustomers() {
  return db.user.findMany({
    where: { role: 'CUSTOMER' },
    include: {
      _count: { select: { orders: true } },
      orders: {
        where: { status: 'COMPLETED' },
        select: { totalSar: true },
      },
      wallet: { select: { balanceSar: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })
}

export default async function CustomersPage() {
  const customers = await getCustomers()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">العملاء</h1>
        <div className="border rounded-xl px-4 py-2 bg-card text-sm">
          إجمالي: <span className="font-bold">{customers.length}</span>
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {['الاسم', 'البريد', 'الطلبات', 'الإيرادات', 'رصيد المحفظة', 'تاريخ التسجيل'].map(h => (
                <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, i) => {
              const totalSpent = customer.orders.reduce((sum, o) => sum + Number(o.totalSar), 0)
              return (
                <tr key={customer.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                  <td className="px-4 py-3 font-medium">{customer.name ?? '—'}</td>
                  <td className="px-4 py-3 text-muted-foreground">{customer.email}</td>
                  <td className="px-4 py-3 text-center">{customer._count.orders}</td>
                  <td className="px-4 py-3 font-medium text-green-600">{formatPrice(totalSpent)}</td>
                  <td className="px-4 py-3">{formatPrice(Number(customer.wallet?.balanceSar ?? 0))}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(customer.createdAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
