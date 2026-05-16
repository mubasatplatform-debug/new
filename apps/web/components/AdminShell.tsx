import Link from 'next/link';
import { Logo } from './Brand';

const links = [
  ['/admin', 'لوحة التحكم'],
  ['/admin/fleet', 'إدارة الأسطول'],
  ['/admin/live-map', 'خريطة الأسطول'],
  ['/admin/contracts/CN-2024-000512', 'العقود والتسليم'],
  ['/admin/crm', 'CRM / صندوق الوارد'],
  ['/admin/ai', 'AI Command Center'],
  ['/admin/integrations', 'التكاملات'],
  ['/admin/settings', 'الإعدادات والصلاحيات'],
  ['/admin/page-map', 'ترتيب الصفحات'],
  ['/admin/screen-registry', 'سجل الواجهات']
];

export function AdminShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <Logo />
        {links.map(([href, label]) => <Link className="side-link" href={href} key={href}>{label}</Link>)}
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }} className="card stat"><span className="muted">الدعم الفني</span><b style={{fontSize:18}}>متاح 24/7</b><button className="btn-orange">تواصل معنا</button></div>
      </aside>
      <section className="admin-main">
        <div className="admin-top"><h1 style={{ margin: 0, color: 'var(--purple)' }}>{title}</h1><input className="input search" placeholder="ابحث عن العملاء، الحجوزات، المركبات..."/><button className="btn-outline">العربية</button></div>
        {children}
      </section>
    </div>
  );
}
