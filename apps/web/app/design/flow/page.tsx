import Link from 'next/link';
import { Logo } from '@/components/Brand';

const Journey = ({ title, color, steps }: { title: string; color: string; steps: Array<{ label: string; href: string; sub: string }> }) => (
  <section className="section">
    <h2 className="h2" style={{ color: 'var(--purple)' }}>{title}</h2>
    <div className="card p-24" style={{ overflowX: 'auto' }}>
      <div className="row gap-12 aic" style={{ minWidth: 'max-content', paddingBlock: 12 }}>
        {steps.map((s, i) => (
          <div key={s.href} className="row gap-12 aic">
            <Link href={s.href} className="hover-lift" style={{ minWidth: 200, padding: 16, background: 'white', border: `2px solid ${color}`, borderRadius: 16, color: 'var(--purple)', fontWeight: 800, position: 'relative', display: 'block' }}>
              <span className="caption" style={{ color }}>STEP {i + 1}</span>
              <div style={{ marginTop: 4 }}>{s.label}</div>
              <small style={{ display: 'block', color: 'var(--muted)', fontWeight: 600, marginTop: 4 }}>{s.sub}</small>
            </Link>
            {i < steps.length - 1 && <span style={{ color, fontSize: 24, fontWeight: 900 }}>←</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function UserFlowPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fbf9ff' }}>
      <header className="header" style={{ padding: '20px 0' }}>
        <div className="container nav" style={{ height: 'auto' }}>
          <Logo />
          <div className="crumbs" style={{ flex: 1, marginInlineStart: 16 }}>
            <Link href="/design">المعرض</Link><span className="sep">/</span>
            <span className="active">User Journeys</span>
          </div>
          <Link className="btn-ghost" href="/admin/screen-registry">سجل الشاشات ←</Link>
        </div>
      </header>

      <div className="container" style={{ padding: '32px 0 64px' }}>
        <div className="mb-24">
          <span className="caption">Phase 12 — Prototype Wiring</span>
          <h1 className="h1" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>رحلات المستخدم</h1>
          <p className="body-l muted" style={{ margin: 0 }}>اضغط أي خطوة للانتقال إلى الشاشة الفعلية. يحاكي ربط Prototype في Figma.</p>
        </div>

        <Journey
          title="🟣 رحلة العميل — من الإعلان إلى التأكيد"
          color="var(--purple-500)"
          steps={[
            { label: 'الصفحة الرئيسية', href: '/', sub: 'Hero + بحث' },
            { label: 'استعراض الأسطول', href: '/fleet', sub: 'فلاتر + شبكة' },
            { label: 'تفاصيل السيارة', href: '/cars/camry-2024', sub: 'مواصفات + سعر' },
            { label: 'نوع التأجير', href: '/booking/type', sub: 'يومي/شهري/ليموزين' },
            { label: 'الموقع والتاريخ', href: '/booking/dates', sub: 'فرع + وقت' },
            { label: 'التأمين', href: '/booking/insurance', sub: 'مقارنة باقات' },
            { label: 'بيانات العميل + OTP', href: '/booking/otp', sub: 'تحقق' },
            { label: 'وثائق OCR', href: '/booking/documents', sub: 'هوية + رخصة' },
            { label: 'الدفع', href: '/booking/checkout', sub: 'Mada/Apple Pay/STC' },
            { label: 'تأكيد الحجز', href: '/booking/confirmation', sub: 'QR + WhatsApp' },
            { label: 'لوحة العميل', href: '/customer', sub: 'إدارة الحجوزات' }
          ]}
        />

        <Journey
          title="🟠 رحلة الإدارة — العقد والتسليم"
          color="var(--orange-500)"
          steps={[
            { label: 'Executive Dashboard', href: '/admin', sub: 'KPIs' },
            { label: 'إدارة الحجوزات', href: '/admin/bookings', sub: 'جدول' },
            { label: 'تفاصيل الحجز', href: '/admin/bookings/DP-2024-0789', sub: 'العميل + السيارة' },
            { label: 'ملف العقد', href: '/admin/contracts/CN-2024-000512', sub: 'PDF + توقيع' },
            { label: 'تسليم السيارة', href: '/admin/contracts/handover', sub: 'فحص + صور' },
            { label: 'استلام السيارة', href: '/admin/contracts/return', sub: 'مقارنة الأضرار' },
            { label: 'الفاتورة + ZATCA', href: '/admin/invoices', sub: 'إصدار QR' },
            { label: 'CRM Inbox', href: '/admin/crm', sub: 'متابعة العميل' }
          ]}
        />

        <Journey
          title="📱 رحلة الموبايل"
          color="var(--purple-700)"
          steps={[
            { label: 'Splash + ترحيب', href: '/mobile', sub: 'افتتاحية' },
            { label: 'بحث عن سيارة', href: '/mobile/search', sub: 'GPS + تاريخ' },
            { label: 'إكمال الحجز', href: '/mobile/booking', sub: 'دفع' },
            { label: 'حسابي', href: '/mobile/account', sub: 'حجوزاتي + النقاط' },
            { label: 'تتبع التسليم', href: '/customer/live-tracking', sub: 'مندوب قادم' }
          ]}
        />

        <Journey
          title="🟢 رحلة الذكاء الاصطناعي + التكاملات"
          color="var(--success)"
          steps={[
            { label: 'AI Command', href: '/admin/ai', sub: 'Tool registry' },
            { label: 'OCR للهوية', href: '/booking/documents', sub: 'تحقق آلي' },
            { label: 'Vision Damage', href: '/admin/contracts/return', sub: 'مقارنة قبل/بعد' },
            { label: 'Najm', href: '/admin/violations', sub: 'مزامنة المخالفات' },
            { label: 'ZATCA', href: '/admin/invoices', sub: 'تقديم الفاتورة' },
            { label: 'Integrations Hub', href: '/admin/integrations', sub: 'كل التكاملات' }
          ]}
        />

        <section className="card p-24 mt-32" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
          <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>كيف تنفّذ Prototype في Figma لاحقاً</h3>
          <ol className="muted" style={{ lineHeight: 1.9 }}>
            <li>افتح ملف Figma وأنشئ Pages بنفس البنية (Cover, Tokens, Components, Public, Booking, Customer, Admin, Mobile, States).</li>
            <li>استخدم لقطات Screen تُلتقَط من هذا الويب آب وأَدرِجها كصور مرجعية.</li>
            <li>اربط الـ Frames بـ Smart Animate حسب الرحلات الأربع أعلاه.</li>
            <li>كل لون/خط هنا متطابق مع Variables التي يجب إنشاؤها في Figma.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
