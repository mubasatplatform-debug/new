import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

const plans = [
  { name: 'يومي', price: 139, unit: 'يوم', features: ['كيلومترات حتى 250 كم/يوم', 'تأمين أساسي', 'مساعدة على الطريق 24/7', 'استلام من الفروع'], cta: 'اختر اليومي', tag: 'للرحلات السريعة' },
  { name: 'أسبوعي', price: 1099, unit: 'أسبوع', features: ['1,500 كم/أسبوع', 'تأمين شامل', 'مساعدة على الطريق', 'تبديل سيارة مجاني مرة'], cta: 'اختر الأسبوعي', tag: 'مرونة لأيام عمل' },
  { name: 'شهري', price: 2999, unit: 'شهر', popular: true, features: ['كيلومترات غير محدودة', 'تأمين شامل', 'صيانة دورية', 'تبديل سيارة مرتين', 'استبدال إطار مجاني'], cta: 'الأكثر طلباً', tag: 'الأنسب للموظفين' },
  { name: 'طويل الأمد', price: 9990, unit: '3 أشهر', features: ['غير محدود', 'تأمين شامل + سائق إضافي', 'صيانة كاملة', 'استبدال أي وقت', 'دعم VIP'], cta: 'تواصل معنا', tag: 'للشركات والـ VIP' }
];

const faqs = [
  ['كيف أحجز سيارة؟', 'اختر باقة، اختر السيارة، أكمل بياناتك، وادفع. سيصلك التأكيد على واتساب.'],
  ['هل يمكنني تمديد الباقة؟', 'نعم، عبر لوحة العميل في أي وقت قبل انتهاء العقد بـ 24 ساعة على الأقل.'],
  ['ماذا يشمل التأمين؟', 'الأساسي يشمل أضرار الطرف الثالث. الشامل يشمل التصادم، السرقة، الزجاج، والإصابات الشخصية.'],
  ['طرق الدفع المتاحة؟', 'مدى، Apple Pay، STC Pay، تحويل بنكي للشركات. الكروت الائتمانية تُحمَّل ضريبة معالجة 1.5%.']
];

export default function PricingPage() {
  return (
    <PublicShell url="dheelplus.sa/pricing">
      <PageHeader eyebrow="باقات وأسعار" title="باقات تأجير شفّافة، بدون مفاجآت" sub="اختر ما يناسب احتياجك. كل الأسعار شاملة ضريبة القيمة المضافة 15%." />
      <div className="container">
        <section className="section">
          <div className="grid grid-4 gap-16">
            {plans.map(p => (
              <div key={p.name} className={`card p-24 hover-lift ${p.popular ? '' : ''}`} style={{
                borderColor: p.popular ? 'var(--orange-400)' : undefined,
                position: 'relative',
                ...(p.popular ? { boxShadow: 'var(--shadow-lg)', borderWidth: 2 } : {})
              }}>
                {p.popular && <span style={{ position: 'absolute', top: -12, insetInlineEnd: 16 }} className="badge orange">الأكثر طلباً 🔥</span>}
                <span className="caption">{p.tag}</span>
                <h3 className="h3" style={{ margin: '4px 0 12px', color: 'var(--purple)' }}>{p.name}</h3>
                <div className="row aie gap-4">
                  <span className="numeric" style={{ fontSize: 38, fontWeight: 900, color: 'var(--purple)' }}>{p.price.toLocaleString()}</span>
                  <span className="muted body-s">ر.س / {p.unit}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                  {p.features.map(f => <li key={f} className="row gap-8 aic mb-8"><span style={{ color: 'var(--success)', fontWeight: 900 }}>✓</span><span className="body-s">{f}</span></li>)}
                </ul>
                <button className={p.popular ? 'btn-orange btn-block' : 'btn-outline btn-block'} style={{ marginTop: 'auto' }}>{p.cta}</button>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="card p-32" style={{ background: 'linear-gradient(135deg, var(--purple-800), var(--purple-500))', color: 'white' }}>
            <div className="row aic between wrap gap-16">
              <div>
                <h2 className="h2" style={{ marginTop: 0 }}>تأجير الشركات والباقات الخاصة</h2>
                <p className="body-m" style={{ opacity: .85, margin: 0 }}>عقود سنوية، أسعار خاصة، فواتير شهريّة موحّدة، وإدارة أسطول للموظفين.</p>
              </div>
              <Link href="/corporate" className="btn-orange btn-lg">تحدّث مع المبيعات ←</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>أسئلة شائعة عن الأسعار</h2>
          <div className="grid grid-2 gap-16">
            {faqs.map(([q, a]) => (
              <div key={q} className="card p-20">
                <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>{q}</h4>
                <p className="muted body-m" style={{ margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
