import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';
import { StatCard, PromoBanner } from '@/components/Cards';
import { bookings } from '@/lib/data';

export default function AdminDashboard() {
  return (
    <BrowserFrame url="admin.dheelplus.sa">
      <AdminShell title="لوحة التحكم التنفيذية">
        <div className="grid grid-5"><StatCard label="الإيرادات" value="2,450,000" delta="+12.5%"/><StatCard label="نسبة الاستخدام" value="78%" delta="+5.3%"/><StatCard label="العقود النشطة" value="1,248" delta="+3.6%"/><StatCard label="المدفوعات المتأخرة" value="132,500" delta="-8.2%" tone="red"/><StatCard label="المركبات المتاحة" value="354"/></div>
        <div className="section grid grid-2"><div className="card stat"><h2>الحجوزات</h2><div className="chart"/></div><div className="card stat"><h2>الإيرادات (ر.س)</h2><div className="chart"/></div></div>
        <div className="grid grid-2"><section className="card stat"><h2>آخر الحجوزات</h2><table className="table"><tbody>{bookings.map(b=><tr key={b.id}><td>{b.id}</td><td>{b.customer}</td><td>{b.car}</td><td>{b.amount.toLocaleString()} ر.س</td><td><span className="badge green">{b.status}</span></td></tr>)}</tbody></table></section><aside className="card stat"><h2>معلومات ذكية من ديل Plus AI</h2><p>ارتفاع الطلب في فرع الرياض بنسبة 18%. نوصي بزيادة توفر كامري وSUV.</p><p>هناك 8 عملاء متكررون لم يحجزوا منذ 30 يوم.</p><button className="btn">عرض المزيد من التحليلات</button></aside></div>
        <section className="section"><PromoBanner /></section>
      </AdminShell>
    </BrowserFrame>
  );
}
