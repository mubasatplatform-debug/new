import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'الشحنات' }

const shipStatusMap: Record<string, { label: string; cls: string }> = {
  LABEL_CREATED: { label: 'تم الإنشاء',    cls: 'bg-gray-100 text-gray-600' },
  PICKED_UP:     { label: 'تم الاستلام',   cls: 'bg-blue-100 text-blue-700' },
  IN_TRANSIT:    { label: 'في الطريق',     cls: 'bg-indigo-100 text-indigo-700' },
  OUT_FOR_DEL:   { label: 'للتسليم اليوم', cls: 'bg-yellow-100 text-yellow-700' },
  DELIVERED:     { label: 'تم التسليم',    cls: 'bg-green-100 text-green-700' },
  FAILED_DEL:    { label: 'فشل التسليم',   cls: 'bg-red-100 text-red-700' },
  RETURNED:      { label: 'مُرجعة',        cls: 'bg-purple-100 text-purple-700' },
}

async function getShipments() {
  return db.shipment.findMany({
    include: {
      order: {
        include: { user: { select: { name: true, email: true } } },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 100,
  })
}

export default async function ShipmentsPage() {
  const shipments = await getShipments()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">الشحنات</h1>

      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {['العميل', 'المزوّد', 'رقم التتبع', 'الحالة', 'العنوان', 'التاريخ'].map(h => (
                <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shipments.map((s, i) => {
              const st = shipStatusMap[s.status] ?? { label: s.status, cls: 'bg-gray-100 text-gray-600' }
              return (
                <tr key={s.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                  <td className="px-4 py-3">
                    <p className="font-medium">{s.order.user.name}</p>
                    <p className="text-xs text-muted-foreground">{s.order.user.email}</p>
                  </td>
                  <td className="px-4 py-3 text-xs uppercase">{s.provider}</td>
                  <td className="px-4 py-3 font-mono text-xs">{s.trackingNumber ?? '—'}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${st.cls}`}>{st.label}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate">
                    {s.addressLine1}, {s.city}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(s.createdAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
