import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';
import { screenRegistry } from '@/lib/screen-registry';
import Link from 'next/link';

export default function ScreenRegistryPage() {
  const groups = Array.from(new Set(screenRegistry.map(s => s.group)));
  return (
    <BrowserFrame url="admin.dheelplus.sa/screen-registry">
      <AdminShell title={`سجل الواجهات الكامل (${screenRegistry.length})`}>
        {groups.map(group => (
          <section className="card stat" style={{marginBottom:18}} key={group}>
            <h2>{group}</h2>
            <div className="grid grid-4">{screenRegistry.filter(s=>s.group===group).map(screen=><Link className="field" key={screen.id} href={screen.route}><b>{screen.id}</b><br/>{screen.title}<br/><span className={`badge ${screen.status==='core'?'green':'purple'}`}>{screen.status}</span></Link>)}</div>
          </section>
        ))}
      </AdminShell>
    </BrowserFrame>
  );
}
