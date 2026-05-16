import Link from 'next/link';
import { AdminShell } from '@/components/AdminShell';

const apps = [
  { icon: '📊', name: 'لوحة الإدارة', sub: 'KPIs والإيرادات', href: '/admin', color: 'var(--purple-500)' },
  { icon: '🚗', name: 'إدارة الأسطول', sub: '12,400 سيارة', href: '/admin/fleet', color: 'var(--orange-400)' },
  { icon: '📍', name: 'الخريطة المباشرة', sub: 'GPS لحظي', href: '/admin/live-map', color: 'var(--success)' },
  { icon: '📋', name: 'العقود', sub: 'تسليم واستلام', href: '/admin/contracts/CN-2024-000512', color: 'var(--purple-500)' },
  { icon: '💼', name: 'CRM', sub: 'صندوق الوارد', href: '/admin/crm', color: 'var(--orange-400)' },
  { icon: '💰', name: 'المالية', sub: 'فواتير وZATCA', href: '/admin/finance', color: 'var(--success)' },
  { icon: '👥', name: 'العملاء', sub: 'Customer 360', href: '/admin/customers', color: 'var(--purple-500)' },
  { icon: '🤖', name: 'AI Command', sub: 'الذكاء الاصطناعي', href: '/admin/ai', color: 'var(--orange-400)' },
  { icon: '🔌', name: 'التكاملات', sub: 'كل المنصات', href: '/admin/integrations', color: 'var(--success)' },
  { icon: '🔧', name: 'الصيانة', sub: 'أوامر الورش', href: '/admin/maintenance', color: 'var(--purple-500)' },
  { icon: '⚠️', name: 'المخالفات', sub: 'نجم', href: '/admin/violations', color: 'var(--orange-400)' },
  { icon: '📜', name: 'سجل التدقيق', sub: 'كل الأحداث', href: '/admin/audit', color: 'var(--success)' }
];

export default function PortalHub() {
  return (
    <AdminShell title="بوابة الأنظمة — Portal Hub">
      <div className="card p-32 mb-24" style={{ background: 'linear-gradient(135deg, var(--purple-800), var(--purple-500))', color: 'white' }}>
        <div className="row aic gap-16 wrap">
          <div className="avatar lg" style={{ width: 80, height: 80, fontSize: 32 }}>س</div>
          <div style={{ flex: 1 }}>
            <span className="caption" style={{ color: 'rgba(255,255,255,.85)' }}>أهلاً</span>
            <h2 className="h2" style={{ marginTop: 4 }}>سعد الحربي</h2>
            <p style={{ opacity: .85, margin: 0 }}>مدير الفرع — الرياض العليا • صلاحيات: ALL</p>
          </div>
          <div className="row gap-8">
            <div style={{ textAlign: 'center', padding: 16, borderRadius: 14, background: 'rgba(255,255,255,.1)' }}>
              <div className="numeric" style={{ fontSize: 24, fontWeight: 900 }}>42</div>
              <span style={{ fontSize: 12, opacity: .8 }}>مهامك اليوم</span>
            </div>
            <div style={{ textAlign: 'center', padding: 16, borderRadius: 14, background: 'rgba(255,255,255,.1)' }}>
              <div className="numeric" style={{ fontSize: 24, fontWeight: 900 }}>18</div>
              <span style={{ fontSize: 12, opacity: .8 }}>تنبيهات</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="h3" style={{ color: 'var(--purple)' }}>الأنظمة المتاحة</h3>
      <div className="grid grid-4 gap-16">
        {apps.map(a => (
          <Link key={a.name} href={a.href} className="card p-24 hover-lift" style={{ display: 'block', borderTopColor: a.color, borderTopWidth: 4 }}>
            <div style={{ fontSize: 38 }}>{a.icon}</div>
            <h4 className="h4" style={{ margin: '8px 0 4px', color: 'var(--purple)' }}>{a.name}</h4>
            <p className="muted body-s" style={{ margin: 0 }}>{a.sub}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
