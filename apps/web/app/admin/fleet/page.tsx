import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';
import { cars } from '@/lib/data';
import { StatCard } from '@/components/Cards';

const statuses = ['متاحة', 'محجوزة', 'مؤجرة', 'صيانة', 'تنظيف'];

export default function FleetAdmin() {
  return (
    <BrowserFrame url="admin.dheelplus.sa/fleet">
      <AdminShell title="لوحة إدارة الأسطول">
        <div className="grid grid-5"><StatCard label="إجمالي المركبات" value="245"/><StatCard label="متاحة الآن" value="98"/><StatCard label="مؤجرة" value="97"/><StatCard label="محجوزة" value="22"/><StatCard label="صيانة" value="16"/></div>
        <div className="pill-row" style={{margin:'24px 0'}}><button className="btn">+ إضافة مركبة</button><button className="btn-outline">تصدير التقرير</button><input className="input" style={{maxWidth:420}} placeholder="ابحث عن لوحة أو طراز أو فرع..."/></div>
        <div className="kanban">{statuses.map((status, i)=><div className="kanban-col" key={status}><h3>{status}</h3>{cars.slice(0,3).map((car, idx)=><div className="card stat" key={car.id+idx} style={{marginBottom:12}}><span className={`badge ${i===0?'green':i===1?'orange':i===3?'red':'purple'}`}>{status}</span><div className="small-car">{car.image}</div><b style={{fontSize:16}}>{car.name}</b><p className="muted">{car.branch} • {car.mileage.toLocaleString()} كم</p></div>)}</div>)}</div>
        <section className="section grid grid-2"><div className="card stat"><h2>ملخص الأسطول</h2><div className="chart"/></div><div className="card stat"><h2>توزيع المركبات على الخريطة</h2><div style={{height:250, display:'grid', placeItems:'center', background:'#eef3f7', borderRadius:20}}>🗺️ الرياض • جدة • الدمام • الخبر</div></div></section>
      </AdminShell>
    </BrowserFrame>
  );
}
