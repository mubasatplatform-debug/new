import { PublicShell, PageHeader } from '@/components/PublicShell';

const groups: Array<{ title: string; items: Array<[string, string]> }> = [
  {
    title: 'الحجز',
    items: [
      ['كيف أحجز سيارة؟', 'اختر الباقة من /pricing، اختر السيارة، أكمل بياناتك واطفع. سيصلك تأكيد على واتساب خلال دقيقتين.'],
      ['هل يمكنني التعديل بعد الحجز؟', 'نعم، عبر لوحة العميل — قبل 6 ساعات من موعد الاستلام لا توجد رسوم تعديل.'],
      ['ما الذي أحتاجه للحجز؟', 'هوية وطنية / إقامة سارية، رخصة قيادة سعودية سارية، وعمر لا يقل عن 21 سنة.']
    ]
  },
  {
    title: 'الدفع والتأمين',
    items: [
      ['ما طرق الدفع المتاحة؟', 'مدى، Apple Pay، STC Pay، فيزا/ماستر، تحويل بنكي للشركات.'],
      ['هل هناك مبلغ تأمين؟', 'نعم، يُحتجز إيداع 1,000–3,000 ر.س حسب فئة السيارة، ويُعاد كاملاً عند التسليم بدون أضرار.'],
      ['ماذا يشمل التأمين الشامل؟', 'تصادم، سرقة، حريق، زجاج، إصابات الركاب الشخصية. لا يشمل القيادة تحت تأثير المسكرات أو خارج المملكة بدون تصريح.']
    ]
  },
  {
    title: 'التسليم والاستلام',
    items: [
      ['أين أستلم السيارة؟', 'من أي فرع، أو نوصلها لك (رسوم 50 ر.س داخل الرياض، تختلف حسب المسافة).'],
      ['كم تأخذ عملية التسليم؟', '15 دقيقة في الفرع. 30 دقيقة عند التوصيل (تشمل الفحص الشكلي والتوقيع).'],
      ['هل يمكنني إرجاع السيارة في فرع آخر؟', 'نعم، رسوم النقل بين المدن تبدأ من 250 ر.س. مجاناً للأعضاء PLATINUM/VIP.']
    ]
  },
  {
    title: 'الولاء والعروض',
    items: [
      ['كيف أكسب نقاط ولاء؟', 'كل ريال = نقطة. الأعضاء الـ PLATINUM يحصلون على ضعف النقاط.'],
      ['كيف أصرف النقاط؟', 'تخصم من الفاتورة عند الحجز التالي، أو تستبدلها بأيام مجانية أو ترقية فئة السيارة.'],
      ['هل تنتهي صلاحية النقاط؟', 'نعم، بعد 18 شهر من تاريخ الاكتساب.']
    ]
  }
];

export default function FAQPage() {
  return (
    <PublicShell url="dheelplus.sa/faq">
      <PageHeader eyebrow="الأسئلة الشائعة" title="إجابات سريعة لأكثر الأسئلة شيوعاً" sub="لم تجد إجابتك؟ تواصل معنا 24/7 على 920028090." />
      <div className="container">
        <section className="section">
          <div className="grid grid-2 gap-24">
            {groups.map(g => (
              <div key={g.title} className="card p-24">
                <h2 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>{g.title}</h2>
                <div className="stack gap-16 mt-16">
                  {g.items.map(([q, a]) => (
                    <details key={q} style={{ borderBottom: '1px solid var(--neutral-200)', paddingBottom: 12 }}>
                      <summary style={{ cursor: 'pointer', fontWeight: 800, color: 'var(--purple)', listStyle: 'none' }}>
                        ‹ {q}
                      </summary>
                      <p className="muted body-m" style={{ margin: '8px 0 0' }}>{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
