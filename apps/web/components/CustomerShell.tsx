import Link from 'next/link';
import { Logo } from './Brand';

const links: Array<[string, string, string]> = [
  ['/customer', '🏠', 'لوحة الحساب'],
  ['/customer/bookings/current', '🚗', 'الحجز الحالي'],
  ['/customer/bookings/upcoming', '📅', 'الحجوزات القادمة'],
  ['/customer/bookings/history', '📋', 'سجل الحجوزات'],
  ['/customer/contracts/current', '📄', 'العقد الحالي'],
  ['/customer/wallet', '💰', 'المحفظة'],
  ['/customer/invoices', '🧾', 'الفواتير'],
  ['/customer/violations', '⚠️', 'المخالفات'],
  ['/customer/loyalty', '⭐', 'الولاء والنقاط'],
  ['/customer/notifications', '🔔', 'الإشعارات'],
  ['/customer/profile', '👤', 'الملف الشخصي'],
  ['/customer/support', '💬', 'الدعم والمساعدة']
];

export function CustomerShell({ children, title, active }: { children: React.ReactNode; title: string; active: string }) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <Logo />
        <div className="card p-16 mt-12 mb-16" style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.18)' }}>
          <div className="row aic gap-8">
            <div className="avatar">م</div>
            <div>
              <strong style={{ color: 'white' }}>محمد العتيبي</strong>
              <small style={{ display: 'block', opacity: .8 }}>GOLD • 2,450 نقطة</small>
            </div>
          </div>
        </div>
        {links.map(([href, icon, label]) => (
          <Link className={`side-link ${active === href ? 'active' : ''}`} href={href} key={href}>
            <span>{icon}</span>{label}
          </Link>
        ))}
      </aside>
      <section className="admin-main">
        <div className="admin-top">
          <h1 style={{ margin: 0, color: 'var(--purple)' }}>{title}</h1>
          <input className="input search" placeholder="ابحث في حساباتك..." />
          <button className="btn-icon btn-outline">🔔</button>
        </div>
        {children}
      </section>
    </div>
  );
}
