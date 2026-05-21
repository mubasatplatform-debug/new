// Shipping integrations: Aramex + OTO (open-source REST wrappers)
// Docs: developer.aramex.com | docs.oto.sa

export type ShippingAddress = {
  name: string
  phone: string
  email?: string
  line1: string
  line2?: string
  city: string
  region?: string
  country: string
  postalCode?: string
}

export type ShipmentQuote = {
  provider: 'ARAMEX' | 'OTO'
  service: string
  priceSar: number
  estimatedDays: number
}

export type CreatedShipment = {
  provider: 'ARAMEX' | 'OTO'
  trackingNumber: string
  awbNumber?: string
  labelUrl?: string
  estimatedDelivery?: Date
}

// ─── Aramex ───────────────────────────────────────────────────────────────────

const ARAMEX_BASE = 'https://ws.aramex.net/ShippingAPI.V2'
const ARAMEX_CREDS = {
  UserName: process.env.ARAMEX_USERNAME ?? '',
  Password: process.env.ARAMEX_PASSWORD ?? '',
  Version: 'v1',
  AccountNumber: process.env.ARAMEX_ACCOUNT_NUMBER ?? '',
  AccountPin: process.env.ARAMEX_ACCOUNT_PIN ?? '',
  AccountEntity: process.env.ARAMEX_ACCOUNT_ENTITY ?? 'RUH',
  AccountCountryCode: 'SA',
}

export async function getAramexQuote(
  to: ShippingAddress,
  weightKg = 0.1,
): Promise<ShipmentQuote> {
  const body = {
    ClientInfo: ARAMEX_CREDS,
    Transaction: { Reference1: `quote-${Date.now()}` },
    OriginAddress: { City: 'Riyadh', CountryCode: 'SA' },
    DestinationAddress: { City: to.city, CountryCode: to.country },
    ShipmentDetails: {
      PaymentType: 'P',
      ProductGroup: 'DOM',
      ProductType: 'CDS',
      ActualWeight: { Unit: 'KG', Value: weightKg },
      NumberOfPieces: 1,
    },
  }

  const res = await fetch(`${ARAMEX_BASE}/Shipping/V1/CalculateRate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json() as {
    TotalAmount?: { Value: number }
    TransitDays?: number
  }

  return {
    provider: 'ARAMEX',
    service: 'CDS',
    priceSar: data.TotalAmount?.Value ?? 25,
    estimatedDays: data.TransitDays ?? 2,
  }
}

export async function createAramexShipment(
  orderId: string,
  to: ShippingAddress,
): Promise<CreatedShipment> {
  const body = {
    ClientInfo: ARAMEX_CREDS,
    Transaction: { Reference1: orderId },
    Shipments: [{
      Shipper: {
        Reference1: orderId,
        AccountNumber: ARAMEX_CREDS.AccountNumber,
        PartyAddress: { City: 'Riyadh', CountryCode: 'SA', Line1: 'Warehouse' },
        Contact: { PersonName: 'eSIM Platform', PhoneNumber1: process.env.SUPPORT_PHONE ?? '' },
      },
      Consignee: {
        Reference1: orderId,
        PartyAddress: { City: to.city, CountryCode: to.country, Line1: to.line1, Line2: to.line2 ?? '' },
        Contact: { PersonName: to.name, PhoneNumber1: to.phone, EmailAddress: to.email ?? '' },
      },
      ShippingDateTime: new Date().toISOString(),
      Details: {
        Dimensions: { Length: 10, Width: 7, Height: 1, Unit: 'CM' },
        ActualWeight: { Value: 0.05, Unit: 'KG' },
        ProductGroup: 'DOM',
        ProductType: 'CDS',
        PaymentType: 'P',
        NumberOfPieces: 1,
        DescriptionOfGoods: 'SIM Card',
      },
    }],
  }

  const res = await fetch(`${ARAMEX_BASE}/Shipping/V1/CreateShipments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json() as {
    Shipments?: Array<{ ID: string; AWBNumber: string; ShipmentLabel?: { LabelURL: string } }>
  }

  const shipment = data.Shipments?.[0]
  if (!shipment) throw new Error('Aramex shipment creation failed')

  return {
    provider: 'ARAMEX',
    trackingNumber: shipment.ID,
    awbNumber: shipment.AWBNumber,
    labelUrl: shipment.ShipmentLabel?.LabelURL,
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  }
}

// ─── OTO ─────────────────────────────────────────────────────────────────────

const OTO_BASE = 'https://api.oto.sa/v1'
const OTO_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.OTO_API_KEY ?? ''}`,
}

export async function getOtoQuote(to: ShippingAddress): Promise<ShipmentQuote[]> {
  const res = await fetch(`${OTO_BASE}/rates`, {
    method: 'POST',
    headers: OTO_HEADERS,
    body: JSON.stringify({
      origin: { city: 'Riyadh', country: 'SA' },
      destination: { city: to.city, country: to.country },
      parcel: { weight: 0.05 },
    }),
  })

  const data = await res.json() as {
    rates?: Array<{ carrier: string; service: string; price: number; transit_days: number }>
  }

  return (data.rates ?? []).map(r => ({
    provider: 'OTO' as const,
    service: `${r.carrier} — ${r.service}`,
    priceSar: r.price,
    estimatedDays: r.transit_days,
  }))
}

export async function createOtoShipment(
  orderId: string,
  to: ShippingAddress,
): Promise<CreatedShipment> {
  const res = await fetch(`${OTO_BASE}/shipments`, {
    method: 'POST',
    headers: OTO_HEADERS,
    body: JSON.stringify({
      reference: orderId,
      recipient: { name: to.name, phone: to.phone, email: to.email },
      address: { line1: to.line1, city: to.city, country: to.country },
      parcel: { weight: 0.05, description: 'SIM Card' },
      cod: 0,
    }),
  })

  const data = await res.json() as {
    tracking_number?: string
    label_url?: string
    estimated_delivery?: string
  }

  if (!data.tracking_number) throw new Error('OTO shipment creation failed')

  return {
    provider: 'OTO',
    trackingNumber: data.tracking_number,
    labelUrl: data.label_url,
    estimatedDelivery: data.estimated_delivery ? new Date(data.estimated_delivery) : undefined,
  }
}

// ─── Unified helper ───────────────────────────────────────────────────────────

export async function getBestQuote(to: ShippingAddress): Promise<ShipmentQuote> {
  const [aramex, otoQuotes] = await Promise.allSettled([
    getAramexQuote(to),
    getOtoQuote(to),
  ])

  const all: ShipmentQuote[] = []
  if (aramex.status === 'fulfilled') all.push(aramex.value)
  if (otoQuotes.status === 'fulfilled') all.push(...otoQuotes.value)

  if (all.length === 0) return { provider: 'ARAMEX', service: 'CDS', priceSar: 25, estimatedDays: 2 }

  return all.sort((a, b) => a.priceSar - b.priceSar)[0]!
}
