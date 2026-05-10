import { BrowserFrame } from './Brand';
import { Header, Footer } from './Header';

export function PublicShell({ children, url = 'dheelplus.sa' }: { children: React.ReactNode; url?: string }) {
  return (
    <BrowserFrame url={url}>
      <Header />
      {children}
      <Footer />
    </BrowserFrame>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section style={{
      padding: '64px 0 40px',
      background: 'radial-gradient(circle at 20% 20%, rgba(245,166,35,.18), transparent 30%), linear-gradient(135deg, var(--purple-800), var(--purple-500))',
      color: 'white'
    }}>
      <div className="container">
        {eyebrow && <span className="status-pill" style={{ background: 'rgba(245,166,35,.2)', color: 'var(--orange-300)' }}>{eyebrow}</span>}
        <h1 className="h1" style={{ marginTop: 12, marginBottom: 8 }}>{title}</h1>
        {sub && <p className="body-l" style={{ opacity: .85, margin: 0, maxWidth: 760 }}>{sub}</p>}
      </div>
    </section>
  );
}
