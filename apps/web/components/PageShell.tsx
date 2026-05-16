import Link from 'next/link';
import { CarCard, PromoBanner, StatCard } from './Cards';
import { GoogleMapPanel, ServiceAreaLegend, BranchList } from './MapPanel';
import { cars } from '../lib/data';
import { pageMap } from '../lib/page-map';

function PublicHero({ title, description }: { title: string; description: string }) {
  return <section className="hero"><div className="container"><div><span className="badge orange">ديل Plus Rent OS</span><h1>{title}</h1><p>{description}</p><div className="pill-row"><Link className="btn-orange" href="/booking/type">ابدأ الحجز</Link><Link className="btn-ghost" href="/maps">عرض الخريطة</Link></div></div><div className="car-visual"><div className="car-emoji">🚘</div></div></div></section>;
}

function OperationsBlocks() {
  return <div className="grid grid-4"><StatCard label="الحجوزات" value="128" delta="+12%"/><StatCard label="الإيرادات" value="240,560 ر.س" delta="+18%"/><StatCard label="المتأخرات" value="56,430 ر.س" delta="-8%" tone="red"/><StatCard label="السيارات المتاحة" value="98" delta="جاهزة"/></div>;
}

function AdminPreview() {
  return <div className="admin-layout"><aside className="sidebar"><div className="logo"><small>Plus</small>ديل</div>{['لوحة التحكم','الحجوزات','المركبات','العقود','المالية','CRM','الخرائط','AI','الإعدادات'].map((item, idx)=><div key={item} className={`side-link ${idx===0?'active':''}`}>● {item}</div>)}</aside><main className="admin-main"><div className="admin-top"><input className="input search" placeholder="بحث في العملاء، الحجوزات، المركبات..."/><Link className="btn" href="/admin/page-map">ترتيب الصفحات</Link></div><OperationsBlocks/><div className="grid grid-2 section"><div className="card" style={{padding:22}}><h3>مؤشر الأداء</h3><div className="chart"/></div><div className="card" style={{padding:22}}><h3>آخر العمليات</h3><table className="table"><tbody>{['حجز جديد','دفعة مستلمة','عقد ممدد','سيارة للصيانة'].map((row,i)=><tr key={row}><td>{row}</td><td><span className="badge green">مكتمل</span></td><td>{i+1}:20 م</td></tr>)}</tbody></table></div></div></main></div>;
}

function CustomerPreview() {
  return <section className="container section"><div className="card" style={{padding:28, background:'linear-gradient(135deg,var(--purple-dark),var(--purple))', color:'white'}}><h2>مرحباً، أحمد</h2><p>الفئة البلاتينية — 12,450 نقطة</p><div className="progress"><span style={{width:'62%'}}/></div></div><div className="grid grid-3 section"><StatCard label="الحجز الحالي" value="تويوتا كامري"/><StatCard label="المبلغ المستحق" value="1,899 ر.س"/><StatCard label="المحفظة" value="2,350 ر.س"/></div><PromoBanner/></section>;
}

function FinancePreview() {
  return <section className="container section"><OperationsBlocks/><div className="grid grid-2 section"><div className="card" style={{padding:22}}><h3>الفواتير والمدفوعات</h3><table className="table"><thead><tr><th>الفاتورة</th><th>المبلغ</th><th>الحالة</th></tr></thead><tbody>{['INV-001','INV-002','INV-003'].map((r,i)=><tr key={r}><td>{r}</td><td>{(2400+i*650).toLocaleString()} ر.س</td><td><span className="badge green">مدفوعة</span></td></tr>)}</tbody></table></div><div className="card" style={{padding:22}}><h3>ZATCA</h3><p className="muted">جاهز للربط عبر مزود فوترة إلكترونية. أضف بيانات المزود في .env.</p><span className="badge orange">Needs Credentials</span></div></div></section>;
}

function FleetPreview() {
  return <section className="container section"><div className="grid grid-4">{cars.slice(0,4).map(car => <CarCard key={car.id} car={car}/>)}</div><div className="section"><GoogleMapPanel mode="fleet"/></div></section>;
}

export function GenericPage({ route, title, description, section }: { route: string; title: string; description: string; section: string }) {
  const isAdmin = route.startsWith('/admin');
  const isMap = route.includes('map') || route.includes('maps') || route.includes('tracking');
  const isCustomer = route.startsWith('/customer');
  const isFinance = route.includes('finance') || route.includes('invoice') || route.includes('payment') || route.includes('wallet') || route.includes('deposit') || route.includes('collections');
  const isFleet = route.includes('fleet') || route.includes('vehicle') || route.includes('car') || route.includes('maintenance') || route.includes('violations') || route.includes('accidents');

  if (isMap) return <><PublicHero title={title} description={description}/><section className="container section"><ServiceAreaLegend/><div className="section"><GoogleMapPanel mode={route.startsWith('/admin') ? 'fleet' : 'public'}/></div><BranchList/></section></>;
  if (isCustomer) return <CustomerPreview/>;
  if (isAdmin && route !== '/admin/page-map') return <AdminPreview/>;
  if (isFinance) return <FinancePreview/>;
  if (isFleet) return <><PublicHero title={title} description={description}/><FleetPreview/></>;
  return <><PublicHero title={title} description={description}/><section className="container section"><div className="grid grid-3"><div className="card stat"><span className="badge purple">Workflow</span><b>رحلة واضحة</b><p className="muted">هذه الصفحة مدمجة في مسار {section} وتدعم الربط مع API والـ Audit Log.</p></div><div className="card stat"><span className="badge orange">Action</span><b>إجراء أساسي</b><p className="muted">تم تجهيز UI/UX للحالة الرئيسية وحالات النجاح والفشل.</p></div><div className="card stat"><span className="badge green">Ready</span><b>جاهزة ضمن الويب آب</b><p className="muted">يمكن تطويرها من نفس النمط دون كسر الهوية.</p></div></div><div className="section"><PromoBanner/></div></section></>;
}

export function PageMapTable() {
  const sections = Array.from(new Set(pageMap.map(page => page.section)));
  return <div className="container section">{sections.map(section => <div className="card" key={section} style={{padding:22, marginBottom:18}}><h2 style={{color:'var(--purple)', marginTop:0}}>{section}</h2><table className="table"><thead><tr><th>#</th><th>الصفحة</th><th>المسار</th><th>الوصف</th><th>الحالة</th></tr></thead><tbody>{pageMap.filter(p=>p.section===section).map(page => <tr key={page.route}><td>{page.order}</td><td>{page.title}</td><td><Link href={page.route}>{page.route}</Link></td><td>{page.description}</td><td><span className="badge green">موجودة</span></td></tr>)}</tbody></table></div>)}</div>;
}
