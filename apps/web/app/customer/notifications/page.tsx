import { CustomerShell } from '@/components/CustomerShell';

const notifs = [
  { time: 'قبل 5 دقائق', icon: '🚗', title: 'مندوب التسليم في الطريق', body: 'محمد القحطاني — وصول متوقع 9:35 ص', tone: 'orange', unread: true, action: 'تتبع الموقع' },
  { time: 'قبل 22 دقيقة', icon: '💳', title: 'تم تأكيد الدفع', body: 'حجز #DP-2024-78452 — 5,669 ر.س', tone: 'green', unread: true, action: 'عرض الفاتورة' },
  { time: 'قبل ساعة', icon: '⭐', title: 'كسبت 567 نقطة ولاء', body: 'اقتربت من مستوى PLATINUM', tone: 'purple', unread: true, action: 'عرض المكافآت' },
  { time: 'أمس', icon: '⚠️', title: 'تنبيه مخالفة', body: 'مخالفة سرعة بقيمة 150 ر.س — 11 مايو', tone: 'red', action: 'دفع المخالفة' },
  { time: 'قبل يومين', icon: '🎁', title: 'كوبون DHEEL15 متاح', body: 'خصم 15% على التأجير طويل الأمد لفترة محدودة', tone: 'orange', action: 'استخدم الآن' },
  { time: 'قبل 3 أيام', icon: '📅', title: 'تذكير: إنهاء العقد', body: 'العقد #CN-510 ينتهي بعد 3 أيام', tone: 'purple', action: 'تمديد' },
  { time: '08 مايو', icon: '🪪', title: 'تنبيه صلاحية الرخصة', body: 'رخصتك تنتهي بعد 60 يوم — جدّدها من أبشر', tone: 'orange', action: 'فهمت' }
];

export default function NotificationsPage() {
  return (
    <CustomerShell title="الإشعارات" active="/customer/notifications">
      <div className="row gap-8 between aic mb-16 wrap">
        <div className="row gap-8">
          <button className="pill active">الكل (7)</button>
          <button className="pill">غير مقروءة (3)</button>
          <button className="pill">حجوزات</button>
          <button className="pill">دفعات</button>
          <button className="pill">عروض</button>
        </div>
        <button className="btn-outline btn-sm">✓ تعليم الكل كمقروء</button>
      </div>

      <div className="card">
        {notifs.map((n, i) => (
          <div key={i} className="row gap-12 p-20" style={{ borderBottom: i < notifs.length - 1 ? '1px solid var(--neutral-200)' : 0, background: n.unread ? 'var(--purple-50)' : 'transparent' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: `var(--${n.tone === 'orange' ? 'orange-50' : n.tone === 'green' ? 'orange-50' : n.tone === 'purple' ? 'purple-50' : 'orange-50'})`, display: 'grid', placeItems: 'center', fontSize: 22, flexShrink: 0 }}>{n.icon}</div>
            <div style={{ flex: 1 }}>
              <div className="row between aic">
                <strong style={{ color: 'var(--purple)' }}>{n.title}</strong>
                <span className="caption">{n.time}</span>
              </div>
              <p className="muted body-s" style={{ margin: '4px 0 0' }}>{n.body}</p>
              <div className="row gap-8 mt-8 aic">
                <button className="btn-outline btn-sm">{n.action}</button>
                {n.unread && <span className="badge purple">جديد</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-24 mt-16">
        <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>تفضيلات الإشعارات</h3>
        <div className="grid grid-2 gap-12">
          {[
            ['📱 إشعارات التطبيق', true],
            ['💬 واتساب', true],
            ['📧 البريد الإلكتروني', true],
            ['📲 SMS', false],
            ['📞 اتصال هاتفي', false],
            ['🎁 العروض والكوبونات', true]
          ].map(([label, on]) => (
            <div key={label as string} className="row aic between p-12 surface-2">
              <span>{label}</span>
              <span className={`switch ${on ? 'on' : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </CustomerShell>
  );
}
