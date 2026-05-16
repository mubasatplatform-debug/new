import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';
import { cars } from '@/lib/data';

export default function BookingAvailabilityPage() {
  return (
    <BookingShell current="availability" summary={
      <div className="stack gap-12">
        <strong className="caption">الفلتر النشط</strong>
        <div className="row gap-8 wrap">
          <span className="badge purple">شهري</span>
          <span className="badge purple">الرياض</span>
          <span className="badge purple">14 مايو → 14 يونيو</span>
        </div>
        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
        <strong>الفلاتر</strong>
        <FilterGroup title="الفئة" options={['الكل','اقتصادية','سيدان','SUV','فاخرة','ليموزين']} />
        <FilterGroup title="ناقل الحركة" options={['الكل','أوتوماتيك','عادي']} />
        <FilterGroup title="نطاق السعر" options={['الكل','&lt; 200','200-400','+400']} />
      </div>
    }>
      <div className="card p-32">
        <span className="caption">الخطوة 4 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 8, color: 'var(--purple)' }}>السيارات المتاحة</h1>
        <p className="muted body-l">
          <strong style={{ color: 'var(--purple)' }}>{cars.filter(c => c.status === 'متاحة').length}</strong> سيارة جاهزة للحجز خلال الفترة المختارة.
        </p>

        <div className="row gap-8 between aic mt-16 mb-16 wrap">
          <div className="row gap-8">
            <button className="pill active">الموصى بها</button>
            <button className="pill">الأقل سعراً</button>
            <button className="pill">الأحدث</button>
          </div>
          <div className="row gap-8 aic">
            <span className="caption">عرض</span>
            <button className="row-action">شبكة</button>
            <button className="row-action">قائمة</button>
          </div>
        </div>

        <div className="grid grid-2 gap-16">
          {cars.filter(c => c.status === 'متاحة').map((car, i) => (
            <article key={car.id} className="card p-16 row gap-16" style={{ border: i === 0 ? '2px solid var(--orange-400)' : undefined }}>
              <div className="car-thumb" style={{ width: 140, flexShrink: 0 }}>{car.image}</div>
              <div style={{ flex: 1 }}>
                <div className="row between aic">
                  <span className="badge purple">{car.category}</span>
                  {i === 0 && <span className="badge orange">⭐ موصى بها</span>}
                </div>
                <h3 style={{ margin: '6px 0', color: 'var(--purple)' }}>{car.name}</h3>
                <p className="muted body-s" style={{ margin: 0 }}>{car.specs}</p>
                <p className="muted body-s" style={{ margin: '2px 0 0' }}>📍 {car.branch}</p>
                <div className="row between aie mt-12">
                  <div>
                    <small className="muted">شهرياً</small>
                    <div className="numeric" style={{ fontSize: 22, fontWeight: 900, color: 'var(--orange-500)' }}>{car.monthly.toLocaleString()} ر.س</div>
                  </div>
                  <Link href="/booking/insurance" className="btn-orange">اختر هذه ←</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/dates" className="btn-outline">رجوع</Link>
        </div>
      </div>
    </BookingShell>
  );
}

function FilterGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <div>
      <span className="caption" style={{ display: 'block', marginBottom: 6 }}>{title}</span>
      <div className="row gap-4 wrap">
        {options.map((o, i) => <span key={o} className={`pill ${i === 0 ? 'active' : ''}`} style={{ fontSize: 11, padding: '6px 10px' }} dangerouslySetInnerHTML={{ __html: o }} />)}
      </div>
    </div>
  );
}
