import Link from 'next/link';
import { Logo } from '@/components/Brand';

const sections: Array<{ title: string; sub: string; items: Array<[string, string, string]> }> = [
  {
    title: 'الأساس — Foundation',
    sub: 'الهوية، الـ Tokens، الخطوط، النظام الشبكي',
    items: [
      ['/design/system', 'Design Tokens', 'Colors • Type • Spacing • Shadow'],
      ['/design/components', 'Components Library', '40+ مكوّن قابل لإعادة الاستخدام'],
      ['/design/flow', 'User Journeys', 'رحلات العميل والإدارة بصرياً']
    ]
  },
  {
    title: 'الموقع العام — Public Site',
    sub: 'تجربة التصفّح والتسويق',
    items: [
      ['/', 'Landing', 'الصفحة الرئيسية'],
      ['/fleet', 'Fleet', 'أسطول السيارات'],
      ['/cars/camry-2024', 'Car Details', 'تفاصيل السيارة'],
      ['/compare', 'Compare', 'مقارنة'],
      ['/pricing', 'Pricing', 'الباقات'],
      ['/limousine', 'Limousine', 'ليموزين'],
      ['/corporate', 'Corporate', 'تأجير الشركات'],
      ['/branches', 'Branches', 'الفروع'],
      ['/maps', 'Maps', 'خرائط الخدمة'],
      ['/offers', 'Offers', 'عروض وكوبونات'],
      ['/partners', 'Partners', 'شركاء التأمين'],
      ['/about', 'About', 'من نحن'],
      ['/faq', 'FAQ', 'الأسئلة الشائعة'],
      ['/help', 'Help', 'مركز المساعدة'],
      ['/contact', 'Contact', 'تواصل معنا'],
      ['/terms', 'Terms', 'الشروط'],
      ['/privacy', 'Privacy', 'الخصوصية']
    ]
  },
  {
    title: 'مسار الحجز — Booking Flow',
    sub: '14 شاشة من الاختيار إلى التأكيد',
    items: [
      ['/booking/type', '1. نوع التأجير', 'Step 1 / 14'],
      ['/booking/location', '2. الموقع', 'Step 2 / 14'],
      ['/booking/dates', '3. التاريخ والوقت', 'Step 3 / 14'],
      ['/booking/availability', '4. السيارات المتاحة', 'Step 4 / 14'],
      ['/booking/insurance', '5. التأمين', 'Step 5 / 14'],
      ['/booking/extras', '6. الخدمات الإضافية', 'Step 6 / 14'],
      ['/booking/customer', '7. بيانات العميل', 'Step 7 / 14'],
      ['/booking/otp', '8. التحقق OTP', 'Step 8 / 14'],
      ['/booking/documents', '9. رفع الوثائق OCR', 'Step 9 / 14'],
      ['/booking/checkout', '10. الدفع', 'Step 10 / 14'],
      ['/booking/confirmation', '11. تأكيد الحجز', 'Step 11 / 14'],
      ['/booking/payment-failed', '12. فشل الدفع', 'حالة الفشل'],
      ['/booking/conflict', '13. بدائل', 'حالة عدم التوفّر'],
      ['/booking/track', '14. تتبع الحجز', 'بعد التأكيد']
    ]
  },
  {
    title: 'حساب العميل — Customer Portal',
    sub: '19 شاشة لإدارة الحجوزات والعقود',
    items: [
      ['/customer', 'Dashboard', 'لوحة العميل'],
      ['/customer/bookings/current', 'الحجز الحالي', 'Active'],
      ['/customer/bookings/upcoming', 'الحجوزات القادمة', 'Upcoming'],
      ['/customer/bookings/history', 'سجل الحجوزات', 'History'],
      ['/customer/contracts/current', 'العقد الحالي', 'Contract'],
      ['/customer/contracts/extend', 'طلب تمديد', 'Extension'],
      ['/customer/wallet', 'المحفظة', 'Wallet'],
      ['/customer/deposits', 'الودائع', 'Deposits'],
      ['/customer/invoices', 'الفواتير', 'ZATCA QR'],
      ['/customer/violations', 'المخالفات', 'Najm'],
      ['/customer/claims', 'البلاغات', 'Claims'],
      ['/customer/loyalty', 'الولاء', 'Tiers + Points'],
      ['/customer/referrals', 'الإحالات', 'Referral'],
      ['/customer/wishlist', 'المفضّلة', 'Wishlist'],
      ['/customer/notifications', 'الإشعارات', 'Notifications'],
      ['/customer/profile', 'الملف الشخصي', 'Profile + Nafath'],
      ['/customer/support', 'الدعم', 'Live Chat'],
      ['/customer/live-tracking', 'تتبع التسليم', 'Live Track'],
      ['/customer/reviews', 'تقييماتي', 'Reviews']
    ]
  },
  {
    title: 'لوحة الإدارة — Admin Console',
    sub: '~30 شاشة لإدارة الأسطول والعمليات',
    items: [
      ['/admin', 'Executive Dashboard', 'KPIs الأداء'],
      ['/admin/portal', 'Portal Hub', 'بوابة الأنظمة'],
      ['/admin/branch', 'Branch Dashboard', 'لوحة الفرع'],
      ['/admin/fleet', 'Fleet Management', 'كانبان الأسطول'],
      ['/admin/live-map', 'Live Map', 'GPS مباشر'],
      ['/admin/vehicles', 'Vehicles Table', 'جدول السيارات'],
      ['/admin/vehicles/new', 'Add Vehicle', 'إضافة سيارة'],
      ['/admin/vehicles/camry-2024', 'Vehicle Profile', 'ملف السيارة'],
      ['/admin/bookings', 'Bookings Mgmt', 'إدارة الحجوزات'],
      ['/admin/bookings/DP-2024-0789', 'Booking Details', 'تفاصيل الحجز'],
      ['/admin/contracts/CN-2024-000512', 'Contract Profile', 'ملف العقد'],
      ['/admin/contracts/handover', 'Handover', 'تسليم السيارة'],
      ['/admin/contracts/return', 'Return', 'استلام السيارة'],
      ['/admin/finance', 'Finance', 'المالية'],
      ['/admin/invoices', 'Invoices/ZATCA', 'الفواتير'],
      ['/admin/collections', 'Collections', 'التحصيل'],
      ['/admin/crm', 'CRM Inbox', 'صندوق الوارد'],
      ['/admin/customers', 'Customer 360', 'العملاء'],
      ['/admin/maintenance', 'Maintenance', 'الصيانة'],
      ['/admin/violations', 'Violations', 'المخالفات'],
      ['/admin/accidents', 'Accidents', 'الحوادث'],
      ['/admin/corporate', 'B2B', 'الشركات'],
      ['/admin/promotions', 'Promotions', 'العروض'],
      ['/admin/loyalty', 'Loyalty Admin', 'إدارة الولاء'],
      ['/admin/ai', 'AI Command', 'الذكاء الاصطناعي'],
      ['/admin/integrations', 'Integrations', 'التكاملات'],
      ['/admin/settings', 'Settings', 'الإعدادات'],
      ['/admin/audit', 'Audit Logs', 'سجل التدقيق'],
      ['/admin/page-map', 'Page Map', 'ترتيب الصفحات'],
      ['/admin/screen-registry', 'Screen Registry', '396 شاشة']
    ]
  },
  {
    title: 'الموبايل — Mobile App',
    sub: 'تجربة التطبيق داخل إطار جوال',
    items: [
      ['/mobile', 'Splash + Home', 'افتتاحية + الرئيسية'],
      ['/mobile/search', 'Search', 'بحث'],
      ['/mobile/booking', 'Booking', 'حجز'],
      ['/mobile/account', 'Account', 'الحساب']
    ]
  },
  {
    title: 'الحالات الحرجة — States',
    sub: 'الفراغ، الأخطاء، التحميل، عدم الاتصال',
    items: [
      ['/error/404', '404 Not Found', 'الصفحة غير موجودة'],
      ['/error/500', '500 Server Error', 'خطأ في الخادم'],
      ['/error/maintenance', 'Maintenance', 'صيانة'],
      ['/error/offline', 'Offline', 'بدون إنترنت'],
      ['/error/forbidden', 'Forbidden', 'غير مسموح']
    ]
  }
];

