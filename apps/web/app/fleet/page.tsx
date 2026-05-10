import { BrowserFrame } from '@/components/Brand';
import { Header, Footer } from '@/components/Header';
import { CarCard, PromoBanner } from '@/components/Cards';
import { cars } from '@/lib/data';

export default function FleetPage() {
  return (
    <BrowserFrame url="dheelplus.sa/fleet">
      <Header />
      <section className="hero" style={{minHeight:300}}><div className="container"><div><h1>أسطول السيارات</h1><p>اختر سيارتك المناسبة من مجموعة واسعة.</p></div><div className="car-visual"><div className="car-emoji">🚘</div></div></div></section>
      <div className="container">
        <section className="card search-card"><div className="search-grid"><div className="field"><label>نوع التأجير</label><span>شهري</span></div><div className="field"><label>تاريخ الاستلام</label><span>اختر التاريخ</span></div><div className="field"><label>تاريخ التسليم</label><span>اختر التاريخ</span></div><div className="field"><label>الموقع</label><span>الرياض</span></div><button className="btn">بحث</button></div></section>
        <section className="section">
          <div className="pill-row" style={{marginBottom:20}}>{['الكل','سيدان','SUV','فخمة','اقتصادية','شهري','أسبوعي'].map((x,i)=><span className={`pill ${i===0?'active':''}`} key={x}>{x}</span>)}</div>
          <div style={{display:'grid', gridTemplateColumns:'260px 1fr', gap:20}}>
            <aside className="card stat"><h3>الفلاتر</h3><div className="field"><label>نطاق السعر</label><span>100 - 10,000 ر.س</span></div><div className="field"><label>الشركات</label><span>تويوتا، هيونداي، كيا</span></div><div className="field"><label>سنة الصنع</label><span>2024</span></div><button className="btn-outline" style={{width:'100%'}}>تطبيق الفلاتر</button></aside>
            <div><h2>128 سيارة متاحة</h2><div className="grid grid-4">{cars.concat(cars).slice(0,8).map((car, idx)=><CarCard car={{...car, id: car.id + idx}} key={idx}/>)}</div></div>
          </div>
        </section>
        <PromoBanner />
      </div><Footer />
    </BrowserFrame>
  );
}
