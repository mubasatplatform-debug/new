import { PublicShell, PageHeader } from '@/components/PublicShell';

export default function AboutPage() {
  return (
    <PublicShell url="dheelplus.sa/about">
      <PageHeader eyebrow="عن ديل Plus" title="منصّة سعودية لتشغيل الأسطول الذكي" sub="نحن لسنا فقط شركة تأجير — نحن نظام تشغيل كامل يربط العميل بالأسطول والإدارة بكل وضوح." />
      <div className="container">
        <section className="section grid grid-3 gap-16">
          {[
            ['📅', '2018', 'عام التأسيس'],
            ['🚗', '+12,000', 'سيارة في الأسطول'],
            ['🏢', '37', 'فرع في 12 مدينة'],
            ['👥', '+450,000', 'عميل سعيد'],
            ['🤝', '+850', 'شركة شريكة'],
            ['⭐', '4.8 / 5', 'تقييم العملاء']
          ].map(([icon, val, label]) => (
            <div key={label as string} className="card stat">
              <b style={{ fontSize: 32 }}>{icon}</b>
              <h3 style={{ color: 'var(--purple)' }}>{val}</h3>
              <p className="muted">{label}</p>
            </div>
          ))}
        </section>

        <section className="section grid grid-2 gap-24">
          <div className="card p-32">
            <h2 className="h2" style={{ marginTop: 0, color: 'var(--purple)' }}>رؤيتنا</h2>
            <p className="body-l muted">أن نكون الخيار الأول للعميل والشركة في تأجير السيارات بالمملكة، عبر تجربة رقمية سلسة، أسعار شفّافة، وأسطول حديث يلبّي كل احتياجات النقل.</p>
          </div>
          <div className="card p-32" style={{ background: 'linear-gradient(135deg, var(--orange-400), var(--orange-500))', color: 'white' }}>
            <h2 className="h2" style={{ marginTop: 0 }}>قيمنا</h2>
            <ul className="body-l" style={{ paddingInlineStart: 18 }}>
              <li>الشفافية — لا رسوم مخفية</li>
              <li>الموثوقية — سيارة جاهزة في أي وقت</li>
              <li>الذكاء — تكنولوجيا تخدم العميل</li>
              <li>الالتزام — رؤية 2030 تَطوُّر مستمر</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>فريق القيادة</h2>
          <div className="grid grid-4 gap-16">
            {[
              ['خ', 'خالد العنزي', 'الرئيس التنفيذي'],
              ['س', 'سعود الحربي', 'مدير العمليات'],
              ['ن', 'نوف العتيبي', 'مديرة التقنية'],
              ['ع', 'عبدالله القحطاني', 'مدير الأسطول']
            ].map(([letter, name, role]) => (
              <div key={name as string} className="card p-20" style={{ textAlign: 'center' }}>
                <div className="avatar lg" style={{ margin: '0 auto 12px' }}>{letter}</div>
                <strong style={{ color: 'var(--purple)' }}>{name}</strong>
                <p className="muted body-s" style={{ margin: '4px 0 0' }}>{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
