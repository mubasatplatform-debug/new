import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

export default function LimousinePage() {
  return (
    <PublicShell url="dheelplus.sa/limousine">
      <PageHeader eyebrow="ليموزين وسائق" title="ليموزين بسائق محترف" sub="نقل تنفيذي للضيوف، رحلات المطار، الفعاليات والمناسبات." />
      <div className="container">
        <section className="section">
          <div className="grid grid-3 gap-16">
            {[
              { name: 'مرسيدس S-Class', cat: 'تنفيذي', hourly: 250, daily: 1900, image: '🚖' },
              { name: 'لكزس LX 600', cat: 'فاخر', hourly: 220, daily: 1700, image: '🚗' },
              { name: 'كاديلاك Escalade', cat: 'مجموعة كبيرة', hourly: 300, daily: 2400, image: '🚙' }
            ].map(c => (
              <article key={c.name} className="card car-card hover-lift">
                <div className="car-thumb">{c.image}</div>
                <span className="badge purple">{c.cat}</span>
                <h3 style={{ margin: '4px 0 0', color: 'var(--purple)' }}>{c.name}</h3>
                <p className="muted">سائق محترف بزي رسمي • مياه + شاحن • تأمين شامل</p>
                <div className="row between aie">
                  <div><small className="muted">يومياً</small><div className="price">{c.daily.toLocaleString()} ر.س</div></div>
                  <Link className="btn-orange" href="/booking/type">احجز ليموزين</Link>
                </div>
                <small className="muted">أو {c.hourly} ر.س / ساعة (حد أدنى 3 ساعات)</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="grid grid-4 gap-16">
            {[
              ['🛬', 'استقبال المطار', 'لافتة باسمك + متابعة الرحلة'],
              ['👔', 'سائق بزي رسمي', 'مدرَّب على البروتوكول التنفيذي'],
              ['💧', 'ضيافة كاملة', 'مياه، شاحن، WiFi داخل السيارة'],
              ['📍', 'تتبع مباشر', 'موقع السائق على التطبيق']
            ].map(([icon, title, sub]) => (
              <div key={title} className="card stat">
                <b style={{ fontSize: 36 }}>{icon}</b>
                <h4 className="h4" style={{ color: 'var(--purple)' }}>{title}</h4>
                <p className="muted body-s" style={{ margin: 0 }}>{sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="card p-32" style={{ background: 'linear-gradient(135deg, var(--purple-800), var(--purple-500))', color: 'white' }}>
            <h2 className="h2" style={{ marginTop: 0 }}>ليموزين الفعاليات والمناسبات</h2>
            <p className="body-l" style={{ opacity: .85 }}>للأعراس، المؤتمرات، استقبال الوفود الرسمية، رحلات الترفيه. نوفّر أسطولاً كاملاً مع تنسيق لوجستي.</p>
            <button className="btn-orange btn-lg">اطلب عرض سعر مخصّص ←</button>
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
