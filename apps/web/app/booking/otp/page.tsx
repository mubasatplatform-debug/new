import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

export default function BookingOTPPage() {
  return (
    <BookingShell current="otp">
      <div className="card p-32" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <span className="caption">الخطوة 8 من 11</span>
        <div style={{ fontSize: 64, marginBottom: 8 }}>🔐</div>
        <h1 className="h1" style={{ margin: '0 0 8px', color: 'var(--purple)' }}>أَدخِل رمز التحقّق</h1>
        <p className="muted body-l">أرسلنا رمزاً مكوّناً من 6 أرقام إلى</p>
        <strong style={{ color: 'var(--purple)', fontSize: 18 }} className="numeric">+966 5x xxx 0289</strong>

        <div className="otp" style={{ margin: '32px 0' }}>
          <span className="box filled">9</span>
          <span className="box filled">6</span>
          <span className="box filled">2</span>
          <span className="box active">_</span>
          <span className="box">_</span>
          <span className="box">_</span>
        </div>

        <p className="muted body-s">لم يصلك الرمز؟ <button style={{ color: 'var(--purple)', fontWeight: 800, background: 'none', border: 0, cursor: 'pointer' }} disabled>أعد الإرسال خلال 0:42</button></p>

        <div className="card p-16 mt-24" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)', textAlign: 'right' }}>
          <strong style={{ color: 'var(--purple)' }}>💬 جرّب التحقق عبر واتساب</strong>
          <p className="muted body-s" style={{ margin: '4px 0 0' }}>أسرع ولا يحتاج تطبيق إضافي. سنرسل الرمز لرقم واتساب المسجَّل.</p>
        </div>

        <div className="row gap-8 between mt-24">
          <Link href="/booking/customer" className="btn-outline">رجوع</Link>
          <Link href="/booking/documents" className="btn-orange btn-lg">تحقّق وأكمل ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}
