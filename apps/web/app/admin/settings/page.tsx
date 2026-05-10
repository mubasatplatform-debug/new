import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';

export default function SettingsPage() {
  const roles = ['Owner','General Manager','Branch Manager','Receptionist','Maintenance Staff','Accountant','Support Agent','Auditor','AI Operator'];
  return (
    <BrowserFrame url="admin.dheelplus.sa/settings">
      <AdminShell title="الإعدادات والصلاحيات">
        <div className="grid grid-3">{roles.map(r=><div className="card stat" key={r}><h3>{r}</h3><p className="muted">صلاحيات حسب الدور والفرع.</p><button className="btn-outline">تعديل الصلاحيات</button></div>)}</div>
        <section className="section grid grid-2"><div className="card stat"><h2>قوالب الرسائل</h2>{['تأكيد الحجز','رابط الدفع','تذكير الاستحقاق','تنبيه مخالفة'].map(x=><div className="field" key={x}>{x}</div>)}</div><div className="card stat"><h2>Audit Logs</h2>{['vehicle.updated','booking.confirmed','payment.created','ai.tool_call.confirmed'].map(x=><div className="field" key={x}>{x}</div>)}</div></section>
      </AdminShell>
    </BrowserFrame>
  );
}
