import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

const cities = ['الرياض', 'جدة', 'الدمام', 'الخبر', 'مكة', 'المدينة', 'أبها', 'تبوك'];
const branches = [
  { id: 'olaya', name: 'العليا', city: 'الرياض', cars: 280, type: 'فرع 24/7' },
  { id: 'takhassusi', name: 'التخصصي', city: 'الرياض', cars: 195, type: 'فرع رئيسي' },
  { id: 'airport', name: 'مطار الملك خالد', city: 'الرياض', cars: 165, type: 'مطار' },
  { id: 'kingdom', name: 'برج المملكة', city: 'الرياض', cars: 75, type: 'فرع تنفيذي' }
];

export default function BookingLocationPage() {
  return (
    <BookingShell current="location" summary={<Summary />}>
      <div className="card p-32">
        <span className="caption">الخطوة 2 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 12, color: 'var(--purple)' }}>اختر موقع الاستلام</h1>

        <div className="row gap-12 wrap mb-16">
          {cities.map((c, i) => <span key={c} className={`pill ${i === 0 ? 'active' : ''}`}>{c}</span>)}
        </div>

        <h3 className="h3" style={{ color: 'var(--purple)' }}>فروع الرياض</h3>
        <div className="grid grid-2 gap-12">
          {branches.map((b, i) => (
            <label key={b.id} className="card p-20" style={{ display: 'flex', gap: 12, cursor: 'pointer', border: i === 0 ? '2px solid var(--purple-500)' : '1px solid var(--neutral-200)' }}>
              <span className={`radio-i ${i === 0 ? 'checked' : ''}`} />
              <div style={{ flex: 1 }}>
                <strong style={{ color: 'var(--purple)' }}>{b.name}</strong>
                <span className="badge purple" style={{ marginInlineStart: 8 }}>{b.type}</span>
                <p className="muted body-s" style={{ margin: '4px 0 0' }}>🚗 {b.cars} سيارة متاحة</p>
              </div>
            </label>
          ))}
        </div>

        <div className="card p-20 mt-24" style={{ background: 'var(--orange-50)', border: '1px solid var(--orange-200)' }}>
          <div className="row aic between gap-12">
            <div>
              <strong style={{ color: 'var(--orange-600)' }}>🚚 توصيل مجاني للأعضاء PLATINUM</strong>
              <p className="muted body-s" style={{ margin: '4px 0 0' }}>استلم سيارتك من العنوان الذي تختاره — التوصيل العادي 50 ر.س داخل الرياض.</p>
            </div>
            <span className="switch on" />
          </div>
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/type" className="btn-outline">رجوع</Link>
          <Link href="/booking/dates" className="btn-orange btn-lg">التالي ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}

function Summary() {
  return (
    <div className="stack gap-12">
      <SumRow label="نوع التأجير" value="شهري" />
      <SumRow label="الموقع" value="الرياض - العليا" />
      <SumRow label="التاريخ" value="—" muted />
      <SumRow label="السيارة" value="—" muted />
      <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
      <div className="row between">
        <strong>الإجمالي التقديري</strong>
        <strong className="numeric" style={{ color: 'var(--orange-500)' }}>—</strong>
      </div>
    </div>
  );
}

export function SumRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="row between">
      <span className="muted body-s">{label}</span>
      <span className={muted ? 'muted body-s' : 'body-s'} style={{ fontWeight: muted ? 600 : 800 }}>{value}</span>
    </div>
  );
}
