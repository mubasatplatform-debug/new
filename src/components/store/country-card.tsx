import Link from 'next/link'

interface Country {
  id: string
  code: string
  nameAr: string
  flagUrl?: string | null
}

interface Props {
  country: Country
  packageCount?: number
}

export function CountryCard({ country, packageCount }: Props) {
  return (
    <Link
      href={`/countries/${country.code.toLowerCase()}`}
      className="border rounded-xl p-4 bg-card hover:shadow-md hover:border-primary/40 transition-all flex flex-col items-center gap-2 text-center"
    >
      {country.flagUrl ? (
        <img
          src={country.flagUrl}
          alt={country.nameAr}
          className="w-12 h-8 object-cover rounded"
        />
      ) : (
        <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-lg">
          🌍
        </div>
      )}
      <p className="font-medium text-sm leading-tight">{country.nameAr}</p>
      {packageCount !== undefined && (
        <p className="text-xs text-muted-foreground">{packageCount} باقة</p>
      )}
    </Link>
  )
}
