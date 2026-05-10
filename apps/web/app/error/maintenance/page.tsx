import Link from 'next/link';
import { PublicShell } from '@/components/PublicShell';

export default function ErrorMaintenance() {
  return (
    <PublicShell url="dheelplus.sa/maintenance">
      <div style={{ minHeight: 480, display: 'grid', placeItems: 'center', padding: 32 }}>
        <div style={{ textAlign: 'center', maxWidth: 560 }}>
          <div style={{ fontSize: 96 }}>🛠️</div>
          <span className="status-pill" style={{ background: '#FFF7DD', color: '#6F4D00' }}>صيانة مجدولة</span>
          <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>نعمل على ترقية النظام</h1>
          <p className="body-l muted">سنعود بعد <strong style={{ color: 'var(--purple)' }}>32 دقيقة</strong> بميزات جديدة وأداء أسرع.</p>
          <div className="card p-20 mt-16" style={{ background: 'var(--purple-50)', textAlign: 'right' }}>
            <strong style={{ color: 'var(--purple)' }}>📋 ما الذي يتغيّر؟</strong>
            <ul className="muted body-m" style={{ lineHeight: 1.9, margin: '8px 0 0' }}>
              <li>تحسين أداء البحث في الأسطول (10×)</li>
              <li>دعم Tabby للدفع المُقسَّط</li>
              <li>إصلاحات في وحدة المخالفات</li>
            </ul>
          </div>
          <p className="caption mt-16">للحجوزات العاجلة: 920 028 090</p>
        </div>
      </div>
    </PublicShell>
  );
}
