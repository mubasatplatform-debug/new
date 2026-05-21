import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'المخزون' }

async function getInventory() {
  const [esimStats, simStats, esimProfiles, simProfiles] = await Promise.all([
    db.esimProfile.groupBy({
      by: ['status'],
      _count: { id: true },
    }),
    db.physicalSimProfile.groupBy({
      by: ['status'],
      _count: { id: true },
    }),
    db.esimProfile.findMany({
      include: { package: { select: { nameAr: true } } },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
    db.physicalSimProfile.findMany({
      include: { package: { select: { nameAr: true } } },
      orderBy: { createdAt: 'desc' },
      take: 50,
    }),
  ])

  return { esimStats, simStats, esimProfiles, simProfiles }
}

const esimStatusLabel: Record<string, { label: string; cls: string }> = {
  AVAILABLE: { label: 'متاحة',    cls: 'bg-green-100 text-green-700' },
  RESERVED:  { label: 'محجوزة',  cls: 'bg-yellow-100 text-yellow-700' },
  SOLD:      { label: 'مباعة',   cls: 'bg-blue-100 text-blue-700' },
  FAILED:    { label: 'فاشلة',   cls: 'bg-red-100 text-red-700' },
  REFUNDED:  { label: 'مستردة',  cls: 'bg-purple-100 text-purple-700' },
  EXPIRED:   { label: 'منتهية',  cls: 'bg-gray-100 text-gray-600' },
}

const simStatusLabel: Record<string, { label: string; cls: string }> = {
  AVAILABLE: { label: 'متاحة',    cls: 'bg-green-100 text-green-700' },
  RESERVED:  { label: 'محجوزة',  cls: 'bg-yellow-100 text-yellow-700' },
  SOLD:      { label: 'مباعة',   cls: 'bg-blue-100 text-blue-700' },
  SHIPPED:   { label: 'مشحونة',  cls: 'bg-indigo-100 text-indigo-700' },
  DELIVERED: { label: 'مسلّمة',  cls: 'bg-teal-100 text-teal-700' },
  RETURNED:  { label: 'مُرجعة',  cls: 'bg-red-100 text-red-700' },
}

export default async function InventoryPage() {
  const { esimStats, simStats, esimProfiles, simProfiles } = await getInventory()

  const esimByStatus = Object.fromEntries(esimStats.map(s => [s.status, s._count.id]))
  const simByStatus  = Object.fromEntries(simStats.map(s => [s.status, s._count.id]))

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">المخزون</h1>

      {/* eSIM Stats */}
      <section>
        <h2 className="text-lg font-semibold mb-3">شرائح eSIM</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          {Object.entries(esimStatusLabel).map(([status, { label, cls }]) => (
            <div key={status} className="border rounded-xl p-4 bg-card text-center">
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="text-xl font-bold">{esimByStatus[status] ?? 0}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {['الباقة', 'الحالة', 'محجوز حتى', 'تاريخ الإنشاء'].map(h => (
                  <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {esimProfiles.map((p, i) => {
                const s = esimStatusLabel[p.status] ?? { label: p.status, cls: 'bg-gray-100 text-gray-600' }
                return (
                  <tr key={p.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-4 py-3">{p.package?.nameAr ?? '-'}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.cls}`}>{s.label}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {p.reservedUntil ? formatDate(p.reservedUntil) : '—'}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(p.createdAt)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Physical SIM Stats */}
      <section>
        <h2 className="text-lg font-semibold mb-3">شرائح فيزيائية</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          {Object.entries(simStatusLabel).map(([status, { label, cls }]) => (
            <div key={status} className="border rounded-xl p-4 bg-card text-center">
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="text-xl font-bold">{simByStatus[status] ?? 0}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                {['ICCID', 'الباقة', 'الحالة', 'تاريخ الإنشاء'].map(h => (
                  <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {simProfiles.map((p, i) => {
                const s = simStatusLabel[p.status] ?? { label: p.status, cls: 'bg-gray-100 text-gray-600' }
                return (
                  <tr key={p.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-4 py-3 font-mono text-xs">{p.iccid}</td>
                    <td className="px-4 py-3">{p.package?.nameAr ?? '-'}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.cls}`}>{s.label}</span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(p.createdAt)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
