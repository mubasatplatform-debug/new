import Link from 'next/link';
import { PublicShell } from '@/components/PublicShell';

export default function Error500() {
  return (
    <PublicShell url="dheelplus.sa/500">
      <div style={{ minHeight: 480, display: 'grid', placeItems: 'center', padding: 32 }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{ fontSize: 96 }}>⚠️</div>
          <span className="status-pill" style={{ background: '#FEEEEE', color: 'var(--danger)' }}>خطأ في الخادم</span>
          <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>حدث خطأ ما من جانبنا</h1>
          <p className="body-l muted">فريقنا التقني تم إشعاره وسنُصلح المشكلة بأسرع وقت ممكن. جرّب التحديث بعد دقائق.</p>
          <div className="row gap-8 jcc mt-16">
            <button className="btn-orange">🔄 إعادة المحاولة</button>
            <Link href="/" className="btn-outline">العودة للرئيسية</Link>
          </div>
          <p className="caption mt-16">ID الخطأ: ERR-2024-A8F2K1 — اذكره لو تواصلت مع الدعم.</p>
        </div>
      </div>
    </PublicShell>
  );
}
