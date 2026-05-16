import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

export default function BookingConfirmationPage() {
  return (
    <BookingShell current="confirmation">
      <div className="card p-32" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--success)', color: 'white', fontSize: 48, display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>✓</div>
        <span className="status-pill" style={{ background: '#EAF8F0', color: 'var(--success)' }}>تم تأكيد الحجز بنجاح</span>
        <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>شكراً، محمد!</h1>
        <p className="body-l muted">حجزك جاهز. ستصلك التفاصيل على واتساب وعبر البريد الإلكتروني.</p>

        <div className="card p-24 mt-24" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)', textAlign: 'right' }}>
          <div className="row between aic">
            <div>
              <span className="caption">رقم الحجز</span>
              <h2 className="h2 numeric" style={{ margin: '4px 0 0', color: 'var(--purple)' }}>#DP-2024-78452</h2>
            </div>
            <div className="qr-block" />
          </div>
          <hr style={{ border: 0, borderTop: '1px solid var(--purple-200)', margin: '16px 0' }} />
          <div className="grid grid-2 gap-12">
            <Row k="السيارة" v="تويوتا كامري 2024" />
            <Row k="الفئة" v="سيدان" />
            <Row k="الاستلام" v="14 مايو 2024 - 9:00 ص" />
            <Row k="الإرجاع" v="14 يونيو 2024 - 9:00 ص" />
            <Row k="الفرع" v="الرياض - العليا" />
            <Row k="التأمين" v="متوسط" />
            <Row k="الإضافات" v="GPS + WiFi" />
            <Row k="الإجمالي" v="5,669 ر.س" highlight />
          </div>
        </div>

        <div className="grid grid-3 gap-12 mt-24">
          <Link href="/customer/bookings/current" className="btn">عرض الحجز</Link>
          <button className="btn-outline">📥 تحميل العقد PDF</button>
          <button className="btn-outline">💬 واتساب</button>
        </div>

        <div className="card p-16 mt-24" style={{ background: 'var(--orange-50)', border: '1px solid var(--orange-200)', textAlign: 'right' }}>
          <strong style={{ color: 'var(--orange-600)' }}>📍 ماذا بعد؟</strong>
          <ol className="muted body-m" style={{ lineHeight: 2, margin: '8px 0 0' }}>
            <li>سيصلك تذكير قبل 24 ساعة من موعد الاستلام.</li>
            <li>توجّه للفرع في الموعد، وستجد سيارتك جاهزة.</li>
            <li>وقع على عقد التسليم بعد الفحص الشكلي.</li>
          </ol>
        </div>

        <p className="muted body-s mt-24">ربحت <strong style={{ color: 'var(--orange-500)' }}>567 نقطة ولاء</strong> من هذا الحجز ⭐</p>
      </div>
    </BookingShell>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="row between">
      <span className="muted body-s">{k}</span>
      <span className="body-s" style={{ fontWeight: highlight ? 900 : 700, color: highlight ? 'var(--orange-500)' : undefined, fontSize: highlight ? 16 : undefined }}>{v}</span>
    </div>
  );
}
