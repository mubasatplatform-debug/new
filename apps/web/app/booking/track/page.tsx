import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

export default function BookingTrackPage() {
  return (
    <BookingShell current="confirmation">
      <div className="card p-32">
        <span className="caption">حجز #DP-2024-78452</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 12, color: 'var(--purple)' }}>تتبع حجزك</h1>

        <div className="card p-24" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
          <div className="row gap-8 wrap aic between">
            <div>
              <span className="caption">الحالة الحالية</span>
              <h3 className="h3" style={{ margin: '4px 0 0', color: 'var(--purple)' }}>المندوب في الطريق إليك</h3>
              <p className="muted body-s" style={{ margin: '4px 0 0' }}>الوصول المتوقّع: 9:35 ص (بعد 18 دقيقة)</p>
            </div>
            <Link href="/customer/live-tracking" className="btn-orange">📍 شاهد على الخريطة</Link>
          </div>
        </div>

        <div className="card p-24 mt-16">
          <strong className="caption">رحلة الحجز</strong>
          <div className="stack gap-16 mt-12">
            {[
              ['done', '14 مايو 9:00 ص', 'تأكيد الحجز', 'تم استلام الدفع وإصدار العقد'],
              ['done', '14 مايو 8:30 ص', 'إعداد السيارة', 'تم فحص وتجهيز السيارة في الفرع'],
              ['current', 'الآن', 'المندوب في الطريق', 'محمد القحطاني — 4.9 ⭐ (1,245 رحلة)'],
              ['', '+18 دقيقة', 'وصول السيارة', 'سيتصل بك المندوب عند الوصول'],
              ['', 'بعد التسليم', 'بدء العقد', 'العداد يبدأ من لحظة استلامك للمفاتيح']
            ].map(([state, time, title, sub]) => (
              <div key={title} className="row gap-12 ais">
                <div style={{
                  width: 40, height: 40, borderRadius: 999,
                  background: state === 'done' ? 'var(--success)' : state === 'current' ? 'var(--orange-400)' : 'var(--neutral-200)',
                  color: state ? 'white' : 'var(--muted)',
                  display: 'grid', placeItems: 'center', fontWeight: 900, flexShrink: 0
                }}>{state === 'done' ? '✓' : state === 'current' ? '●' : '○'}</div>
                <div style={{ flex: 1 }}>
                  <span className="caption">{time}</span>
                  <strong style={{ display: 'block', color: state ? 'var(--purple)' : 'var(--muted)' }}>{title}</strong>
                  <p className="muted body-s" style={{ margin: 0 }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row gap-8 between mt-16">
          <Link href="/customer/support" className="btn-outline">💬 شات مع المندوب</Link>
          <button className="btn-orange">📞 اتصال</button>
        </div>
      </div>
    </BookingShell>
  );
}
