import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

const branches = [
  { id: 'riyadh-olaya', city: 'الرياض', name: 'العليا', addr: 'طريق الملك فهد، العليا', cars: 280, status: 'مفتوح', hours: '24/7', phone: '011 4xx xxxx' },
  { id: 'riyadh-takhassusi', city: 'الرياض', name: 'التخصصي', addr: 'شارع التخصصي، حي المروج', cars: 195, status: 'مفتوح', hours: '7 ص - 11 م', phone: '011 4xx xxxx' },
  { id: 'jeddah-tahlia', city: 'جدة', name: 'التحلية', addr: 'طريق التحلية، حي الزهراء', cars: 220, status: 'مفتوح', hours: '24/7', phone: '012 6xx xxxx' },
  { id: 'jeddah-airport', city: 'جدة', name: 'مطار الملك عبدالعزيز', addr: 'صالة الوصول، الطابق الأرضي', cars: 165, status: 'مفتوح', hours: '24/7', phone: '012 6xx xxxx' },
  { id: 'dammam', city: 'الدمام', name: 'الكورنيش', addr: 'طريق الأمير محمد بن فهد', cars: 140, status: 'مفتوح', hours: '7 ص - 1 ص', phone: '013 8xx xxxx' },
  { id: 'khobar', city: 'الخبر', name: 'العقربية', addr: 'شارع الأمير فيصل', cars: 95, status: 'مفتوح', hours: '7 ص - 12 م', phone: '013 8xx xxxx' },
  { id: 'makkah', city: 'مكة', name: 'العزيزية', addr: 'طريق الستين، العزيزية', cars: 80, status: 'مفتوح', hours: '24/7', phone: '012 5xx xxxx' },
  { id: 'madinah', city: 'المدينة', name: 'قباء', addr: 'طريق قباء، حي بني حارثة', cars: 60, status: 'مفتوح', hours: '7 ص - 12 م', phone: '014 8xx xxxx' }
];

export default function BranchesPage() {
  return (
    <PublicShell url="dheelplus.sa/branches">
      <PageHeader eyebrow="فروعنا" title="37 فرع في 12 مدينة" sub="اختر الأقرب لك. توصيل مجاني للأعضاء PLATINUM وVIP." />
      <div className="container">
        <section className="section">
          <div className="card p-12 row gap-8 wrap">
            {['الكل','الرياض','جدة','الدمام','الخبر','مكة','المدينة','أبها','تبوك'].map((c, i) =>
              <span key={c} className={`pill ${i===0?'active':''}`}>{c}</span>
            )}
          </div>
        </section>
        <section className="section split-2">
          <div className="grid grid-2 gap-16">
            {branches.map(b => (
              <Link key={b.id} href={`/branches/${b.id}`} className="card p-20 hover-lift" style={{ display: 'block' }}>
                <div className="row between aic">
                  <span className="caption">{b.city}</span>
                  <span className="badge green">{b.status}</span>
                </div>
                <h3 className="h3" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>{b.name}</h3>
                <p className="muted body-s" style={{ margin: 0 }}>{b.addr}</p>
                <div className="row between mt-16 aic">
                  <span className="numeric body-s">🕒 {b.hours}</span>
                  <span className="numeric body-s">🚗 {b.cars} سيارة</span>
                </div>
              </Link>
            ))}
          </div>
          <aside className="card p-12">
            <div className="map-canvas r-16" style={{ height: 540 }}>
              <div className="map-grid" />
              <div className="map-pin pin-1 purple"><b>الرياض - العليا</b><small>280 سيارة</small></div>
              <div className="map-pin pin-3 orange"><b>جدة - التحلية</b><small>220 سيارة</small></div>
              <div className="map-pin pin-2 green"><b>الدمام</b><small>140 سيارة</small></div>
              <div className="map-pin pin-4 purple"><b>مكة</b><small>80 سيارة</small></div>
              <div className="map-pin pin-5 orange"><b>المدينة</b><small>60 سيارة</small></div>
            </div>
            <div className="p-16">
              <strong style={{ color: 'var(--purple)' }}>📍 خريطة الفروع</strong>
              <p className="muted body-s" style={{ margin: '4px 0 0' }}>اضغط أي علامة لرؤية تفاصيل الفرع.</p>
            </div>
          </aside>
        </section>
      </div>
    </PublicShell>
  );
}
