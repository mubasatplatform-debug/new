import { AdminShell } from '@/components/AdminShell';

const events = [
  { time: 'اليوم 10:42 ص', user: 'سعد الحربي', role: 'موظف فرع', action: 'CONTRACT_HANDOVER_SIGNED', target: 'CN-2024-000512', branch: 'الرياض', ip: '85.13...' },
  { time: 'اليوم 10:31 ص', user: 'محمد العتيبي', role: 'عميل', action: 'PAYMENT_SUCCESS', target: 'INV-2024-1042', branch: '—', ip: '95.180...' },
  { time: 'اليوم 09:54 ص', user: 'AI Agent', role: 'تلقائي', action: 'OCR_LICENSE_EXTRACTED', target: 'BK-78452', branch: '—', ip: 'system' },
  { time: 'اليوم 09:42 ص', user: 'سارة العمري', role: 'مدير الفرع', action: 'VEHICLE_STATUS_CHANGED', target: 'V-1234', branch: 'الرياض', ip: '85.13...' },
  { time: 'أمس 22:18', user: 'admin', role: 'مدير النظام', action: 'USER_PERMISSION_GRANTED', target: 'سعد الحربي → CONTRACTS_WRITE', branch: '—', ip: '85.13...' },
  { time: 'أمس 18:45', user: 'AI Agent', role: 'تلقائي', action: 'FRAUD_FLAG_RAISED', target: 'C-3422', branch: '—', ip: 'system' },
  { time: 'أمس 14:12', user: 'موظف نجم', role: 'تكامل', action: 'NAJM_VIOLATION_SYNCED', target: 'V-2024-3422', branch: '—', ip: 'najm-api' }
];

export default function AuditPage() {
  return (
    <AdminShell title="سجل التدقيق — Audit Logs">
      <div className="row gap-8 mb-16 wrap">
        <button className="pill active">اليوم</button>
        <button className="pill">آخر 7 أيام</button>
        <button className="pill">آخر 30 يوم</button>
        <button className="pill">مخصص</button>
      </div>

      <div className="grid grid-4 gap-16 mb-16">
        <div className="card stat"><span className="muted">إجمالي الأحداث</span><b>14,287</b></div>
        <div className="card stat"><span className="muted">حساسة</span><b style={{ color: 'var(--danger)' }}>42</b><span className="badge red">انتباه</span></div>
        <div className="card stat"><span className="muted">إجراءات AI</span><b style={{ color: 'var(--orange-500)' }}>1,847</b></div>
        <div className="card stat"><span className="muted">إخفاقات أمنية</span><b style={{ color: 'var(--success)' }}>0</b></div>
      </div>

      <div className="card">
        <div className="table-toolbar">
          <div className="row gap-8 aic wrap">
            <div className="input-group" style={{ minWidth: 280 }}><input placeholder="🔎 ابحث في السجل..." /></div>
            <button className="btn-outline btn-sm">المستخدم ▾</button>
            <button className="btn-outline btn-sm">الإجراء ▾</button>
            <button className="btn-outline btn-sm">الفرع ▾</button>
          </div>
          <button className="btn-outline btn-sm">📥 تصدير JSON</button>
        </div>
        <table className="table">
          <thead><tr>
            <th>الوقت</th><th>المستخدم</th><th>الدور</th><th>الإجراء</th><th>المستهدف</th><th>الفرع</th><th>IP</th><th>تفاصيل</th>
          </tr></thead>
          <tbody>
            {events.map((e, i) => (
              <tr key={i}>
                <td className="muted body-s">{e.time}</td>
                <td>
                  <div className="row aic gap-8">
                    <div className="avatar xs" style={{ background: e.user === 'AI Agent' || e.user === 'موظف نجم' ? 'linear-gradient(135deg, var(--orange-400), var(--orange-500))' : undefined }}>{e.user[0]}</div>
                    {e.user}
                  </div>
                </td>
                <td><span className="badge gray">{e.role}</span></td>
                <td><code className="kbd">{e.action}</code></td>
                <td className="numeric">{e.target}</td>
                <td>{e.branch}</td>
                <td className="numeric muted body-s">{e.ip}</td>
                <td><button className="row-action">عرض ←</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card p-20 mt-16" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
        <strong style={{ color: 'var(--purple)' }}>🔒 السجلات لا تُحذف</strong>
        <p className="muted body-s" style={{ margin: '4px 0 0' }}>كل الأحداث الحساسة محفوظة لـ 7 سنوات وفق متطلبات الـ ZATCA والامتثال السعودي. التصدير يتطلب صلاحية SUPER_ADMIN.</p>
      </div>
    </AdminShell>
  );
}
