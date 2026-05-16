import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

const offers = [
  { code: 'DHEEL15', title: 'خصم 15% على التأجير طويل الأمد', sub: 'لكل عقد 3 أشهر فأكثر — صالح حتى نهاية الشهر', tone: 'orange', big: '15%' },
  { code: 'WEEKEND', title: 'عطلة نهاية الأسبوع', sub: 'احجز خميس + جمعة + سبت بسعر يومين فقط', tone: 'purple', big: '3=2' },
  { code: 'CORP30', title: 'الشركات: شهر مجاني', sub: 'مع كل عقد 12 شهر للشركات الجديدة', tone: 'green', big: '+1' },
  { code: 'STUDENT', title: 'خصم الطلاب 10%', sub: 'بإثبات ساري المفعول — للطلاب الجامعيين', tone: 'orange', big: '10%' },
  { code: 'FIRST', title: 'الحجز الأول مجاني', sub: 'يوم تأجير مجاني للمستخدمين الجدد', tone: 'purple', big: '1 يوم' },
  { code: 'LOYAL50', title: 'كأس ولاء PLATINUM', sub: '50 نقطة إضافية لكل ريال للأعضاء البلاتينيين', tone: 'green', big: '×50' }
];

export default function OffersPage() {
  return (
    <PublicShell url="dheelplus.sa/offers">
      <PageHeader eyebrow="عروض وكوبونات" title="وفّر أكثر مع كوبونات ديل Plus" sub="عروض موسمية، كوبونات الولاء، وخصومات الشركات." />
      <div className="container">
        <section className="section">
          <div className="grid grid-3 gap-16">
            {offers.map(o => (
              <article key={o.code} className="card hover-lift" style={{ overflow: 'hidden' }}>
                <div style={{
                  padding: 28,
                  background: o.tone === 'purple' ? 'linear-gradient(135deg, var(--purple-700), var(--purple-500))'
                    : o.tone === 'orange' ? 'linear-gradient(135deg, var(--orange-400), var(--orange-500))'
                    : 'linear-gradient(135deg, #18A957, #0d7c3e)',
                  color: 'white'
                }}>
                  <span className="caption" style={{ color: 'rgba(255,255,255,.85)' }}>كود الكوبون</span>
                  <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '.5px', marginTop: 4 }}>{o.code}</div>
                  <div className="numeric" style={{ fontSize: 56, fontWeight: 900, marginTop: 12 }}>{o.big}</div>
                </div>
                <div className="p-20">
                  <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>{o.title}</h3>
                  <p className="muted body-s" style={{ margin: '6px 0 16px' }}>{o.sub}</p>
                  <div className="row gap-8 between aic">
                    <button className="btn-outline btn-sm">انسخ الكود</button>
                    <Link href="/booking/type" className="btn-orange btn-sm">استخدم الكوبون ←</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="card p-24" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
            <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>كيف تستخدم الكوبون؟</h3>
            <ol className="muted body-m" style={{ lineHeight: 2 }}>
              <li>اختر الباقة المناسبة من <Link href="/pricing">صفحة الأسعار</Link>.</li>
              <li>أكمل بيانات الحجز.</li>
              <li>أَدخِل كود الكوبون في صفحة الدفع قبل التأكيد.</li>
              <li>سيخصم النظام الخصم تلقائياً ويظهر الإجمالي الجديد.</li>
            </ol>
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
