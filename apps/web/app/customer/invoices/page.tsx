import { CustomerShell } from '@/components/CustomerShell';

const invoices = [
  { id: 'INV-2024-1042', date: '14 مايو 2024', booking: '#DP-78452', amount: 5669, vat: 739, status: 'مدفوعة', method: 'Apple Pay' },
  { id: 'INV-2024-1038', date: '13 مايو 2024', booking: '#DP-78451', amount: 2499, vat: 326, status: 'مدفوعة', method: 'مدى' },
  { id: 'INV-2024-1029', date: '08 إبريل 2024', booking: '#DP-78440', amount: 4499, vat: 587, status: 'مدفوعة', method: 'STC Pay' },
  { id: 'INV-2024-0998', date: '15 مارس 2024', booking: '#DP-78420', amount: 1899, vat: 248, status: 'مسترَدّة', method: 'مدى' }
];

export default function InvoicesPage() {
  return (
    <CustomerShell title="الفواتير" active="/customer/invoices">
      <div className="grid grid-4 gap-16 mb-24">
        <div className="card stat"><span className="muted">إجمالي الفواتير</span><b>14</b></div>
        <div className="card stat"><span className="muted">المدفوع هذا العام</span><b>14,566 ر.س</b></div>
        <div className="card stat"><span className="muted">VAT المسترَدّ</span><b>248 ر.س</b></div>
        <div className="card stat"><span className="muted">في الانتظار</span><b>0</b></div>
      </div>

      <div className="card">
        <div className="table-toolbar">
          <div className="row gap-8 aic">
            <div className="input-group" style={{ minWidth: 240 }}><input placeholder="🔎 رقم فاتورة..." /></div>
            <button className="btn-outline btn-sm">السنة 2024 ▾</button>
            <button className="btn-outline btn-sm">الحالة ▾</button>
          </div>
          <button className="btn-outline btn-sm">📥 تصدير الكل</button>
        </div>
        <table className="table">
          <thead><tr>
            <th>رقم الفاتورة</th>
            <th>التاريخ</th>
            <th>الحجز</th>
            <th>المبلغ</th>
            <th>VAT 15%</th>
            <th>طريقة الدفع</th>
            <th>الحالة</th>
            <th>إجراء</th>
          </tr></thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id}>
                <td className="numeric">{inv.id}</td>
                <td>{inv.date}</td>
                <td className="numeric">{inv.booking}</td>
                <td className="numeric" style={{ fontWeight: 800 }}>{inv.amount.toLocaleString()} ر.س</td>
                <td className="numeric muted">{inv.vat} ر.س</td>
                <td>{inv.method}</td>
                <td><span className={`badge ${inv.status === 'مدفوعة' ? 'green' : 'orange'}`}>{inv.status}</span></td>
                <td>
                  <div className="row gap-4">
                    <button className="row-action">📥 PDF</button>
                    <button className="row-action">📧 إرسال</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card p-24 mt-16" style={{ background: 'var(--purple-50)' }}>
        <div className="row aic gap-16">
          <div className="qr-block" />
          <div>
            <strong style={{ color: 'var(--purple)' }}>📋 ZATCA QR متاح على كل فاتورة</strong>
            <p className="muted body-s" style={{ margin: '4px 0 0' }}>كل فاتورة من ديل Plus تحمل رمز QR وفق المرحلة الثانية من الفوترة الإلكترونية. يمكنك مسحه للتحقّق.</p>
          </div>
        </div>
      </div>
    </CustomerShell>
  );
}
