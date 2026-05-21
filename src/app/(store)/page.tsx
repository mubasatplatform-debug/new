import Link from 'next/link'
import Image from 'next/image'
import { db } from '@/lib/db'
import { PackageCard } from '@/components/store/package-card'
import { CountryCard } from '@/components/store/country-card'

export const revalidate = 3600

async function getFeaturedPackages() {
  return db.package.findMany({
    where: { isActive: true, isFeatured: true },
    include: { country: true },
    orderBy: { sortOrder: 'asc' },
    take: 6,
  })
}

async function getPopularCountries() {
  return db.country.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
    take: 12,
  })
}

export default async function HomePage() {
  const [featuredPackages, countries] = await Promise.all([
    getFeaturedPackages(),
    getPopularCountries(),
  ])

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            شريحتك في ثوانٍ،
            <br />
            <span className="text-primary">أينما كنت</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            شرائح eSIM وSIM بتغطية في أكثر من 150 دولة. تفعيل فوري بدون انتظار.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/countries"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              تصفح الدول
            </Link>
            <Link
              href="/auth/sign-up"
              className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '⚡', title: 'تفعيل فوري', desc: 'امسح رمز QR وابدأ الاتصال في ثوانٍ' },
            { icon: '🌍', title: '+150 دولة', desc: 'تغطية عالمية بأسعار منافسة' },
            { icon: '🔒', title: 'دفع آمن', desc: 'Apple Pay وSTC Pay وبطاقات ائتمان' },
          ].map((f) => (
            <div key={f.title} className="text-center p-6 rounded-xl border bg-card">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      {featuredPackages.length > 0 && (
        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">باقات مميزة</h2>
            <Link href="/countries" className="text-primary text-sm hover:underline">
              عرض الكل
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </section>
      )}

      {/* Countries */}
      {countries.length > 0 && (
        <section className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">تصفح الدول</h2>
            <Link href="/countries" className="text-primary text-sm hover:underline">
              عرض جميع الدول
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {countries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
