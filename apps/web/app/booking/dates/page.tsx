import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

const days = Array.from({ length: 30 }, (_, i) => i + 1);
const monthDays = ['أحد','إثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'];

export default function BookingDatesPage() {
  return (
    <BookingShell current="dates" summary={
      <div className="stack gap-12">
        <Row k="نوع التأجير" v="شهري" />
        <Row k="الموقع" v="الرياض - العليا" />
        <Row k="من" v="14 مايو 2024 - 9:00 ص" highlight />
        <Row k="إلى" v="14 يونيو 2024 - 9:00 ص" highlight />
        <Row k="المدة" v="30 يوم" highlight />
        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
        <div className="row between">
          <strong>السعر التقديري</strong>
          <strong className="numeric" style={{ color: 'var(--orange-500)' }}>2,999 ر.س</strong>
        </div>
      </div>
    }>
      <div className="card p-32">
        <span className="caption">الخطوة 3 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 12, color: 'var(--purple)' }}>اختر التاريخ والوقت</h1>

        <div className="grid grid-2 gap-16">
          <div>
            <label className="label">تاريخ الاستلام</label>
            <div className="card p-16">
              <div className="row between aic mb-12">
                <button className="row-action">‹</button>
                <strong style={{ color: 'var(--purple)' }}>مايو 2024</strong>
                <button className="row-action">›</button>
              </div>
              <div className="grid grid-7 gap-4" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {monthDays.map(d => <span key={d} className="caption" style={{ textAlign: 'center', padding: 6 }}>{d}</span>)}
                {days.map(d => (
                  <span key={d} style={{
                    textAlign: 'center', padding: 8, borderRadius: 8, fontWeight: 700,
                    background: d === 14 ? 'var(--purple-500)' : d === 18 ? 'var(--purple-100)' : 'transparent',
                    color: d === 14 ? 'white' : d < 14 ? 'var(--neutral-400)' : 'var(--purple)',
                    cursor: d < 14 ? 'not-allowed' : 'pointer',
                    fontSize: 13
                  }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="label">وقت الاستلام</label>
            <div className="card p-16 stack gap-8">
              {['8:00 ص','9:00 ص','10:00 ص','11:00 ص','12:00 م','2:00 م','4:00 م','6:00 م'].map((t, i) => (
                <label key={t} className="row aic gap-8 p-8 r-12" style={{ cursor: 'pointer', background: i === 1 ? 'var(--purple-50)' : 'transparent', border: i === 1 ? '1px solid var(--purple-200)' : '1px solid transparent' }}>
                  <span className={`radio-i ${i === 1 ? 'checked' : ''}`} />
                  <span style={{ flex: 1, fontWeight: 700 }}>{t}</span>
                  {i === 4 && <span className="badge orange">مزدحم</span>}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-16 mt-16 row aic between gap-12">
          <div>
            <strong style={{ color: 'var(--purple)' }}>📅 التقويم الهجري</strong>
            <p className="muted body-s" style={{ margin: '4px 0 0' }}>عرض التواريخ بالتقويم الهجري بدلاً من الميلادي</p>
          </div>
          <span className="switch" />
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/location" className="btn-outline">رجوع</Link>
          <Link href="/booking/availability" className="btn-orange btn-lg">التالي ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="row between">
      <span className="muted body-s">{k}</span>
      <span className="body-s" style={{ fontWeight: highlight ? 800 : 600, color: highlight ? 'var(--purple)' : undefined }}>{v}</span>
    </div>
  );
}
