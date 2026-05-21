'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Package {
  id: string
  name: string
  nameAr: string
  dataGb: number | string
  validityDays: number
  priceSar: number | string
  country?: { code: string; nameAr: string; flagUrl?: string | null } | null
}

interface Props {
  package: Package
  isPhysical?: boolean
}

export function PackageCard({ package: pkg, isPhysical }: Props) {
  const price = Number(pkg.priceSar)
  const data  = Number(pkg.dataGb)

  return (
    <div className="border rounded-xl p-5 bg-card hover:shadow-md transition-shadow flex flex-col gap-4">
      {/* Country + type badge */}
      <div className="flex items-center justify-between">
        {pkg.country && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {pkg.country.flagUrl && (
              <img src={pkg.country.flagUrl} alt={pkg.country.nameAr}
                className="w-6 h-4 object-cover rounded-sm" />
            )}
            {pkg.country.nameAr}
          </div>
        )}
        <span className={cn(
          'text-xs px-2 py-0.5 rounded-full font-medium',
          isPhysical
            ? 'bg-orange-100 text-orange-700'
            : 'bg-blue-100 text-blue-700',
        )}>
          {isPhysical ? 'SIM فيزيائي' : 'eSIM'}
        </span>
      </div>

      {/* Data + validity */}
      <div>
        <p className="text-3xl font-bold">{data} GB</p>
        <p className="text-muted-foreground text-sm">{pkg.validityDays} يوم</p>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-2xl font-bold text-primary">
          {price.toFixed(0)} <span className="text-sm font-normal">ر.س</span>
        </p>
        <Link
          href={`/packages/${pkg.id}`}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          اشترِ الآن
        </Link>
      </div>
    </div>
  )
}
