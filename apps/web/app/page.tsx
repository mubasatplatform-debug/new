import { BrowserFrame } from '@/components/Brand';
import { Header, Footer } from '@/components/Header';
import { CarCard, PromoBanner } from '@/components/Cards';
import { cars, branches } from '@/lib/data';

export default function LandingPage() {
  return (
    <BrowserFrame url="dheelplus.sa">
      <Header />
      <section className="hero">
        <div className="container">
          <div>
            <h1>تأجير طويل الأمد<br/><span>مرونة اليوم.. راحة كل يوم</span></h1>
            <p>خطط تأجير مرنة تبدأ من يوم واحد وحتى عقود طويلة الأمد مع أسعار منافسة وخدمة موثوقة في جميع أنحاء المملكة.</p>
            <div className="pill-row"><span className="pill active">أسعار شفافة</span><span className="pill">تأمين شامل</span><span className="pill">دعم 24/7</span></div>
          </div>
          <div className="car-visual"><div className="car-emoji">🚘</div></div>
        </div>
      </section>
      <div className="container">
        <section className="card search-card">
          <div className="pill-row" style={{marginBottom:16}}><span className="pill active">تأجير طويل الأمد</span><span className="pill">تأجير قصير الأمد</span><span className="pill">تأجير للشركات</span></div>
          <div className="search-grid">
            <div className="field"><label>موقع الاستلام</label><span>اختر المدينة أو الفرع</span></div>
            <div className="field"><label>تاريخ الاستلام</label><span>اختر التاريخ</span></div>
            <div className="field"><label>تاريخ العودة</label><span>اختر التاريخ</span></div>
            <div className="field"><label>المدة</label><span>اختر المدة</span></div>
            <a href="/fleet" className="btn">ابحث عن سيارة</a>
          </div>
        </section>
        <section className="section"><h2>سيارات مميزة</h2><div className="grid grid-5">{cars.slice(0,5).map(car => <CarCard car={car} key={car.id}/>)}</div></section>
        <section className="section"><h2>لماذا تختار ديل Plus؟</h2><div className="grid grid-5">{['أسطول حديث','مرونة في التأجير','صيانة دورية','تأمين شامل','خدمة عملاء مميزة'].map(x => <div className="card stat" key={x}><b style={{fontSize:24}}>✓</b><h3>{x}</h3><p className="muted">تجربة تشغيل موثوقة ومصممة للسوق السعودي.</p></div>)}</div></section>
        <section className="section"><h2>فروعنا في المملكة</h2><div className="grid grid-4">{branches.map(b => <div className="card stat" key={b.city}><b>{b.image}</b><h3>{b.city}</h3><p className="muted">+{b.count} فروع</p></div>)}</div></section>
        <PromoBanner />
      </div>
      <Footer />
    </BrowserFrame>
  );
}