export default function DesignIndex() {
  return (
    <main style={{ minHeight: '100vh', background: '#fbf9ff' }}>
      <header className="header" style={{ padding: '20px 0' }}>
        <div className="container nav" style={{ height: 'auto' }}>
          <Logo />
          <div style={{ flex: 1 }} />
          <Link className="btn-ghost" href="/">العودة للموقع</Link>
        </div>
      </header>

      <div className="container" style={{ padding: '32px 0 64px' }}>
        <section className="cover-hero stack gap-32">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="status-pill" style={{ background:'rgba(245,166,35,.18)', color:'var(--orange-300)' }}>
              ● MASTER PROTOTYPE
            </span>
            <h1 className="h-display" style={{ marginTop: 16, marginBottom: 12 }}>
              ديل <span style={{ color: 'var(--orange-300)' }}>Plus</span> Rent OS
            </h1>
            <p className="body-l" style={{ maxWidth: 720, opacity: .9, marginTop: 0 }}>
              نظام تشغيل متكامل لتأجير السيارات والليموزين في السعودية. تصميم تنفيذي بهوية بنفسجية برتقالية، عربي-أولاً RTL، يغطّي 396 شاشة عبر 13 مجالاً تشغيلياً.
            </p>
          </div>

          <div className="grid grid-4 gap-16" style={{ position: 'relative', zIndex: 1 }}>
            {[
              ['396', 'شاشة موثّقة'],
              ['13', 'مجال تشغيلي'],
              ['12', 'وحدة معمارية'],
              ['2', 'لغة (AR/EN)']
            ].map(([num, label]) => (
              <div className="cover-stat" key={label}>
                <b>{num}</b><span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="row aic between mb-16 wrap gap-12">
            <div>
              <span className="caption">الهوية البصرية</span>
              <h2 className="h2" style={{ margin: '4px 0 0', color: 'var(--purple)' }}>نظام الألوان والمكوّنات</h2>
            </div>
            <Link href="/design/system" className="btn">استعرض النظام كاملاً ←</Link>
          </div>
          <div className="grid grid-4 gap-16">
            {[
              ['#5B2C91', 'Purple 500', 'Primary brand'],
              ['#F5A623', 'Orange 400', 'Accent / CTA'],
              ['#321046', 'Purple 800', 'Deep / Headers'],
              ['#FFF3DF', 'Cream', 'Soft surface']
            ].map(([hex, name, role]) => (
              <div className="card p-20" key={name}>
                <div style={{ height: 80, background: hex, borderRadius: 14, marginBottom: 12 }} />
                <h4 className="h4" style={{ margin: 0, color: 'var(--purple)' }}>{name}</h4>
                <small className="caption">{role}</small>
                <div className="kbd" style={{ marginTop: 8 }}>{hex}</div>
              </div>
            ))}
          </div>
        </section>

        {sections.map(sec => (
          <section className="section" key={sec.title}>
            <div className="mb-16">
              <span className="caption">{sec.sub}</span>
              <h2 className="h2" style={{ margin: '4px 0 0', color: 'var(--purple)' }}>{sec.title}</h2>
            </div>
            <div className="dx-grid">
              {sec.items.map(([href, title, sub]) => (
                <Link href={href} key={href}>
                  {title}
                  <small>{sub}</small>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="card p-32 mt-32" style={{ background: 'linear-gradient(135deg, var(--purple-800), var(--purple-500))', color: 'white' }}>
          <div className="row aic between wrap gap-16">
            <div>
              <span className="status-pill" style={{ background:'rgba(245,166,35,.2)', color:'var(--orange-300)' }}>READY FOR PRODUCTION</span>
              <h2 className="h2" style={{ marginTop: 12, marginBottom: 8 }}>كل شاشة قابلة للنشر مباشرةً</h2>
              <p className="body-m" style={{ opacity: .85, margin: 0 }}>
                المكوّنات في <code>components/</code>، التوكنز في <code>globals.css</code>، الصفحات في <code>app/</code>، والبيانات في <code>lib/data.ts</code>.
              </p>
            </div>
            <Link href="/admin/screen-registry" className="btn-orange btn-lg">سجل الـ 396 شاشة ←</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
