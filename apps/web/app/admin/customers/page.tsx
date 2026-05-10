import { AdminShell } from '@/components/AdminShell';
import { StatCard } from '@/components/Cards';

const customers = [
  { id: '#C-1042', name: 'محمد العتيبي', tier: 'GOLD', phone: '050xxxxxxx', city: 'الرياض', total: '12,847 ر.س', bookings: 8, last: '14 مايو', risk: 12, status: 'نشط' },
  { id: '#C-1041', name: 'سارة العمري', tier: 'SILVER', phone: '050xxxxxxx', city: 'جدة', total: '4,499 ر.س', bookings: 3, last: '08 مايو', risk: 8, status: 'نشط' },
  { id: '#C-1040', name: 'شركة السيف للتجارة', tier: 'PLATINUM', phone: '011xxxxxxx', city: 'الرياض', total: '184,500 ر.س', bookings: 47, last: '14 مايو', risk: 5, status: 'B2B' },
  { id: '#C-1039', name: 'أحمد الفوزان', tier: 'SILVER', phone: '050xxxxxxx', city: 'الدمام', total: '1,899 ر.س', bookings: 2, last: '12 مايو', risk: 65, status: 'تحت المراقبة' },
  { id: '#C-1038', name: 'فاطمة القرني', tier: 'VIP', phone: '050xxxxxxx', city: 'الرياض', total: '67,800 ر.س', bookings: 22, last: '13 مايو', risk: 3, status: 'نشط' }
];

export default function CustomersAdminPage() {
  return (
    <AdminShell title="إدارة العملاء (Customer 360)">
      <div className="grid grid-4 gap-16 mb-24">
        <StatCard label="إجمالي العملاء" value="14,592" delta="+247" tone="green" />
        <StatCard label="نشطين هذا الشهر" value="3,847" delta="+18%" tone="green" />
        <StatCard label="عملاء VIP" value="184" delta="+12" tone="purple" />
        <StatCard label="تحت المراقبة" value="42" delta="مخاطر مرتفعة" tone="red" />
      </div>

      <div className="card">
        <div className="table-toolbar">
          <div className="row gap-8 aic wrap">
            <div className="input-group" style={{ minWidth: 280 }}><input placeholder="🔎 ابحث بالاسم، الهوية، الجوال..." /></div>
            <button className="btn-outline btn-sm">المستوى ▾</button>
            <button className="btn-outline btn-sm">المدينة ▾</button>
            <button className="btn-outline btn-sm">الحالة ▾</button>
            <button className="btn-outline btn-sm">المخاطر ▾</button>
          </div>
          <div className="row gap-8">
            <button className="btn-outline btn-sm">📥 تصدير</button>
            <button className="btn-orange btn-sm">+ عميل جديد</button>
          </div>
        </div>
        <table className="table">
          <thead><tr>
            <th></th><th>العميل</th><th>المستوى</th><th>الجوال</th><th>المدينة</th><th>إجمالي الإنفاق</th><th>الحجوزات</th><th>آخر نشاط</th><th>المخاطر</th><th>الحالة</th><th>إجراء</th>
          </tr></thead>
          <tbody>
            {customers.map(c => (
              <tr key={c.id}>
                <td><span className="checkbox" /></td>
                <td>
                  <div className="row aic gap-8">
                    <div className="avatar xs">{c.name[0]}</div>
                    <div><strong>{c.name}</strong><br /><small className="caption numeric">{c.id}</small></div>
                  </div>
                </td>
                <td><span className={`badge ${c.tier === 'PLATINUM' ? 'purple' : c.tier === 'GOLD' ? 'orange' : c.tier === 'VIP' ? 'green' : 'gray'}`}>{c.tier}</span></td>
                <td className="numeric">{c.phone}</td>
                <td>{c.city}</td>
                <td className="numeric" style={{ fontWeight: 800 }}>{c.total}</td>
                <td className="numeric">{c.bookings}</td>
                <td className="muted">{c.last}</td>
                <td>
                  <div className="row aic gap-4">
                    <div style={{ width: 60, height: 6, background: 'var(--neutral-200)', borderRadius: 999, overflow: 'hidden' }}>
                      <span style={{ display: 'block', height: '100%', width: `${c.risk}%`, background: c.risk > 50 ? 'var(--danger)' : c.risk > 20 ? 'var(--warning)' : 'var(--success)' }} />
                    </div>
                    <small className="numeric">{c.risk}%</small>
                  </div>
                </td>
                <td><span className={`badge ${c.status === 'نشط' ? 'green' : c.status === 'B2B' ? 'purple' : 'red'}`}>{c.status}</span></td>
                <td><button className="row-action">عرض ←</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
