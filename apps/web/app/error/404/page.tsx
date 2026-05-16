import Link from 'next/link';
import { PublicShell } from '@/components/PublicShell';

export default function Error404() {
  return (
    <PublicShell url="dheelplus.sa/404">
      <div style={{ minHeight: 480, display: 'grid', placeItems: 'center', padding: 32 }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div className="numeric" style={{ fontSize: 140, fontWeight: 900, color: 'var(--purple-500)', lineHeight: 1, opacity: .9 }}>404</div>
          <span className="status-pill" style={{ background: '#FFF7DD', color: '#6F4D00' }}>الصفحة غير موجودة</span>
          <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>عذراً، ضاع المسار</h1>
          <p className="body-l muted">الصفحة التي تبحث عنها قد تكون منقولة أو محذوفة، أو الرابط غير صحيح.</p>
          <div className="row gap-8 jcc mt-16">
            <Link href="/" className="btn-orange">🏠 العودة للرئيسية</Link>
            <Link href="/help" className="btn-outline">💬 تواصل مع الدعم</Link>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
