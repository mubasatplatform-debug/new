import { CustomerShell } from '@/components/CustomerShell';
import { StatCard } from '@/components/Cards';

const v = [
  { id: 'V-2024-3422', date: '11 مايو 2024', kind: 'تجاوز السرعة', loc: 'طريق الملك فهد', amount: 150, status: 'مستحقة', najm: 'NJM-552014' },
  { id: 'V-2024-3398', date: '08 مايو 2024', kind: 'وقوف خاطئ', loc: 'حي العليا', amount: 100, status: 'مدفوعة', najm: 'NJM-549222' },
  { id: 'V-2024-3210', date: '22 إبريل 2024', kind: 'عدم ربط الحزام', loc: 'طريق الدائري', amount: 150, status: 'متنازَع عليها', najm: 'NJM-540991' }
];

export default function ViolationsPage() {
  return (
    <CustomerShell title="المخالفات المرورية" active="/customer/violations">
      <div className="card p-16 mb-16" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
        <div className="row aic gap-12">
          <div style={{ fontSize: 24 }}>🔄</div>
          <div style={{ flex: 1 }}>
            <strong style={{ color: 'var(--purple)' }}>متزامن مع منصة نجم</strong>
            <p className="muted body-s" style={{ margin: '2px 0 0' }}>آخر تزامن قبل 12 دقيقة. أي مخالفة جديدة تظهر تلقائياً هنا.</p>
          </div>
          <button className="btn-outline btn-sm">🔄 تزامن الآن</button>
        </div>
      </div>

      <div className="grid grid-4 gap-16 mb-24">
        <StatCard label="إجمالي المخالفات" value="3" tone="purple" />
        <StatCard label="المستحقة" value="150 ر.س" tone="red" delta="ادفع الآن" />
        <StatCard label="المدفوعة" value="100 ر.س" tone="green" />
        <StatCard label="متنازَع عليها" value="1" tone="orange" />
      </div>

      <div className="card">
        <div className="table-toolbar">
          <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>السجل الكامل</h3>
          <button className="btn-orange btn-sm">💳 ادفع المستحقة</button>
        </div>
        <table className="table">
          <thead><tr>
            <th>رقم المخالفة</th>
            <th>التاريخ</th>
            <th>المخالفة</th>
            <th>الموقع</th>
            <th>المبلغ</th>
            <th>الحالة</th>
            <th>إجراء</th>
          </tr></thead>
          <tbody>
            {v.map(x => (
              <tr key={x.id}>
                <td className="numeric">{x.id}<br /><small className="caption">نجم: {x.najm}</small></td>
                <td>{x.date}</td>
                <td>{x.kind}</td>
                <td>{x.loc}</td>
                <td className="numeric" style={{ fontWeight: 800 }}>{x.amount} ر.س</td>
                <td><span className={`badge ${x.status === 'مدفوعة' ? 'green' : x.status === 'مستحقة' ? 'red' : 'orange'}`}>{x.status}</span></td>
                <td>
                  {x.status === 'مستحقة' ? <button className="btn-orange btn-sm">دفع</button>
                    : x.status === 'متنازَع عليها' ? <button className="row-action">عرض النزاع</button>
                    : <button className="row-action">📥 الإيصال</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CustomerShell>
  );
}
