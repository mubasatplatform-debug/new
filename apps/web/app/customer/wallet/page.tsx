import { CustomerShell } from '@/components/CustomerShell';
import { StatCard } from '@/components/Cards';

const tx = [
  { date: '14 مايو', desc: 'استرداد إيداع #DP-78450', amount: +1500, type: 'الإيداع' },
  { date: '12 مايو', desc: 'دفعة حجز #DP-78452', amount: -2999, type: 'دفع' },
  { date: '10 مايو', desc: 'مكافأة إحالة - أحمد محمد', amount: +50, type: 'إحالة' },
  { date: '02 مايو', desc: 'استرداد جزئي - تأخير تسليم', amount: +120, type: 'استرداد' },
  { date: '20 إبريل', desc: 'شحن المحفظة عبر مدى', amount: +1000, type: 'شحن' },
  { date: '15 إبريل', desc: 'دفعة فاتورة #INV-1042', amount: -1899, type: 'دفع' }
];

export default function WalletPage() {
  return (
    <CustomerShell title="المحفظة والمدفوعات" active="/customer/wallet">
      <div className="grid grid-3 gap-16 mb-24">
        <div className="card p-32" style={{ background: 'linear-gradient(135deg, var(--purple-700), var(--purple-500))', color: 'white' }}>
          <span style={{ opacity: .85, fontSize: 12, fontWeight: 800 }}>الرصيد الحالي</span>
          <div className="numeric" style={{ fontSize: 42, fontWeight: 900, marginTop: 4 }}>1,672 ر.س</div>
          <div className="row gap-8 mt-12">
            <button className="btn-orange">+ شحن</button>
            <button className="btn-ghost">🏦 سحب</button>
          </div>
        </div>
        <StatCard label="إجمالي المصروف هذا العام" value="9,847 ر.س" delta="+12%" tone="orange" />
        <StatCard label="إجمالي الاسترداد" value="1,670 ر.س" delta="+5" tone="green" />
      </div>

      <div className="grid grid-2 gap-16 mb-24">
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>طرق الدفع المحفوظة</h3>
          <div className="stack gap-12">
            <PayMethod brand="مدى" no="••• 4521" exp="08/27" primary />
            <PayMethod brand="Apple Pay" no="iPhone 15" exp="" />
            <PayMethod brand="STC Pay" no="050xxxxxxx" exp="" />
          </div>
          <button className="btn-outline btn-block mt-16">+ إضافة طريقة دفع</button>
        </div>
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>الإيداعات النشطة</h3>
          <div className="stack gap-12">
            <Deposit id="#DP-78452" amount={1500} status="HELD" />
            <Deposit id="#DP-78451" amount={1500} status="HELD" />
            <Deposit id="#DP-78449" amount={1500} status="RELEASED" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="table-toolbar">
          <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>سجل المعاملات</h3>
          <div className="row gap-8">
            <button className="btn-outline btn-sm">آخر 90 يوم ▾</button>
            <button className="btn-outline btn-sm">📥 تصدير CSV</button>
          </div>
        </div>
        <table className="table">
          <thead><tr><th>التاريخ</th><th>الوصف</th><th>النوع</th><th>المبلغ</th></tr></thead>
          <tbody>
            {tx.map((t, i) => (
              <tr key={i}>
                <td>{t.date}</td>
                <td>{t.desc}</td>
                <td><span className="badge gray">{t.type}</span></td>
                <td className="numeric" style={{ fontWeight: 900, color: t.amount > 0 ? 'var(--success)' : 'var(--danger)' }}>
                  {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString()} ر.س
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CustomerShell>
  );
}

function PayMethod({ brand, no, exp, primary }: { brand: string; no: string; exp: string; primary?: boolean }) {
  return (
    <div className="row aic gap-12 p-16 r-16" style={{ border: primary ? '2px solid var(--purple-500)' : '1px solid var(--neutral-200)', background: 'white' }}>
      <div style={{ width: 48, height: 32, borderRadius: 6, background: 'linear-gradient(135deg, var(--purple-700), var(--purple-500))', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 11 }}>{brand.slice(0, 4)}</div>
      <div style={{ flex: 1 }}>
        <strong>{brand}</strong>
        <p className="muted body-s" style={{ margin: 0 }}>{no}{exp ? ` • انتهاء ${exp}` : ''}</p>
      </div>
      {primary && <span className="badge purple">الافتراضي</span>}
    </div>
  );
}

function Deposit({ id, amount, status }: { id: string; amount: number; status: string }) {
  return (
    <div className="row between aic p-16 r-16" style={{ border: '1px solid var(--neutral-200)' }}>
      <div>
        <strong className="numeric">{id}</strong>
        <p className="caption" style={{ margin: '2px 0 0' }}>تأمين الحجز</p>
      </div>
      <div style={{ textAlign: 'end' }}>
        <strong className="numeric">{amount.toLocaleString()} ر.س</strong>
        <span className={`badge ${status === 'HELD' ? 'orange' : 'green'}`} style={{ display: 'block', marginTop: 4 }}>{status}</span>
      </div>
    </div>
  );
}
