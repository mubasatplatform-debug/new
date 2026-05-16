import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

const comparison = [
  { car: 'تويوتا كامري 2024', cat: 'سيدان', img: '🚘', daily: 199, monthly: 4499, seats: 5, transmission: 'أوتوماتيك', fuel: 'بنزين', tank: 60, kmL: '14 كم/لتر', luggage: 'شنطتان كبيرتان', insurance: 'شامل', highlights: ['شاشة 9"', 'كاميرا خلفية', 'حساسات أمامية+خلفية'] },
  { car: 'هيونداي توسان 2024', cat: 'SUV', img: '🚙', daily: 229, monthly: 4999, seats: 5, transmission: 'أوتوماتيك', fuel: 'بنزين', tank: 62, kmL: '11 كم/لتر', luggage: 'مساحة 540 لتر', insurance: 'شامل', highlights: ['شاشة 10"', 'كاميرا 360', 'تشغيل عن بعد'] },
  { car: 'كيا سبورتاج 2024', cat: 'SUV', img: '🚙', daily: 219, monthly: 4799, seats: 5, transmission: 'أوتوماتيك', fuel: 'بنزين', tank: 54, kmL: '12 كم/لتر', luggage: 'مساحة 587 لتر', insurance: 'شامل', highlights: ['شاشة 12"', 'كاميرا خلفية', 'مثبت سرعة ذكي'] }
];

const Row = ({ label, vals }: { label: string; vals: Array<string | number> }) => (
  <tr>
    <th style={{ background: 'var(--neutral-50)', textAlign: 'right' }}>{label}</th>
    {vals.map((v, i) => <td key={i} className="numeric">{v}</td>)}
  </tr>
);

export default function ComparePage() {
  return (
    <PublicShell url="dheelplus.sa/compare">
      <PageHeader eyebrow="مقارنة السيارات" title="قارن قبل ما تحجز" sub="ضع جنباً إلى جنب 3 سيارات من اختيارك." />
      <div className="container">
        <section className="section">
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  {comparison.map((c) => (
                    <th key={c.car} style={{ minWidth: 220 }}>
                      <div style={{ fontSize: 64, textAlign: 'center' }}>{c.img}</div>
                      <h3 style={{ color: 'var(--purple)', margin: '8px 0 4px' }}>{c.car}</h3>
                      <span className="badge purple">{c.cat}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="السعر اليومي" vals={comparison.map(c => `${c.daily} ر.س`)} />
                <Row label="السعر الشهري" vals={comparison.map(c => `${c.monthly.toLocaleString()} ر.س`)} />
                <Row label="عدد المقاعد" vals={comparison.map(c => c.seats)} />
                <Row label="ناقل الحركة" vals={comparison.map(c => c.transmission)} />
                <Row label="الوقود" vals={comparison.map(c => c.fuel)} />
                <Row label="سعة الخزّان" vals={comparison.map(c => `${c.tank} لتر`)} />
                <Row label="استهلاك الوقود" vals={comparison.map(c => c.kmL)} />
                <Row label="الأمتعة" vals={comparison.map(c => c.luggage)} />
                <Row label="التأمين" vals={comparison.map(() => 'شامل')} />
                <tr>
                  <th>المزايا البارزة</th>
                  {comparison.map((c, i) => (
                    <td key={i}>
                      <ul style={{ margin: 0, paddingInlineStart: 16, fontSize: 13 }}>
                        {c.highlights.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th></th>
                  {comparison.map((c) => (
                    <td key={c.car}>
                      <Link href={`/cars/${c.car.includes('كامري') ? 'camry-2024' : c.car.includes('توسان') ? 'tucson-2024' : 'sportage-2024'}`} className="btn-orange btn-sm btn-block">احجز هذه ←</Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
