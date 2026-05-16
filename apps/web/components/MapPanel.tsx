type Branch = {
  id: string;
  name: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  vehicles: number;
  status: 'ACTIVE' | 'BUSY' | 'MAINTENANCE';
};

type VehiclePin = {
  id: string;
  plate: string;
  model: string;
  branch: string;
  lat: number;
  lng: number;
  status: 'AVAILABLE' | 'RENTED' | 'RESERVED' | 'MAINTENANCE' | 'CLEANING';
};

export const branches: Branch[] = [
  { id: 'riyadh-olaya', name: 'فرع الرياض - العليا', city: 'الرياض', address: 'طريق الملك فهد، العليا', lat: 24.7136, lng: 46.6753, vehicles: 89, status: 'ACTIVE' },
  { id: 'jeddah-tahlia', name: 'فرع جدة - التحلية', city: 'جدة', address: 'شارع الأمير محمد بن عبدالعزيز', lat: 21.5433, lng: 39.1728, vehicles: 67, status: 'ACTIVE' },
  { id: 'dammam-corniche', name: 'فرع الدمام - الكورنيش', city: 'الدمام', address: 'طريق الخليج', lat: 26.4207, lng: 50.0888, vehicles: 45, status: 'BUSY' },
  { id: 'khobar', name: 'فرع الخبر', city: 'الخبر', address: 'الكورنيش، الخبر الشمالية', lat: 26.2172, lng: 50.1971, vehicles: 28, status: 'ACTIVE' },
  { id: 'makkah', name: 'فرع مكة - العزيزية', city: 'مكة', address: 'العزيزية', lat: 21.3891, lng: 39.8579, vehicles: 16, status: 'MAINTENANCE' }
];

export const liveVehicles: VehiclePin[] = [
  { id: 'camry-2024', plate: 'د ب ل 1234', model: 'تويوتا كامري 2024', branch: 'الرياض - العليا', lat: 24.7136, lng: 46.6753, status: 'AVAILABLE' },
  { id: 'tucson-2024', plate: 'د ب ل 2458', model: 'هيونداي توسان 2024', branch: 'جدة - التحلية', lat: 21.5433, lng: 39.1728, status: 'RENTED' },
  { id: 'sportage-2024', plate: 'د ب ل 5678', model: 'كيا سبورتاج 2024', branch: 'الدمام - الكورنيش', lat: 26.4207, lng: 50.0888, status: 'RESERVED' },
  { id: 'corolla-2024', plate: 'د ب ل 9001', model: 'تويوتا كورولا 2024', branch: 'الخبر', lat: 26.2172, lng: 50.1971, status: 'MAINTENANCE' }
];

const statusTone: Record<string, string> = {
  ACTIVE: 'green', BUSY: 'orange', MAINTENANCE: 'red', AVAILABLE: 'green', RENTED: 'purple', RESERVED: 'orange', CLEANING: 'purple'
};

export function GoogleMapPanel({ mode = 'public' }: { mode?: 'public' | 'fleet' }) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const center = mode === 'fleet' ? '24.7136,46.6753' : '24.7136,46.6753';
  const src = key ? `https://www.google.com/maps/embed/v1/view?key=${key}&center=${center}&zoom=${mode === 'fleet' ? 6 : 5}&maptype=roadmap` : '';
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div style={{ padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14 }}>
        <div>
          <h3 style={{ margin: 0, color: 'var(--purple)' }}>{mode === 'fleet' ? 'خريطة الأسطول الحية' : 'خريطة الفروع ومناطق الخدمة'}</h3>
          <p className="muted" style={{ margin: '6px 0 0' }}>{key ? 'Google Maps مفعل من متغير البيئة' : 'عرض تجريبي — أضف NEXT_PUBLIC_GOOGLE_MAPS_API_KEY لتفعيل Google Maps الحقيقي'}</p>
        </div>
        <span className={`badge ${key ? 'green' : 'orange'}`}>{key ? 'Google Maps Connected' : 'Demo Mode'}</span>
      </div>
      {key ? (
        <iframe title="Dheel Plus Google Map" src={src} width="100%" height="460" style={{ border: 0, display: 'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="map-canvas">
          <div className="map-grid" />
          <div className="geo geo-green">Green Area<br/><small>توصيل عادي</small></div>
          <div className="geo geo-yellow">Yellow Area<br/><small>رسوم إضافية</small></div>
          <div className="geo geo-red">Red Area<br/><small>موافقة مطلوبة</small></div>
          {(mode === 'fleet' ? liveVehicles : branches).map((item, idx) => (
            <div key={item.id} className={`map-pin pin-${idx + 1} ${statusTone[(item as any).status] || 'purple'}`}>
              <b>{mode === 'fleet' ? (item as VehiclePin).plate : (item as Branch).city}</b>
              <small>{mode === 'fleet' ? (item as VehiclePin).model : `${(item as Branch).vehicles} مركبة`}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ServiceAreaLegend() {
  return (
    <div className="grid grid-3">
      <div className="card stat"><span className="badge green">Green Area</span><b>داخل المدينة</b><p className="muted">توصيل واستلام بسعر عادي، مناسب للفروع والمطارات.</p></div>
      <div className="card stat"><span className="badge orange">Yellow Area</span><b>خارج النطاق القريب</b><p className="muted">توصيل ممكن مع رسوم إضافية وموافقة الفرع.</p></div>
      <div className="card stat"><span className="badge red">Red Area</span><b>منطقة مقيّدة</b><p className="muted">تحتاج موافقة مدير أو غير متاحة حسب سياسة التشغيل.</p></div>
    </div>
  );
}

export function BranchList() {
  return (
    <div className="card" style={{ padding: 22 }}>
      <h3 style={{ marginTop: 0, color: 'var(--purple)' }}>الفروع النشطة</h3>
      <table className="table">
        <thead><tr><th>الفرع</th><th>المدينة</th><th>العنوان</th><th>المركبات</th><th>الحالة</th></tr></thead>
        <tbody>{branches.map(branch => <tr key={branch.id}><td>{branch.name}</td><td>{branch.city}</td><td>{branch.address}</td><td>{branch.vehicles}</td><td><span className={`badge ${statusTone[branch.status]}`}>{branch.status}</span></td></tr>)}</tbody>
      </table>
    </div>
  );
}
