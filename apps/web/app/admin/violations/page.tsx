import { AdminShell } from '@/components/AdminShell';
import { StatCard } from '@/components/Cards';

const v = [
  { id: 'V-2024-3422', najm: 'NJM-552014', vehicle: 'كامري — أ ب ج 1234', driver: 'محمد العتيبي', kind: 'تجاوز السرعة', loc: 'طريق الملك فهد', date: '11 مايو', amount: 150, status: 'مطابقة' },
  { id: 'V-2024-3398', najm: 'NJM-549222', vehicle: 'توسان — س ر ج 1208', driver: 'عبدالله القحطاني', kind: 'وقوف خاطئ', loc: 'حي العليا', date: '08 مايو', amount: 100, status: 'بحاجة مطابقة' },
  { id: 'V-2024-3210', najm: 'NJM-540991', vehicle: 'إلنترا — ب ج د 3322', driver: 'فاطمة القرني', kind: 'عدم ربط الحزام', loc: 'الدائري', date: '22 إبريل', amount: 150, status: 'متنازَع عليها' }
];

export default function ViolationsAdmin() {
  return (
    <AdminShell title="المخالفات المرورية">
      <div className="card p-16 mb-16" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
        <div className="row aic gap-12">
          <div style={{ fontSize: 24 }}>🟢</div>
          <div style={{ flex: 1 }}>
            <strong style={{ color: 'var(--purple)' }}>مزامن مع نجم</strong>
            <p className="muted body-s" style={{ margin: '2px 0 0' }}>آخر تزامن قبل 8 دقائق • 1,247 مخالفة منذ بداية العام</p>
          </div>
          <button className="btn-outline btn-sm">⚙️ إعدادات نجم</button>
          <button className="btn-orange btn-sm">🔄 تزامن الآن</button>
        </div>
      </div>

      <div className="grid grid-4 gap-16 mb-24">
        <StatCard label="هذا الشهر" value="42" delta="-12%" tone="green" />
        <StatCard label="بحاجة مطابقة" value="6" delta="انتباه" tone="orange" />
        <StatCard label="مستحقة على العملاء" value="3,800 ر.س" tone="red" />
        <StatCard label="متنازَع عليها" value="2" tone="purple" />
      </div>

      <div className="card">
        <div className="table-toolbar">
          <div className="row gap-8 aic wrap">
            <div className="input-group" style={{ minWidth: 240 }}><input placeholder="🔎 رقم المخالفة..." /></div>
            <button className="btn-outline btn-sm">الفرع ▾</button>
            <button className="btn-outline btn-sm">الحالة ▾</button>
          </div>
          <button className="btn-outline btn-sm">📥 تصدير</button>
        </div>
        <table className="table">
          <thead><tr>
            <th>رقم المخالفة</th><th>نجم</th><th>السيارة</th><th>السائق</th><th>النوع</th><th>الموقع</th><th>التاريخ</th><th>المبلغ</th><th>الحالة</th><th>إجراء</th>
          </tr></thead>
          <tbody>
            {v.map(x => (
              <tr key={x.id}>
                <td className="numeric">{x.id}</td>
                <td className="numeric muted">{x.najm}</td>
                <td>{x.vehicle}</td>
                <td>{x.driver}</td>
                <td>{x.kind}</td>
                <td>{x.loc}</td>
                <td className="muted">{x.date}</td>
                <td className="numeric" style={{ fontWeight: 800 }}>{x.amount} ر.س</td>
                <td><span className={`badge ${x.status === 'مطابقة' ? 'green' : x.status === 'متنازَع عليها' ? 'orange' : 'red'}`}>{x.status}</span></td>
                <td><div className="row gap-4"><button className="row-action">📤 إشعار العميل</button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
