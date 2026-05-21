import { db } from '@/lib/db'
import { formatPrice } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'لوحة التحكم' }

async function getStats() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [
    totalOrders,
    todayOrders,
    totalRevenue,
    availableEsim,
    availableSim,
    pendingShipments,
    totalCustomers,
  ] = await Promise.all([
    db.order.count({ where: { status: 'COMPLETED' } }),
    db.order.count({ where: { status: 'COMPLETED', createdAt: { gte: today } } }),
    db.payment.aggregate({ where: { status: 'PAID' }, _sum: { amount: true } }),
    db.esimProfile.count({ where: { status: 'AVAILABLE' } }),
    db.physicalSimProfile.count({ where: { status: 'AVAILABLE' } }),
    db.shipment.count({ where: { status: { in: ['LABEL_CREATED', 'PICKED_UP', 'IN_TRANSIT'] } } }),
    db.user.count({ where: { role: 'CUSTOMER' } }),
  ])

  return {
    totalOrders,
    todayOrders,
    totalRevenue: Number(totalRevenue._sum.amount ?? 0),
    availableEsim,
    availableSim,
    pendingShipments,
    totalCustomers,
  }
}

async function getRecentOrders() {
  return db.order.findMany({
    where: { status: 'COMPLETED' },
    include: {
      user: { select: { name: true, email: true } },
      items: { include: { package: { select: { nameAr: true } } } },
      payment: { select: { gateway: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 8,
  })
}

export default async function AdminDashboardPage() {
  const [stats, recentOrders] = await Promise.all([getStats(), getRecentOrders()])

  const statCards = [
    { label: 'إجمالي الطلبات', value: stats.totalOrders, sub: `${stats.todayOrders} اليوم`, color: 'text-blue-600' },
    { label: 'الإيرادات الكلية', value: formatPrice(stats.totalRevenue), color: 'text-green-600' },
    { label: 'eSIM متاحة', value: stats.availableEsim, color: 'text-purple-600' },
    { label: 'SIM فيزيائية', value: stats.availableSim, color: 'text-orange-600' },
    { label: 'شحنات معلقة', value: stats.pendingShipments, color: 'text-yellow-600' },
    { label: 'العملاء', value: stats.totalCustomers, color: 'text-indigo-600' },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">لوحة التحكم</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {statCards.map(s => (
          <div key={s.label} className="border rounded-xl p-5 bg-card">
            <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            {s.sub && <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>}
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div>
        <h2 className="text-lg font-semibold mb-4">آخر الطلبات</h2>
        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {['العميل', 'الباقة', 'المبلغ', 'البوابة', 'الحالة'].map(h => (
                  <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={order.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                  <td className="px-4 py-3">
                    <p className="font-medium">{order.user.name}</p>
                    <p className="text-xs text-muted-foreground">{order.user.email}</p>
                  </td>
                  <td className="px-4 py-3">{order.items[0]?.package.nameAr ?? '-'}</td>
                  <td className="px-4 py-3 font-medium">{formatPrice(Number(order.totalSar))}</td>
                  <td className="px-4 py-3 text-xs">{order.payment?.gateway ?? '-'}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                      مكتمل
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
