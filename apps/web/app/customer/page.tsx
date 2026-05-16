import { BrowserFrame } from '@/components/Brand';
import { Header, Footer } from '@/components/Header';
import { StatCard, PromoBanner } from '@/components/Cards';

export default function CustomerPage() {
  return (
    <BrowserFrame url="dheelplus.sa/customer">
      <Header />
      <section className="hero" style={{minHeight:300}}><div className="container"><div><h1>مرحباً، أحمد</h1><p>نشكرك على اختيارك ديل Plus. الفئة البلاتينية، 12,450 نقطة.</p></div><div className="car-visual"><div style={{fontSize:140}}>👤</div></div></div></section>
      <main className="container section">
        <div className="pill-row"><span className="pill active">حجوزاتي الحالية</span><span className="pill">الحجوزات القادمة</span><span className="pill">سجل الحجوزات</span><span className="pill">المحفظة</span><span className="pill">السيارات المحفوظة</span></div>
        <section className="card stat" style={{marginTop:24}}><div className="grid grid-2"><div><span className="badge green">نشط</span><h2>تويوتا كامري 2024</h2><p className="muted">#DP-2024-0587 • الرياض - فرع العليا</p><b className="price">1,899 ريال مستحق الآن</b><div className="pill-row" style={{marginTop:20}}><button className="btn-orange">دفع الآن</button><button className="btn">تمديد العقد</button><button className="btn-outline">عرض تفاصيل العقد</button></div></div><div style={{fontSize:200, textAlign:'center'}}>🚘</div></div></section>
        <section className="section grid grid-4"><StatCard label="المحفظة" value="2,350"/><StatCard label="إجمالي الحجوزات" value="12"/><StatCard label="إجمالي الإنفاق" value="18,750"/><StatCard label="السيارات المحفوظة" value="4"/></section>
        <PromoBanner />
      </main><Footer />
    </BrowserFrame>
  );
}
