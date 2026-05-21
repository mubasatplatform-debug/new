import { db } from '@/lib/db'
import { CountryCard } from '@/components/store/country-card'
import type { Metadata } from 'next'

export const revalidate = 3600
export const metadata: Metadata = { title: 'تصفح الدول' }

async function getCountries() {
  return db.country.findMany({
    where: { isActive: true },
    include: { _count: { select: { packages: { where: { isActive: true } } } } },
    orderBy: { sortOrder: 'asc' },
  })
}

export default async function CountriesPage() {
  const countries = await getCountries()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">اختر وجهتك</h1>
        <p className="text-muted-foreground">
          باقات eSIM وSIM متاحة في {countries.length}+ دولة
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            packageCount={country._count.packages}
          />
        ))}
      </div>
    </div>
  )
}
