import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

const extras = [
  { id: 'driver', icon: '👨‍✈️', name: 'سائق إضافي', desc: 'إضافة سائق ثانٍ على نفس العقد', price: 30 },
  { id: 'gps', icon: '🛰️', name: 'جهاز GPS', desc: 'تتبع مسارات الرحلات', price: 15 },
  { id: 'child-seat', icon: '👶', name: 'كرسي أطفال', desc: 'كرسي آمن للأطفال 0-4 سنة', price: 20 },
  { id: 'wifi', icon: '📶', name: 'WiFi محمول', desc: '20GB إنترنت 4G داخل السيارة', price: 25 },
  { id: 'fuel', icon: '⛽', name: 'باقة الوقود', desc: 'استلام بخزّان ممتلئ، إعادة بأي كمية', price: 80 },
  { id: 'cleaning', icon: '🧽', name: 'غسيل أسبوعي', desc: 'غسيل خارجي وداخلي للسيارة', price: 35 }
];

export default function BookingExtrasPage() {
  return (
    <BookingShell current="extras" summary={
      <div className="stack gap-12">
        <strong className="caption">الإضافات المختارة</strong>
        <Sum k="GPS" v="+15 ر.س × 30" />
        <Sum k="WiFi" v="+25 ر.س × 30" />
        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
        <Sum k="الإجمالي السابق" v="4,469 ر.س" />
        <Sum k="إضافات" v="+1,200 ر.س" />
        <div className="row between">
          <strong>الإجمالي الجديد</strong>
          <strong className="numeric" style={{ color: 'var(--orange-500)' }}>5,669 ر.س</strong>
        </div>
      </div>
    }>
      <div className="card p-32">
        <span className="caption">الخطوة 6 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 8, color: 'var(--purple)' }}>الخدمات الإضافية</h1>
        <p className="muted body-l">اجعل تجربتك أكثر راحة (اختياري).</p>

        <div className="grid grid-2 gap-16 mt-16">
          {extras.map((e, i) => (
            <label key={e.id} className="card p-20 row gap-12 aic" style={{ cursor: 'pointer', border: i < 2 ? '2px solid var(--purple-200)' : '1px solid var(--neutral-200)' }}>
              <span className={`checkbox ${i < 2 ? 'checked' : ''}`}>{i < 2 ? '✓' : ''}</span>
              <div style={{ fontSize: 32 }}>{e.icon}</div>
              <div style={{ flex: 1 }}>
                <strong style={{ color: 'var(--purple)' }}>{e.name}</strong>
                <p className="muted body-s" style={{ margin: '2px 0 0' }}>{e.desc}</p>
              </div>
              <div style={{ textAlign: 'end' }}>
                <strong className="numeric" style={{ color: 'var(--orange-500)' }}>+{e.price} ر.س</strong>
                <small className="muted body-s">/ يوم</small>
              </div>
            </label>
          ))}
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/insurance" className="btn-outline">رجوع</Link>
          <Link href="/booking/customer" className="btn-orange btn-lg">التالي ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}

function Sum({ k, v }: { k: string; v: string }) {
  return <div className="row between"><span className="muted body-s">{k}</span><span className="body-s">{v}</span></div>;
}
