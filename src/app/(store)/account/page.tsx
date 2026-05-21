import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { headers } from 'next/headers'
import { getBalance } from '@/lib/wallet'
import { formatPrice, formatDate } from '@/lib/utils'
import { getSecret } from '@/lib/vault'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'حسابي' }

export default async function AccountPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) redirect('/auth/sign-in?redirect=/account')

  const [orders, balance] = await Promise.all([
    db.order.findMany({
      where: { userId: session.user.id, status: 'COMPLETED' },
      include: {
        items: { include: { package: { include: { country: true } } } },
        esimProfile: true,
        shipment: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    }),
    getBalance(session.user.id),
  ])

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">مرحباً، {session.user.name}</h1>
          <p className="text-muted-foreground text-sm">{session.user.email}</p>
        </div>
        {/* Wallet balance */}
        <div className="border rounded-xl p-4 text-center bg-primary/5">
          <p className="text-xs text-muted-foreground mb-1">رصيد المحفظة</p>
          <p className="text-2xl font-bold text-primary">{formatPrice(balance)}</p>
        </div>
      </div>

      {/* Orders */}
      <h2 className="text-lg font-semibold mb-4">شرائحي المشتراة</h2>

      {orders.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-4xl mb-3">📭</p>
          <p>لا توجد مشتريات بعد</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const pkg = order.items[0]?.package
            return (
              <div key={order.id} className="border rounded-xl p-5 bg-card">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{pkg?.nameAr ?? 'باقة'}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {pkg?.country?.nameAr} — {Number(pkg?.dataGb ?? 0)} GB / {pkg?.validityDays} يوم
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                  <div className="text-left shrink-0">
                    <p className="font-bold text-primary">{formatPrice(Number(order.totalSar))}</p>
                    {order.esimProfile ? (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        eSIM نشطة
                      </span>
                    ) : order.shipment ? (
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                        {order.shipment.status === 'DELIVERED' ? 'تم التسليم' : 'قيد الشحن'}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* eSIM activation info */}
                {order.esimProfile && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-2">
                      لتفعيل الشريحة، اذهب إلى الإعدادات &gt; شبكة الجوال &gt; إضافة eSIM
                    </p>
                    <a
                      href={`/account/esims/${order.esimProfile.id}`}
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      عرض رمز QR وتفاصيل التفعيل ←
                    </a>
                  </div>
                )}

                {/* Shipment tracking */}
                {order.shipment?.trackingNumber && (
                  <div className="mt-4 pt-4 border-t text-sm">
                    <span className="text-muted-foreground">رقم التتبع: </span>
                    <span className="font-mono font-medium">{order.shipment.trackingNumber}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
