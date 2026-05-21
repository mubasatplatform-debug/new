import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { CheckoutButton } from '@/components/store/checkout-button'
import type { Metadata } from 'next'

export const revalidate = 3600

interface Props { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const pkg = await db.package.findUnique({ where: { id } })
  if (!pkg) return { title: 'غير موجود' }
  return { title: `${pkg.nameAr} — ${Number(pkg.dataGb)} GB` }
}

export default async function PackagePage({ params }: Props) {
  const { id } = await params
  const pkg = await db.package.findUnique({
    where: { id, isActive: true },
    include: { country: true },
  })

  if (!pkg) notFound()

  const availableCount = await db.esimProfile.count({
    where: { packageId: id, status: 'AVAILABLE' },
  })

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="border rounded-2xl p-8 bg-card shadow-sm">
        {/* Country */}
        {pkg.country && (
          <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
            {pkg.country.flagUrl && (
              <img src={pkg.country.flagUrl} alt={pkg.country.nameAr}
                className="w-6 h-4 object-cover rounded-sm" />
            )}
            {pkg.country.nameAr}
          </div>
        )}

        <h1 className="text-3xl font-bold mb-2">{pkg.nameAr}</h1>
        {pkg.description && (
          <p className="text-muted-foreground mb-6">{pkg.description}</p>
        )}

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { label: 'البيانات', value: `${Number(pkg.dataGb)} GB` },
            { label: 'المدة', value: `${pkg.validityDays} يوم` },
            { label: 'التفعيل', value: 'فوري' },
            { label: 'المتوفر', value: `${availableCount} شريحة` },
          ].map(d => (
            <div key={d.label} className="bg-muted/50 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">{d.label}</p>
              <p className="font-semibold">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">السعر</p>
            <p className="text-4xl font-bold text-primary">
              {Number(pkg.priceSar).toFixed(0)}
              <span className="text-lg font-normal"> ر.س</span>
            </p>
          </div>
          <CheckoutButton packageId={pkg.id} available={availableCount > 0} />
        </div>
      </div>
    </div>
  )
}
