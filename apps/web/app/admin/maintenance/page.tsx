import { AdminShell } from '@/components/AdminShell';
import { StatCard } from '@/components/Cards';

const orders = [
  { id: 'MO-1042', vehicle: 'شيفروليه تاهو 2024', plate: 'ت ك ف 4521', kind: 'صيانة دورية', km: 45000, vendor: 'مركز الصيانة الذكي', cost: 850, eta: 'اليوم 4:00 م', priority: 'عادية', status: 'قيد التنفيذ' },
  { id: 'MO-1041', vehicle: 'كيا سبورتاج 2024', plate: 'س ر ج 1208', kind: 'إصلاح إطار', km: 12300, vendor: 'إطارات الراشد', cost: 320, eta: 'غداً 10 ص', priority: 'عاجلة', status: 'مجدولة' },
  { id: 'MO-1040', vehicle: 'هيونداي إلنترا 2024', plate: 'ب ج د 3322', kind: 'تغيير زيت', km: 18500, vendor: 'الورشة الداخلية', cost: 220, eta: 'مكتملة', priority: 'عادية', status: 'مكتملة' }
];

export default function MaintenancePage() {
  return (
    <AdminShell title="الصيانة">
      <div className="grid grid-4 gap-16 mb-24">
        <StatCard label="أوامر مفتوحة" value="42" delta="-3" tone="green" />
        <StatCard label="عاجلة" value="6" delta="انتباه" tone="red" />
        <StatCard label="هذا الشهر" value="218" delta="+22" tone="purple" />
        <StatCard label="إجمالي التكلفة" value="142,800 ر.س" delta="ضمن الميزانية" tone="green" />
      </div>

      <div className="grid grid-3 gap-16 mb-24">
        <div className="card p-20">
          <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>🔮 تنبؤ الصيانة</h4>
          <p className="muted body-s">12 سيارة تحتاج صيانة وقائية خلال 14 يوم</p>
          <div className="stack gap-4 mt-8">
            <div className="row between body-s"><span>تويوتا كامري</span><span className="numeric muted">8 سيارات</span></div>
            <div className="row between body-s"><span>كيا سبورتاج</span><span className="numeric muted">3 سيارات</span></div>
            <div className="row between body-s"><span>أخرى</span><span className="numeric muted">1 سيارة</span></div>
          </div>
          <button className="btn-outline btn-sm btn-block mt-12">جدولة آلية</button>
        </div>
        <div className="card p-20">
          <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>الورش الشريكة</h4>
          <div className="stack gap-8">
            <Vendor name="مركز الصيانة الذكي" rating="4.8 ⭐" jobs="142 طلب" status="متصل" />
            <Vendor name="إطارات الراشد" rating="4.5 ⭐" jobs="58 طلب" status="متصل" />
            <Vendor name="الورشة الداخلية" rating="—" jobs="ورشتنا" status="نشط" />
          </div>
        </div>
        <div className="card p-20">
          <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>توزيع التكاليف</h4>
          <div className="row gap-12 aic">
            <div className="donut" style={{ width: 120, height: 120 }}><div className="donut-center" style={{ width: 70, height: 70 }}><strong className="numeric body-s" style={{ color: 'var(--purple)' }}>142K</strong></div></div>
            <div className="stack gap-4 body-s">
              <div className="row aic gap-4"><span style={{ width: 10, height: 10, background: 'var(--purple-500)', borderRadius: 4 }} />دورية 65%</div>
              <div className="row aic gap-4"><span style={{ width: 10, height: 10, background: 'var(--orange-400)', borderRadius: 4 }} />طارئة 22%</div>
              <div className="row aic gap-4"><span style={{ width: 10, height: 10, background: 'var(--success)', borderRadius: 4 }} />إطارات 13%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="table-toolbar">
          <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>أوامر الصيانة</h3>
          <div className="row gap-8">
            <button className="btn-outline btn-sm">الحالة ▾</button>
            <button className="btn-outline btn-sm">الأولوية ▾</button>
            <button className="btn-orange btn-sm">+ أمر جديد</button>
          </div>
        </div>
        <table className="table">
          <thead><tr>
            <th>رقم الأمر</th><th>السيارة</th><th>اللوحة</th><th>نوع الصيانة</th><th>الكيلومتر</th><th>الورشة</th><th>التكلفة</th><th>الموعد</th><th>الأولوية</th><th>الحالة</th>
          </tr></thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td className="numeric">{o.id}</td>
                <td>{o.vehicle}</td>
                <td className="numeric">{o.plate}</td>
                <td>{o.kind}</td>
                <td className="numeric">{o.km.toLocaleString()}</td>
                <td>{o.vendor}</td>
                <td className="numeric" style={{ fontWeight: 800 }}>{o.cost} ر.س</td>
                <td className="muted">{o.eta}</td>
                <td><span className={`badge ${o.priority === 'عاجلة' ? 'red' : 'gray'}`}>{o.priority}</span></td>
                <td><span className={`badge ${o.status === 'مكتملة' ? 'green' : o.status === 'قيد التنفيذ' ? 'orange' : 'purple'}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}

function Vendor({ name, rating, jobs, status }: { name: string; rating: string; jobs: string; status: string }) {
  return (
    <div className="row aic between p-12" style={{ borderRadius: 12, border: '1px solid var(--neutral-200)' }}>
      <div>
        <strong style={{ color: 'var(--purple)' }}>{name}</strong>
        <p className="muted body-s" style={{ margin: 0 }}>{rating} • {jobs}</p>
      </div>
      <span className="badge green dot">{status}</span>
    </div>
  );
}
