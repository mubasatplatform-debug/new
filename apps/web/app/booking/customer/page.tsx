import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

export default function BookingCustomerPage() {
  return (
    <BookingShell current="customer">
      <div className="card p-32">
        <span className="caption">الخطوة 7 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 8, color: 'var(--purple)' }}>بياناتك الشخصية</h1>
        <p className="muted body-l">معلومات للتواصل وإصدار العقد.</p>

        <div className="grid grid-2 gap-16 mt-16">
          <div><label className="label">الاسم الأول</label><div className="input-group"><input placeholder="مثلاً: محمد" /></div></div>
          <div><label className="label">الاسم الأخير</label><div className="input-group"><input placeholder="مثلاً: العتيبي" /></div></div>
          <div><label className="label">رقم الهوية / الإقامة</label><div className="input-group"><input placeholder="10 أرقام" /></div></div>
          <div><label className="label">تاريخ الميلاد</label><div className="input-group"><input placeholder="dd/mm/yyyy" /></div></div>
          <div><label className="label">رقم الجوال</label><div className="input-group"><input placeholder="5x xxx xxxx" /><span className="suffix">+966</span></div><p className="help">سيُستخدم لرمز التحقق OTP وإرسال التأكيدات.</p></div>
          <div><label className="label">البريد الإلكتروني</label><div className="input-group"><input placeholder="you@example.com" /></div></div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label className="label">العنوان (اختياري — لتوصيل السيارة)</label>
            <div className="input-group"><input placeholder="الحي، الشارع، رقم المبنى" /></div>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)', margin: '24px 0' }} />

        <h3 className="h3" style={{ color: 'var(--purple)' }}>طريقة التحقّق</h3>
        <div className="grid grid-2 gap-12">
          <label className="card p-20 row aic gap-12" style={{ cursor: 'pointer', border: '2px solid var(--purple-500)' }}>
            <span className="radio-i checked" />
            <div style={{ flex: 1 }}>
              <strong style={{ color: 'var(--purple)' }}>📱 رمز OTP</strong>
              <p className="muted body-s" style={{ margin: '2px 0 0' }}>عبر الجوال أو الواتساب</p>
            </div>
            <span className="badge green">سريع</span>
          </label>
          <label className="card p-20 row aic gap-12" style={{ cursor: 'pointer' }}>
            <span className="radio-i" />
            <div style={{ flex: 1 }}>
              <strong style={{ color: 'var(--purple)' }}>🪪 Nafath</strong>
              <p className="muted body-s" style={{ margin: '2px 0 0' }}>تطبيق نفاذ الحكومي</p>
            </div>
            <span className="badge purple">رسمي</span>
          </label>
        </div>

        <div className="row gap-8 aic mt-16">
          <span className="checkbox checked">✓</span>
          <span className="body-s">أوافق على <Link href="/terms" style={{ color: 'var(--purple)', fontWeight: 800 }}>الشروط والأحكام</Link> و<Link href="/privacy" style={{ color: 'var(--purple)', fontWeight: 800 }}>سياسة الخصوصية</Link></span>
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/extras" className="btn-outline">رجوع</Link>
          <Link href="/booking/otp" className="btn-orange btn-lg">أرسل رمز التحقّق ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}
