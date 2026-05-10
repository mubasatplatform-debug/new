import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

export default function HelpPage() {
  return (
    <PublicShell url="dheelplus.sa/help">
      <PageHeader eyebrow="مركز المساعدة" title="كيف نقدر نساعدك؟" sub="أسئلة، شروحات، وأدوات لكل مرحلة من رحلتك." />
      <div className="container">
        <section className="section">
          <div className="card p-32" style={{ background: 'linear-gradient(135deg, var(--purple-700), var(--purple-500))', color: 'white' }}>
            <h2 className="h2" style={{ marginTop: 0 }}>ابحث عن إجابة</h2>
            <div className="input-group" style={{ background: 'white', maxWidth: 640 }}>
              <input placeholder="مثلاً: تمديد عقد، فاتورة ZATCA، تعديل بيانات..." />
              <button className="btn-orange">ابحث</button>
            </div>
          </div>
        </section>
        <section className="section grid grid-3 gap-16">
          {[
            { icon: '📅', title: 'الحجز والتعديل', count: 12, href: '/faq' },
            { icon: '💳', title: 'الدفع والفواتير', count: 18, href: '/faq' },
            { icon: '🛡️', title: 'التأمين والمسؤولية', count: 9, href: '/faq' },
            { icon: '🚗', title: 'تسليم واستلام السيارة', count: 14, href: '/faq' },
            { icon: '⚠️', title: 'المخالفات والحوادث', count: 11, href: '/faq' },
            { icon: '⭐', title: 'الولاء والإحالات', count: 8, href: '/faq' }
          ].map(c => (
            <Link key={c.title} href={c.href} className="card p-24 hover-lift" style={{ display: 'block' }}>
              <div style={{ fontSize: 40 }}>{c.icon}</div>
              <h3 className="h3" style={{ margin: '8px 0 4px', color: 'var(--purple)' }}>{c.title}</h3>
              <span className="caption">{c.count} مقالة</span>
            </Link>
          ))}
        </section>
        <section className="section">
          <div className="card p-24 row aic between wrap gap-16">
            <div>
              <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>لم تجد ما تبحث عنه؟</h3>
              <p className="muted body-m" style={{ margin: 0 }}>تحدث مباشرة مع وكيل خدمة عملاء، متاح 24/7.</p>
            </div>
            <div className="row gap-8">
              <Link href="/contact" className="btn-outline">📞 اتصل بنا</Link>
              <Link href="/customer/support" className="btn-orange">💬 شات مباشر</Link>
            </div>
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
