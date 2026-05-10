import Link from 'next/link';
import { PublicShell } from '@/components/PublicShell';

export default function ErrorForbidden() {
  return (
    <PublicShell url="dheelplus.sa/403">
      <div style={{ minHeight: 480, display: 'grid', placeItems: 'center', padding: 32 }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div className="numeric" style={{ fontSize: 140, fontWeight: 900, color: 'var(--danger)', lineHeight: 1, opacity: .9 }}>403</div>
          <span className="status-pill" style={{ background: '#FEEEEE', color: 'var(--danger)' }}>غير مسموح</span>
          <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>ليس لديك صلاحية الوصول</h1>
          <p className="body-l muted">هذه الصفحة تحتاج صلاحية إضافية. تواصل مع مدير النظام لطلب الصلاحية.</p>
          <div className="row gap-8 jcc mt-16">
            <Link href="/customer" className="btn-orange">🏠 لوحة حسابي</Link>
            <Link href="/contact" className="btn-outline">طلب صلاحية</Link>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
