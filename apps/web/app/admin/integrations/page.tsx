import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';
import { integrations } from '@/lib/data';

export default function IntegrationsPage() {
  return (
    <BrowserFrame url="admin.dheelplus.sa/integrations">
      <AdminShell title="مركز التكاملات">
        <div className="grid grid-3">{integrations.map(i=><div className="card stat" key={i.provider}><span className={`badge ${i.status==='Needs Setup'?'orange':i.status==='Planned'?'purple':'red'}`}>{i.status}</span><h2>{i.provider}</h2><p className="muted">{i.type}</p><button className="btn-outline">إعداد التكامل</button></div>)}</div>
        <section className="section card stat"><h2>Webhook Logs</h2><table className="table"><tbody><tr><td>payment.created</td><td>200 OK</td><td>منذ 5 دقائق</td></tr><tr><td>whatsapp.message</td><td>Needs Setup</td><td>غير مفعل</td></tr><tr><td>zatca.invoice</td><td>Planned</td><td>بانتظار المزود</td></tr></tbody></table></section>
      </AdminShell>
    </BrowserFrame>
  );
}
