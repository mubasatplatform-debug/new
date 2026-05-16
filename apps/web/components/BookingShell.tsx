import Link from 'next/link';
import { Logo } from './Brand';

const steps = [
  { id: 'type', label: 'النوع', href: '/booking/type' },
  { id: 'location', label: 'الموقع', href: '/booking/location' },
  { id: 'dates', label: 'التاريخ', href: '/booking/dates' },
  { id: 'availability', label: 'السيارة', href: '/booking/availability' },
  { id: 'insurance', label: 'التأمين', href: '/booking/insurance' },
  { id: 'extras', label: 'الإضافات', href: '/booking/extras' },
  { id: 'customer', label: 'العميل', href: '/booking/customer' },
  { id: 'otp', label: 'OTP', href: '/booking/otp' },
  { id: 'documents', label: 'الوثائق', href: '/booking/documents' },
  { id: 'checkout', label: 'الدفع', href: '/booking/checkout' },
  { id: 'confirmation', label: 'التأكيد', href: '/booking/confirmation' }
];

export function BookingShell({ current, children, summary }: { current: string; children: React.ReactNode; summary?: React.ReactNode }) {
  const idx = steps.findIndex(s => s.id === current);
  return (
    <main style={{ minHeight: '100vh', background: '#fbf9ff' }}>
      <header className="header" style={{ padding: '20px 0' }}>
        <div className="container nav" style={{ height: 'auto' }}>
          <Logo />
          <div style={{ flex: 1 }} />
          <Link className="btn-ghost" href="/">إلغاء وعودة للرئيسية</Link>
        </div>
      </header>

      <div className="container" style={{ padding: '24px 0 64px' }}>
        <div className="card mb-24" style={{ overflowX: 'auto' }}>
          <div className="stepper" style={{ minWidth: 'max-content' }}>
            {steps.slice(0, 11).map((s, i) => (
              <div key={s.id} className="row aic gap-8">
                <Link href={s.href} className={`step ${i < idx ? 'done' : i === idx ? 'current' : ''}`}>
                  <span className="num">{i < idx ? '✓' : i + 1}</span>
                  <span className="lbl">{s.label}</span>
                </Link>
                {i < 10 && <span className="bar" />}
              </div>
            ))}
          </div>
        </div>

        {summary ? (
          <div className="split-2">
            <div>{children}</div>
            <aside className="card p-20">
              <h4 className="h4" style={{ margin: '0 0 12px', color: 'var(--purple)' }}>ملخص الحجز</h4>
              {summary}
            </aside>
          </div>
        ) : children}
      </div>
    </main>
  );
}
