import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { PackageCard } from '@/components/store/package-card'
import type { Metadata } from 'next'

export const revalidate = 3600

interface Props { params: Promise<{ code: string }> }

async function getCountryWithPackages(code: string) {
  return db.country.findUnique({
    where: { code: code.toUpperCase(), isActive: true },
    include: {
      packages: {
        where: { isActive: true },
        orderBy: [{ priceSar: 'asc' }],
      },
    },
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const country = await getCountryWithPackages(code)
  if (!country) return { title: 'غير موجود' }
  return { title: `باقات ${country.nameAr}` }
}

export default async function CountryPage({ params }: Props) {
  const { code } = await params
  const country = await getCountryWithPackages(code)
  if (!country) notFound()

  const esimPackages = country.packages.filter(p => !p.providerId.startsWith('PHYSICAL'))
  const simPackages  = country.packages.filter(p =>  p.providerId.startsWith('PHYSICAL'))

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        {country.flagUrl && (
          <img src={country.flagUrl} alt={country.name} className="w-12 h-8 object-cover rounded" />
        )}
        <div>
          <h1 className="text-3xl font-bold">{country.nameAr}</h1>
          <p className="text-muted-foreground">{country.packages.length} باقة متاحة</p>
        </div>
      </div>

      {/* eSIM Packages */}
      {esimPackages.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📱</span> شرائح eSIM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {esimPackages.map(pkg => (
              <PackageCard key={pkg.id} package={{ ...pkg, country }} />
            ))}
          </div>
        </section>
      )}

      {/* Physical SIM Packages */}
      {simPackages.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📦</span> شرائح SIM فيزيائية
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {simPackages.map(pkg => (
              <PackageCard key={pkg.id} package={{ ...pkg, country }} isPhysical />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
