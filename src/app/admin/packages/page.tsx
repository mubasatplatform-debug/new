import { db } from '@/lib/db'
import { formatPrice } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'الباقات' }

async function getPackages() {
  return db.package.findMany({
    include: {
      country: { select: { nameAr: true, flag: true } },
      _count: {
        select: {
          esimProfiles: { where: { status: 'AVAILABLE' } },
          physicalSimProfiles: { where: { status: 'AVAILABLE' } },
        },
      },
    },
    orderBy: [{ country: { nameAr: 'asc' } }, { priceSar: 'asc' }],
  })
}

export default async function PackagesPage() {
  const packages = await getPackages()

  const active   = packages.filter(p => p.isActive).length
  const inactive = packages.filter(p => !p.isActive).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">الباقات</h1>
        <div className="flex gap-3 text-sm">
          <div className="border rounded-xl px-4 py-2 bg-card">
            نشطة: <span className="font-bold text-green-600">{active}</span>
          </div>
          <div className="border rounded-xl px-4 py-2 bg-card">
            معطلة: <span className="font-bold text-red-500">{inactive}</span>
          </div>
        </div>
      </div>

      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {['الدولة', 'الباقة', 'البيانات', 'المدة', 'السعر', 'النوع', 'eSIM متاح', 'SIM متاح', 'الحالة'].map(h => (
                <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, i) => (
              <tr key={pkg.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                <td className="px-4 py-3">
                  <span className="mr-1">{pkg.country?.flag}</span>
                  {pkg.country?.nameAr ?? '-'}
                </td>
                <td className="px-4 py-3 font-medium">{pkg.nameAr}</td>
                <td className="px-4 py-3">{Number(pkg.dataGb)} GB</td>
                <td className="px-4 py-3">{pkg.validityDays} يوم</td>
                <td className="px-4 py-3 font-medium">{formatPrice(Number(pkg.priceSar))}</td>
                <td className="px-4 py-3">
                  {pkg.type === 'ESIM' && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">eSIM</span>
                  )}
                  {pkg.type === 'PHYSICAL_SIM' && (
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">فيزيائية</span>
                  )}
                  {pkg.type === 'BOTH' && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">كلاهما</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center font-medium">{pkg._count.esimProfiles}</td>
                <td className="px-4 py-3 text-center font-medium">{pkg._count.physicalSimProfiles}</td>
                <td className="px-4 py-3">
                  {pkg.isActive
                    ? <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">نشطة</span>
                    : <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">معطلة</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
