import Link from 'next/link';
import { Logo } from '@/components/Brand';

const colorScale = (name: string, vars: Array<[string, string]>) => (
  <div className="card p-20" key={name}>
    <h4 className="h4" style={{ margin: '0 0 12px', color: 'var(--purple)' }}>{name}</h4>
    <div className="stack gap-8">
      {vars.map(([label, hex]) => (
        <div className="swatch" key={label}>
          <div className="dot" style={{ background: hex }} />
          <div style={{ flex: 1 }}>
            <strong>{label}</strong>
            <code>{hex}</code>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function DesignSystemPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fbf9ff' }}>
      <header className="header" style={{ padding: '20px 0' }}>
        <div className="container nav" style={{ height: 'auto' }}>
          <Logo />
          <div className="crumbs" style={{ flex: 1, marginInlineStart: 16 }}>
            <Link href="/design">المعرض</Link>
            <span className="sep">/</span>
            <span className="active">Design Tokens</span>
          </div>
          <Link className="btn-ghost" href="/design/components">المكوّنات ←</Link>
        </div>
      </header>

      <div className="container" style={{ padding: '32px 0 64px' }}>
        <div className="mb-24">
          <span className="caption">Phase 02 — Foundation</span>
          <h1 className="h1" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>Design Tokens</h1>
          <p className="body-l muted" style={{ margin: 0 }}>الألوان، الخطوط، المسافات، الظلال، الإطار الشبكي. كل قيمة هنا مرتبطة بـ CSS variable في <code>globals.css</code>.</p>
        </div>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)', marginBottom: 16 }}>Colors</h2>
          <div className="grid grid-3 gap-16">
            {colorScale('Purple — Primary', [
              ['Purple 50', '#F4ECFB'],
              ['Purple 100', '#E5D2F4'],
              ['Purple 200', '#CFADE9'],
              ['Purple 300', '#A578CF'],
              ['Purple 400', '#7E4EB6'],
              ['Purple 500 / brand', '#5B2C91'],
              ['Purple 600', '#4A2278'],
              ['Purple 700', '#38185D'],
              ['Purple 800', '#251035']
            ])}
            {colorScale('Orange — Accent / CTA', [
              ['Orange 50', '#FFF5E0'],
              ['Orange 100', '#FEE3B0'],
              ['Orange 200', '#FCC971'],
              ['Orange 300', '#F9B84A'],
              ['Orange 400 / brand', '#F5A623'],
              ['Orange 500 / deep', '#E77F00'],
              ['Orange 600', '#B25E00'],
              ['Cream', '#FFF3DF'],
              ['Soft Blue', '#B9D2EA']
            ])}
            {colorScale('Neutrals & Semantic', [
              ['Neutral 0', '#FFFFFF'],
              ['Neutral 50', '#FBF9FF'],
              ['Neutral 100', '#F5F0FB'],
              ['Neutral 200', '#EFE7F7'],
              ['Neutral 300', '#E9D7F2'],
              ['Neutral 600 / muted', '#6B6172'],
              ['Neutral 900 / ink', '#16111F'],
              ['Success', '#18A957'],
              ['Warning', '#F2B705'],
              ['Danger', '#D92D20']
            ])}
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>Typography</h2>
          <p className="muted">IBM Plex Sans Arabic + Tajawal — دعم RTL كامل، أرقام جدولية للأسعار.</p>
          <div className="card p-32 stack gap-16">
            <div className="h-display">رحلتك تبدأ هنا</div>
            <div className="h1">Headline 1 — تأجير ذكي وسلس</div>
            <div className="h2">Headline 2 — أسطول حديث وموثوق</div>
            <div className="h3">Headline 3 — تأمين شامل وخدمة 24/7</div>
            <div className="h4">Headline 4 — حجز فوري عبر التطبيق</div>
            <div className="body-l">Body Large — هذه فقرة طويلة لاختبار الانسيابية والقابلية للقراءة في النص العربي والإنجليزي.</div>
            <div className="body-m">Body Medium — تأجير قصير الأمد، طويل الأمد، ليموزين، شركات. كل خيار مصمّم لتجربة مختلفة.</div>
            <div className="body-s">Body Small — للبيانات الثانوية والوصف داخل البطاقات.</div>
            <div className="caption">Caption — تستخدم للإشارات والـ helper text.</div>
            <div className="numeric" style={{ fontSize: 28, color: 'var(--purple)', fontWeight: 900 }}>
              1,899 ر.س <span className="caption">/ شهرياً</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>Spacing & Radius</h2>
          <div className="grid grid-2 gap-16">
            <div className="card p-20">
              <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>Spacing scale</h4>
              <div className="stack gap-8">
                {[4, 8, 12, 16, 20, 24, 32, 48, 64].map(s => (
                  <div key={s} className="row aic gap-12">
                    <div style={{ width: s, height: 14, background: 'var(--purple-300)', borderRadius: 4 }} />
                    <code className="caption">{s}px</code>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-20">
              <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>Radius scale</h4>
              <div className="row gap-12 wrap">
                {[8, 12, 16, 24, 30, 999].map(r => (
                  <div key={r} className="stack gap-4 center" style={{ width: 84 }}>
                    <div style={{ width: 64, height: 64, background: 'var(--purple-100)', borderRadius: r, border: '2px solid var(--purple-500)' }} />
                    <code className="caption">{r === 999 ? 'pill' : `${r}px`}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>Shadows / Elevation</h2>
          <div className="grid grid-4 gap-16">
            {[
              ['shadow-sm', 'var(--shadow-sm)', 'Hover, subtle lift'],
              ['shadow-md', 'var(--shadow-md)', 'Cards, default'],
              ['shadow-lg', 'var(--shadow-lg)', 'Browser frame, dialogs'],
              ['shadow-xl', 'var(--shadow-xl)', 'Modals, hero panels']
            ].map(([name, val, role]) => (
              <div className="p-20" key={name} style={{ background: 'white', borderRadius: 18, boxShadow: val }}>
                <strong style={{ color: 'var(--purple)' }}>{name}</strong>
                <p className="caption" style={{ margin: '4px 0 0' }}>{role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>Status Lexicon</h2>
          <p className="muted">حالات موحدة عبر الكيانات — تطابق Enums في Prisma schema.</p>
          <div className="card p-20 stack gap-12">
            <div>
              <span className="preview-label">Vehicle Status</span>
              <div className="row gap-8 wrap">
                <span className="badge green">متاحة • AVAILABLE</span>
                <span className="badge purple">محجوزة • RESERVED</span>
                <span className="badge orange">مؤجَّرة • RENTED</span>
                <span className="badge gray">صيانة • MAINTENANCE</span>
                <span className="badge blue">تنظيف • CLEANING</span>
                <span className="badge red">محظورة • BLOCKED</span>
                <span className="badge red">متأخّرة • OVERDUE</span>
              </div>
            </div>
            <div>
              <span className="preview-label">Booking / Contract</span>
              <div className="row gap-8 wrap">
                <span className="badge gray">DRAFT</span>
                <span className="badge orange">PENDING</span>
                <span className="badge purple">CONFIRMED</span>
                <span className="badge green">ACTIVE</span>
                <span className="badge red">OVERDUE</span>
                <span className="badge gray">CLOSED</span>
                <span className="badge red">CANCELLED</span>
              </div>
            </div>
            <div>
              <span className="preview-label">Payment / Deposit</span>
              <div className="row gap-8 wrap">
                <span className="badge orange">PENDING</span>
                <span className="badge green">PAID</span>
                <span className="badge red">FAILED</span>
                <span className="badge purple">HELD</span>
                <span className="badge green">RELEASED</span>
                <span className="badge orange">PARTIAL</span>
                <span className="badge blue">REFUNDED</span>
              </div>
            </div>
            <div>
              <span className="preview-label">Loyalty</span>
              <div className="row gap-8 wrap">
                <span className="badge gray">SILVER</span>
                <span className="badge orange">GOLD</span>
                <span className="badge purple">PLATINUM</span>
                <span className="badge green">VIP</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>Grid System</h2>
          <div className="grid grid-2 gap-16">
            <div className="card p-20">
              <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>Web — 12 column / 1180 max</h4>
              <div className="grid grid-4 gap-8">
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ background: 'var(--purple-100)', height: 80, borderRadius: 8, display: 'grid', placeItems: 'center', color: 'var(--purple)', fontWeight: 800 }}>{i}</div>
                ))}
              </div>
            </div>
            <div className="card p-20">
              <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>Mobile — 4 column / 360 frame</h4>
              <div className="grid grid-2 gap-8">
                {[1,2].map(i => (
                  <div key={i} style={{ background: 'var(--orange-100)', height: 80, borderRadius: 8, display: 'grid', placeItems: 'center', color: 'var(--orange-600)', fontWeight: 800 }}>{i}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
