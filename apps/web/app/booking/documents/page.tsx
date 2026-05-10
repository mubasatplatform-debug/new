import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

export default function BookingDocumentsPage() {
  return (
    <BookingShell current="documents">
      <div className="card p-32">
        <span className="caption">الخطوة 9 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 8, color: 'var(--purple)' }}>رفع وثائق الهوية</h1>
        <p className="muted body-l">سيتولى الذكاء الاصطناعي قراءة الوثائق تلقائياً (OCR) لتوفير الوقت.</p>

        <div className="grid grid-2 gap-16 mt-16">
          <div className="card p-24" style={{ border: '2px solid var(--success)' }}>
            <div className="row between aic mb-12">
              <strong style={{ color: 'var(--purple)' }}>🪪 الهوية الوطنية</strong>
              <span className="badge green">✓ مكتمل</span>
            </div>
            <div className="surface-2 p-16 r-16" style={{ minHeight: 180, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 16, right: 16 }}>🇸🇦</div>
              <span className="caption">مستخرج تلقائياً</span>
              <div className="stack gap-4 mt-12 body-s">
                <Row k="الاسم" v="محمد عبدالله العتيبي" />
                <Row k="رقم الهوية" v="1098765432" />
                <Row k="تاريخ الميلاد" v="22/03/1992" />
                <Row k="تاريخ الانتهاء" v="14/05/2028" />
              </div>
            </div>
            <div className="row gap-8 jce mt-12">
              <button className="btn-outline btn-sm">إعادة الرفع</button>
            </div>
          </div>

          <div className="card p-24">
            <div className="row between aic mb-12">
              <strong style={{ color: 'var(--purple)' }}>🚗 رخصة القيادة</strong>
              <span className="badge orange">قيد المعالجة</span>
            </div>
            <div className="surface-2 p-16 r-16" style={{ minHeight: 180, display: 'grid', placeItems: 'center', textAlign: 'center', border: '2px dashed var(--neutral-300)' }}>
              <div>
                <div style={{ fontSize: 48 }}>📤</div>
                <strong style={{ color: 'var(--purple)' }}>اسحب الملف هنا</strong>
                <p className="muted body-s" style={{ margin: '4px 0 12px' }}>أو</p>
                <button className="btn">📷 التقط صورة</button>
              </div>
            </div>
            <p className="caption mt-12">JPG، PNG، PDF — حد أقصى 10MB</p>
          </div>
        </div>

        <div className="card p-16 mt-16" style={{ background: 'var(--orange-50)', border: '1px solid var(--orange-200)' }}>
          <strong style={{ color: 'var(--orange-600)' }}>💡 OCR ذكي</strong>
          <p className="muted body-s" style={{ margin: '4px 0 0' }}>يستخرج النظام البيانات تلقائياً من الصورة. تحقّق منها قبل التأكيد. الصور لا تُحفظ بدون موافقة صريحة.</p>
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/otp" className="btn-outline">رجوع</Link>
          <Link href="/booking/checkout" className="btn-orange btn-lg">متابعة للدفع ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="row between"><span className="muted">{k}</span><span style={{ fontWeight: 700 }}>{v}</span></div>;
}
