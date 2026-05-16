import { BrowserFrame } from '@/components/Brand';
import { Header } from '@/components/Header';
import { cars } from '@/lib/data';
import { CarCard } from '@/components/Cards';

export default function CarDetails({ params }: { params: { id: string } }) {
  const car = cars.find(c => c.id === params.id) ?? cars[0];
  return (
    <BrowserFrame url={`dheelplus.sa/cars/${car.id}`}>
      <Header />
      <main className="container section">
        <div className="grid grid-2">
          <section>
            <div className="card" style={{height:420, display:'grid', placeItems:'center', fontSize:230}}>{car.image}</div>
            <div className="grid grid-5" style={{marginTop:14}}>{[1,2,3,4,5].map(i=><div className="card" style={{height:82, display:'grid', placeItems:'center', fontSize:42}} key={i}>{car.image}</div>)}</div>
          </section>
          <aside className="card stat"><span className="badge purple">{car.category}</span><h1>{car.name}</h1><p className="muted">راحة متكاملة في كل رحلة. {car.specs}</p><div className="grid grid-3"><div className="field"><label>يومي</label><b>{car.daily} ر.س</b></div><div className="field"><label>أسبوعي</label><b>{car.weekly} ر.س</b></div><div className="field" style={{background:'var(--purple)', color:'white'}}><label style={{color:'white'}}>شهري</label><b>{car.monthly} ر.س</b></div></div><a href="/booking/checkout" className="btn" style={{width:'100%', marginTop:20}}>احجز الآن</a></aside>
        </div>
        <section className="section grid grid-4">
          {['المواصفات الرئيسية','المميزات','خيارات التأمين','ملخص الحجز'].map(x=><div className="card stat" key={x}><h3>{x}</h3><p className="muted">أوتوماتيك، بنزين، 5 مقاعد، تأمين شامل، توصيل للمطار أو الفرع.</p></div>)}
        </section>
        <h2>سيارات مشابهة</h2><div className="grid grid-4">{cars.slice(1,5).map(c=><CarCard car={c} key={c.id}/>)}</div>
      </main>
    </BrowserFrame>
  );
}
