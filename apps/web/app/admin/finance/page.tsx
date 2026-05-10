import { AdminShell } from '@/components/AdminShell';
import { StatCard } from '@/components/Cards';

export default function FinanceAdminPage() {
  return (
    <AdminShell title="المالية">
      <div className="row gap-8 mb-16 wrap">
        <button className="pill active">آخر 30 يوم</button>
        <button className="pill">هذا الربع</button>
        <button className="pill">هذه السنة</button>
        <button className="pill">مخصص</button>
      </div>

      <div className="grid grid-4 gap-16 mb-24">
        <StatCard label="الإيرادات" value="2,847,500 ر.س" delta="+18%" tone="green" />
        <StatCard label="VAT المستحقّة" value="427,125 ر.س" delta="ستُسدَّد قبل 25" tone="orange" />
        <StatCard label="مبالغ تحت التحصيل" value="184,200 ر.س" delta="32 فاتورة" tone="red" />
        <StatCard label="الإيداعات النشطة" value="1,124,000 ر.س" delta="296 إيداع" tone="purple" />
      </div>

      <div className="grid grid-2 gap-16 mb-24">
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>الإيرادات اليومية</h3>
          <div className="bars">
            {[40, 65, 50, 75, 60, 85, 70, 90, 75, 80, 65, 95, 88, 100].map((h, i) => (
              <span key={i} className={`bar ${i % 4 === 3 ? 'o' : ''}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="row gap-16 mt-12">
            <span className="row aic gap-4 caption"><span style={{ width: 12, height: 12, background: 'var(--purple-500)', borderRadius: 4 }} />إيرادات</span>
            <span className="row aic gap-4 caption"><span style={{ width: 12, height: 12, background: 'var(--orange-400)', borderRadius: 4 }} />يوم العطلة</span>
          </div>
        </div>
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>توزيع الإيرادات</h3>
          <div className="row aic gap-24">
            <div className="donut"><div className="donut-center"><strong className="numeric" style={{ color: 'var(--purple)' }}>2.84M</strong></div></div>
            <div className="stack gap-8" style={{ flex: 1 }}>
              <Legend color="var(--purple-500)" label="تأجير شهري" pct="58%" val="1,651,550" />
              <Legend color="var(--orange-400)" label="تأجير قصير" pct="22%" val="626,450" />
              <Legend color="var(--success)" label="ليموزين" pct="12%" val="341,700" />
              <Legend color="var(--neutral-300)" label="إضافات" pct="8%" val="227,800" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-3 gap-16 mb-24">
        <div className="card p-20">
          <span className="caption">ZATCA</span>
          <h4 className="h4" style={{ marginTop: 4, color: 'var(--purple)' }}>الفوترة الإلكترونية</h4>
          <div className="row between aic mt-8"><span className="muted body-s">المُقدَّمة هذا الشهر</span><strong className="numeric">1,247</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">في الانتظار</span><strong className="numeric">8</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">مرفوضة</span><strong className="numeric" style={{ color: 'var(--danger)' }}>2</strong></div>
        </div>
        <div className="card p-20">
          <span className="caption">التحصيل</span>
          <h4 className="h4" style={{ marginTop: 4, color: 'var(--purple)' }}>متأخّرات الشركات</h4>
          <div className="row between aic mt-8"><span className="muted body-s">+90 يوم</span><strong className="numeric" style={{ color: 'var(--danger)' }}>42,800 ر.س</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">60-90 يوم</span><strong className="numeric">28,150 ر.س</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">30-60 يوم</span><strong className="numeric">113,250 ر.س</strong></div>
        </div>
        <div className="card p-20">
          <span className="caption">طرق الدفع</span>
          <h4 className="h4" style={{ marginTop: 4, color: 'var(--purple)' }}>توزيع الدفع</h4>
          <div className="row between aic mt-8"><span className="muted body-s">مدى</span><strong>52%</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">Apple Pay</span><strong>28%</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">STC Pay</span><strong>14%</strong></div>
          <div className="row between aic mt-4"><span className="muted body-s">تحويل بنكي</span><strong>6%</strong></div>
        </div>
      </div>

      <div className="card">
        <div className="table-toolbar">
          <h3 className="h3" style={{ margin: 0, color: 'var(--purple)' }}>أحدث الفواتير</h3>
          <div className="row gap-8">
            <button className="btn-outline btn-sm">📥 تصدير</button>
            <button className="btn-orange btn-sm">+ فاتورة يدوية</button>
          </div>
        </div>
        <table className="table">
          <thead><tr><th>رقم الفاتورة</th><th>العميل</th><th>التاريخ</th><th>المبلغ</th><th>VAT</th><th>ZATCA</th><th>الحالة</th></tr></thead>
          <tbody>
            <tr><td className="numeric">INV-2024-1042</td><td>محمد العتيبي</td><td>14 مايو</td><td className="numeric">5,669 ر.س</td><td className="numeric">739 ر.س</td><td><span className="badge green">✓ مرسلة</span></td><td><span className="badge green">مدفوعة</span></td></tr>
            <tr><td className="numeric">INV-2024-1041</td><td>شركة السيف</td><td>14 مايو</td><td className="numeric">12,499 ر.س</td><td className="numeric">1,630 ر.س</td><td><span className="badge green">✓ مرسلة</span></td><td><span className="badge orange">قيد السداد</span></td></tr>
            <tr><td className="numeric">INV-2024-1040</td><td>سارة العمري</td><td>13 مايو</td><td className="numeric">2,499 ر.س</td><td className="numeric">326 ر.س</td><td><span className="badge orange">قيد التقديم</span></td><td><span className="badge orange">قيد السداد</span></td></tr>
            <tr><td className="numeric">INV-2024-1039</td><td>أحمد الفوزان</td><td>13 مايو</td><td className="numeric">1,899 ر.س</td><td className="numeric">248 ر.س</td><td><span className="badge red">⚠️ مرفوضة</span></td><td><span className="badge gray">ملغاة</span></td></tr>
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}

function Legend({ color, label, pct, val }: { color: string; label: string; pct: string; val: string }) {
  return (
    <div className="row aic gap-8">
      <span style={{ width: 12, height: 12, background: color, borderRadius: 4 }} />
      <span style={{ flex: 1 }}>{label}</span>
      <strong>{pct}</strong>
      <span className="muted body-s numeric">{val}</span>
    </div>
  );
}
