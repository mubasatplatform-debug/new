import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';
import { cars } from '@/lib/data';

export default function BookingConflictPage() {
  return (
    <BookingShell current="availability">
      <div className="card p-32">
        <span className="status-pill" style={{ background: '#FFF7DD', color: '#6F4D00' }}>⚠️ السيارة غير متوفرة</span>
        <h1 className="h1" style={{ marginTop: 12, marginBottom: 8, color: 'var(--purple)' }}>تويوتا كامري 2024 محجوزة في هذه الفترة</h1>
        <p className="body-l muted">لكن لدينا بدائل مماثلة تماماً وبنفس السعر أو أقل.</p>

        <div className="grid grid-2 gap-16 mt-24">
          {cars.filter(c => c.status === 'متاحة').slice(0, 4).map(car => (
            <article key={car.id} className="card p-16 row gap-16">
              <div className="car-thumb" style={{ width: 120, flexShrink: 0 }}>{car.image}</div>
              <div style={{ flex: 1 }}>
                <span className="badge purple">{car.category}</span>
                <h3 style={{ margin: '6px 0 4px', color: 'var(--purple)' }}>{car.name}</h3>
                <p className="muted body-s" style={{ margin: 0 }}>{car.specs}</p>
                <div className="row between aie mt-12">
                  <span className="numeric" style={{ fontWeight: 900, color: 'var(--orange-500)' }}>{car.monthly.toLocaleString()} ر.س</span>
                  <Link href="/booking/insurance" className="btn-orange btn-sm">اختر هذه</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)', margin: '24px 0' }} />

        <div className="grid grid-2 gap-16">
          <button className="card p-20 hover-lift" style={{ textAlign: 'right', cursor: 'pointer' }}>
            <strong style={{ color: 'var(--purple)' }}>📅 تغيير التاريخ</strong>
            <p className="muted body-s" style={{ margin: '4px 0 0' }}>اختر فترة أخرى لنفس السيارة</p>
          </button>
          <button className="card p-20 hover-lift" style={{ textAlign: 'right', cursor: 'pointer' }}>
            <strong style={{ color: 'var(--purple)' }}>🔔 أَخبِرني عند التوفّر</strong>
            <p className="muted body-s" style={{ margin: '4px 0 0' }}>سنُشعرك إذا أصبحت متاحة</p>
          </button>
        </div>
      </div>
    </BookingShell>
  );
}
