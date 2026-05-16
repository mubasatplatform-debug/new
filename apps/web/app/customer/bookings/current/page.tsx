import Link from 'next/link';
import { CustomerShell } from '@/components/CustomerShell';

export default function CurrentBookingPage() {
  return (
    <CustomerShell title="الحجز الحالي" active="/customer/bookings/current">
      <div className="card p-32 mb-16" style={{ background: 'linear-gradient(135deg, var(--purple-700), var(--purple-500))', color: 'white' }}>
        <div className="row between aic wrap gap-16">
          <div>
            <span className="caption" style={{ color: 'rgba(255,255,255,.85)' }}>حجز نشط منذ 14 مايو</span>
            <h2 className="h2" style={{ marginTop: 4 }}>تويوتا كامري 2024</h2>
            <p style={{ opacity: .9, margin: 0 }}>أ ب ج 1234 • الرياض - العليا</p>
          </div>
          <div className="row gap-8">
            <Link href="/customer/contracts/extend" className="btn-orange">تمديد العقد</Link>
            <button className="btn-ghost">📥 العقد PDF</button>
          </div>
        </div>
        <div className="grid grid-4 gap-16 mt-24">
          <Stat val="22" label="يوم متبقّي" />
          <Stat val="1,850 كم" label="تم قطعها" />
          <Stat val="4,469 ر.س" label="مدفوع" />
          <Stat val="1,500 ر.س" label="إيداع محجوز" />
        </div>
      </div>

      <div className="grid grid-3 gap-16 mb-16">
        <div className="card p-20">
          <span className="caption">حالة العقد</span>
          <div className="row aic gap-8 mt-8"><span className="badge green dot">●</span><strong style={{ color: 'var(--purple)' }}>نشط — 22 يوم متبقي</strong></div>
          <div style={{ height: 8, background: 'var(--neutral-200)', borderRadius: 999, overflow: 'hidden', marginTop: 12 }}>
            <span style={{ display: 'block', height: '100%', width: '27%', background: 'linear-gradient(90deg, var(--orange-400), var(--orange-500))', borderRadius: 999 }} />
          </div>
        </div>
        <div className="card p-20">
          <span className="caption">آخر تحديث</span>
          <strong style={{ display: 'block', color: 'var(--purple)', marginTop: 8 }}>الاستلام تم بنجاح</strong>
          <p className="muted body-s" style={{ margin: '4px 0 0' }}>14 مايو 9:42 ص — موقع الفرع</p>
        </div>
        <div className="card p-20">
          <span className="caption">الموعد القادم</span>
          <strong style={{ display: 'block', color: 'var(--purple)', marginTop: 8 }}>إرجاع السيارة</strong>
          <p className="muted body-s" style={{ margin: '4px 0 0' }}>14 يونيو 9:00 ص</p>
        </div>
      </div>

      <div className="grid grid-2 gap-16">
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>تفاصيل العقد</h3>
          <div className="stack gap-8 mt-12">
            <Row k="رقم العقد" v="CN-2024-000512" />
            <Row k="نوع التأجير" v="شهري" />
            <Row k="السيارة" v="تويوتا كامري 2024 — لؤلؤي" />
            <Row k="اللوحة" v="أ ب ج 1234" />
            <Row k="فرع الاستلام" v="الرياض - العليا" />
            <Row k="فرع الإرجاع" v="الرياض - العليا" />
            <Row k="السائق المعتمد" v="محمد العتيبي (أنت)" />
            <Row k="التأمين" v="متوسط" />
            <Row k="الإضافات" v="GPS، WiFi" />
          </div>
        </div>

        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>إجراءات سريعة</h3>
          <div className="stack gap-8 mt-12">
            <button className="btn-outline btn-block">📍 موقع السيارة الحالي</button>
            <button className="btn-outline btn-block">⚠️ بلاغ عن مشكلة</button>
            <button className="btn-outline btn-block">🔧 طلب صيانة طارئة</button>
            <button className="btn-outline btn-block">💧 طلب غسيل</button>
            <button className="btn-outline btn-block">⛽ تذكير وقود</button>
            <button className="btn-orange btn-block">📞 اتصل بمدير الفرع</button>
          </div>

          <h4 className="h4" style={{ color: 'var(--purple)', marginBottom: 8 }}>الفاتورة الحالية</h4>
          <div className="surface-2 p-16 r-16">
            <div className="row between mb-4"><span className="muted body-s">الإيجار الشهري</span><strong className="numeric">2,999 ر.س</strong></div>
            <div className="row between mb-4"><span className="muted body-s">التأمين</span><strong className="numeric">1,470 ر.س</strong></div>
            <div className="row between mb-4"><span className="muted body-s">الإضافات</span><strong className="numeric">1,200 ر.س</strong></div>
            <div className="row between mb-4"><span className="muted body-s">VAT 15%</span><strong className="numeric">850 ر.س</strong></div>
            <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)', margin: '8px 0' }} />
            <div className="row between"><strong>الإجمالي</strong><strong className="numeric" style={{ color: 'var(--orange-500)' }}>5,669 ر.س</strong></div>
          </div>
        </div>
      </div>
    </CustomerShell>
  );
}

function Stat({ val, label }: { val: string; label: string }) {
  return (
    <div>
      <div className="numeric" style={{ fontSize: 28, fontWeight: 900 }}>{val}</div>
      <span style={{ opacity: .8, fontSize: 13 }}>{label}</span>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="row between"><span className="muted body-s">{k}</span><span style={{ fontWeight: 700 }}>{v}</span></div>;
}
