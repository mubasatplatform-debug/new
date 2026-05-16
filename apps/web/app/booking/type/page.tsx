import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

const types = [
  { id: 'daily', icon: '📅', title: 'تأجير يومي', sub: 'لرحلات قصيرة وأيام محدودة', from: '139 ر.س / يوم', popular: false },
  { id: 'weekly', icon: '📆', title: 'تأجير أسبوعي', sub: 'لأسبوع كامل بسعر مخفّض', from: '1,099 ر.س / أسبوع', popular: false },
  { id: 'monthly', icon: '🗓️', title: 'تأجير شهري', sub: 'الأكثر طلباً للموظفين', from: '2,999 ر.س / شهر', popular: true },
  { id: 'long-term', icon: '📋', title: 'تأجير طويل الأمد', sub: 'لـ 3 أشهر فأكثر بسعر VIP', from: '9,990 ر.س / 3 أشهر', popular: false },
  { id: 'limousine', icon: '🚖', title: 'ليموزين بسائق', sub: 'سائق محترف ورحلات تنفيذية', from: '250 ر.س / ساعة', popular: false },
  { id: 'corporate', icon: '🏢', title: 'تأجير الشركات', sub: 'عقود سنوية بأسعار خاصة', from: 'تواصل مع المبيعات', popular: false }
];

export default function BookingTypePage() {
  return (
    <BookingShell current="type">
      <div className="card p-32">
        <span className="caption">الخطوة 1 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 8, color: 'var(--purple)' }}>اختر نوع التأجير</h1>
        <p className="muted body-l">حسب احتياجك ومدة استخدامك للسيارة.</p>

        <div className="grid grid-3 gap-16 mt-24">
          {types.map((t, i) => (
            <Link key={t.id} href="/booking/location" className="card p-24 hover-lift" style={{
              border: i === 2 ? '2px solid var(--orange-400)' : '1px solid var(--neutral-200)',
              position: 'relative'
            }}>
              {t.popular && <span style={{ position: 'absolute', top: -12, insetInlineEnd: 16 }} className="badge orange">الأكثر طلباً</span>}
              <div style={{ fontSize: 38 }}>{t.icon}</div>
              <h3 className="h3" style={{ margin: '8px 0 4px', color: 'var(--purple)' }}>{t.title}</h3>
              <p className="muted body-s">{t.sub}</p>
              <div className="row aic between mt-16">
                <span className="numeric body-s" style={{ color: 'var(--orange-500)', fontWeight: 800 }}>يبدأ من {t.from}</span>
                <span style={{ color: 'var(--purple)', fontWeight: 900 }}>←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BookingShell>
  );
}
