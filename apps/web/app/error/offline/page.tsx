import Link from 'next/link';
import { PublicShell } from '@/components/PublicShell';

export default function ErrorOffline() {
  return (
    <PublicShell url="dheelplus.sa">
      <div style={{ minHeight: 480, display: 'grid', placeItems: 'center', padding: 32 }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{ fontSize: 96 }}>📡</div>
          <span className="status-pill" style={{ background: 'var(--neutral-100)', color: 'var(--neutral-700)' }}>لا يوجد اتصال</span>
          <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>ما في إنترنت</h1>
          <p className="body-l muted">تحقّق من اتصالك بالشبكة. الميزات الأساسية للحجز محفوظة وستزامَن تلقائياً عند العودة.</p>
          <div className="row gap-8 jcc mt-16">
            <button className="btn-orange">🔄 جرّب مرة أخرى</button>
          </div>
          <div className="card p-16 mt-16" style={{ background: 'var(--orange-50)' }}>
            <strong style={{ color: 'var(--orange-600)' }}>متاح بدون إنترنت:</strong>
            <ul className="muted body-s" style={{ textAlign: 'right', lineHeight: 1.8, margin: '4px 0 0', paddingInlineStart: 18 }}>
              <li>عرض الحجوزات الحالية</li>
              <li>تفاصيل العقد المحفوظة</li>
              <li>QR الفاتورة المحفوظ</li>
            </ul>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
