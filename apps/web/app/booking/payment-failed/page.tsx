import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

export default function PaymentFailedPage() {
  return (
    <BookingShell current="checkout">
      <div className="card p-32" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--danger)', color: 'white', fontSize: 48, display: 'grid', placeItems: 'center', margin: '0 auto 16px' }}>✕</div>
        <span className="status-pill" style={{ background: '#FEEEEE', color: 'var(--danger)' }}>تعذّر إتمام الدفع</span>
        <h1 className="h1" style={{ margin: '12px 0 4px', color: 'var(--purple)' }}>لم يتم خصم أي مبلغ</h1>
        <p className="body-l muted">رفض البنك المعاملة. غالباً السبب رصيد غير كافٍ، حد بطاقة، أو رفض من البنك المُصدر.</p>

        <div className="card p-20 mt-24" style={{ background: 'var(--neutral-50)', textAlign: 'right' }}>
          <strong style={{ color: 'var(--purple)' }}>جرّب أحد الحلول:</strong>
          <ul className="muted body-m" style={{ lineHeight: 1.9, margin: '8px 0 0' }}>
            <li>تحقّق من رصيدك أو حد البطاقة</li>
            <li>اتّصل ببنكك لرفع الحد المؤقت</li>
            <li>استخدم Apple Pay أو STC Pay</li>
            <li>جرّب بطاقة أخرى</li>
          </ul>
        </div>

        <div className="row gap-8 mt-24">
          <Link href="/booking/checkout" className="btn-orange btn-lg btn-block">جرّب الدفع مرة أخرى</Link>
        </div>
        <Link href="/contact" style={{ color: 'var(--purple)', fontWeight: 800, marginTop: 16, display: 'block' }}>تحدّث مع الدعم →</Link>
      </div>
    </BookingShell>
  );
}
