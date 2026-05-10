import Link from 'next/link';

type Car = { id: string; name: string; category: string; daily: number; monthly: number; specs: string; image: string; status?: string };

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="card car-card">
      <div className="car-thumb">{car.image}</div>
      <span className="badge purple">{car.category}</span>
      <h3 style={{ margin: '4px 0 0', color: 'var(--purple)' }}>{car.name}</h3>
      <p className="muted" style={{ margin: 0 }}>{car.specs}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginTop: 'auto' }}>
        <div><small className="muted">شهريًا</small><div className="price">{car.monthly.toLocaleString()} ر.س</div></div>
        <Link className="btn-outline" href={`/cars/${car.id}`}>عرض التفاصيل</Link>
      </div>
    </article>
  );
}

export function StatCard({ label, value, delta, tone = 'green' }: { label: string; value: string; delta?: string; tone?: 'green' | 'red' | 'orange' | 'purple' }) {
  return <div className="card stat"><span className="muted">{label}</span><b>{value}</b>{delta && <span className={`badge ${tone}`}>{delta}</span>}</div>;
}

export function PromoBanner() {
  return (
    <section className="card" style={{ padding: 26, background: 'linear-gradient(135deg, var(--purple-dark), var(--purple) 58%, var(--orange))', color: 'white', display:'flex', alignItems:'center', justifyContent:'space-between', gap:20 }}>
      <div><span className="badge orange">DHEEL15</span><h2 style={{margin:'12px 0 4px'}}>خصم حتى 15% على التأجير طويل الأمد</h2><p style={{opacity:.86}}>عرض خاص لفترة محدودة لعملاء ديل Plus.</p></div>
      <div style={{fontSize:80}}>🚘</div>
      <button className="btn-orange">احجز الآن</button>
    </section>
  );
}
