import { BrowserFrame } from '@/components/Brand';
import { Header } from '@/components/Header';

export default function CheckoutPage() {
  const services = ['مقعد أطفال', 'واي فاي', 'نظام GPS', 'سائق إضافي'];
  return (
    <BrowserFrame url="dheelplus.sa/booking/checkout">
      <Header />
      <main className="container section">
        <h1 style={{color:'var(--purple)'}}>إكمال الحجز</h1>
        <div className="pill-row"><span className="pill">اختيار السيارة ✓</span><span className="pill">تفاصيل الحجز ✓</span><span className="pill active">الدفع والتأكيد 3</span></div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 340px', gap:22, marginTop:24}}>
          <section className="grid">
            <div className="card stat"><h2>بيانات العميل</h2><div className="grid grid-2"><input className="input" placeholder="الاسم الكامل"/><input className="input" placeholder="رقم الجوال"/><input className="input" placeholder="البريد الإلكتروني"/><input className="input" placeholder="رقم الهوية / الإقامة"/></div></div>
            <div className="card stat"><h2>تفاصيل الاستلام والإرجاع</h2><div className="grid grid-2"><div className="field"><label>الاستلام</label><span>مطار الملك خالد الدولي</span></div><div className="field"><label>الإرجاع</label><span>مطار الملك خالد الدولي</span></div></div></div>
            <div className="card stat"><h2>الخدمات الإضافية</h2><div className="grid grid-4">{services.map(s=><label className="field" key={s}><input type="checkbox"/> {s}<br/><span>20 ر.س / يوم</span></label>)}</div></div>
            <div className="card stat"><h2>طريقة الدفع</h2><div className="grid grid-4"><button className="btn-outline">مدى</button><button className="btn">VISA / MasterCard</button><button className="btn-outline">Apple Pay</button><button className="btn-outline">تحويل بنكي</button></div><div className="grid grid-2" style={{marginTop:14}}><input className="input" placeholder="رقم البطاقة"/><input className="input" placeholder="الاسم على البطاقة"/></div></div>
            <button className="btn" style={{fontSize:18}}>تأكيد الحجز الآن</button>
          </section>
          <aside className="card stat"><h2>ملخص الحجز</h2><div style={{fontSize:120, textAlign:'center'}}>🚘</div><h3>تويوتا كامري 2024</h3><p className="muted">3 أيام • مطار الملك خالد</p><hr/><p>السعر الأساسي: 1,599 ر.س</p><p>ضريبة القيمة المضافة: 254.10 ر.س</p><p>مبلغ التأمين: 500 ر.س</p><b style={{fontSize:30, color:'var(--purple)'}}>2,558.10 ر.س</b><div className="badge green" style={{marginTop:18}}>حجزك آمن 100%</div></aside>
        </div>
      </main>
    </BrowserFrame>
  );
}
