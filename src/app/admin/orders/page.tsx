import { db } from '@/lib/db'
import { formatPrice, formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'الطلبات' }

const statusMap: Record<string, { label: string; cls: string }> = {
  PENDING:    { label: 'معلق',     cls: 'bg-yellow-100 text-yellow-700' },
  PAID:       { label: 'مدفوع',   cls: 'bg-blue-100 text-blue-700' },
  COMPLETED:  { label: 'مكتمل',   cls: 'bg-green-100 text-green-700' },
  CANCELLED:  { label: 'ملغى',    cls: 'bg-red-100 text-red-700' },
  REFUNDED:   { label: 'مسترد',   cls: 'bg-purple-100 text-purple-700' },
}

async function getOrders() {
  const [counts, orders] = await Promise.all([
    db.order.groupBy({ by: ['status'], _count: { id: true } }),
    db.order.findMany({
      include: {
        user: { select: { name: true, email: true } },
        items: { include: { package: { select: { nameAr: true } } } },
        payment: { select: { gateway: true, status: true } },
        shipment: { select: { status: true, trackingNumber: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    }),
  ])
  return { counts, orders }
}

export default async function OrdersPage() {
  const { counts, orders } = await getOrders()

  const byStatus = Object.fromEntries(counts.map(c => [c.status, c._count.id]))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">الطلبات</h1>

      {/* Status counts */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.entries(statusMap).map(([status, { label, cls }]) => (
          <div key={status} className="border rounded-xl p-4 bg-card text-center">
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className="text-xl font-bold">{byStatus[status] ?? 0}</p>
          </div>
        ))}
      </div>

      {/* Orders table */}
      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {['العميل', 'الباقة', 'المبلغ', 'البوابة', 'الحالة', 'الشحن', 'التاريخ'].map(h => (
                <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              const st = statusMap[order.status] ?? { label: order.status, cls: 'bg-gray-100 text-gray-600' }
              return (
                <tr key={order.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                  <td className="px-4 py-3">
                    <p className="font-medium">{order.user.name}</p>
                    <p className="text-xs text-muted-foreground">{order.user.email}</p>
                  </td>
                  <td className="px-4 py-3">{order.items[0]?.package.nameAr ?? '-'}</td>
                  <td className="px-4 py-3 font-medium">{formatPrice(Number(order.totalSar))}</td>
                  <td className="px-4 py-3 text-xs">{order.payment?.gateway ?? '-'}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${st.cls}`}>{st.label}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {order.shipment?.trackingNumber
                      ? <span className="font-mono">{order.shipment.trackingNumber}</span>
                      : order.shipment
                      ? order.shipment.status
                      : '—'}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(order.createdAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
