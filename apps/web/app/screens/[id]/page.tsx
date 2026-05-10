import { BrowserFrame } from '@/components/Brand';
import { Header, Footer } from '@/components/Header';
import { screenRegistry } from '@/lib/screen-registry';

export default function GenericScreen({ params }: { params: { id: string } }) {
  const screen = screenRegistry.find(s => s.id === params.id);
  return (
    <BrowserFrame url={`dheelplus.sa/screens/${params.id}`}>
      <Header />
      <main className="container section">
        <span className="badge purple">{screen?.group ?? 'Screen'}</span>
        <h1 style={{color:'var(--purple)'}}>{screen?.title ?? 'واجهة غير معروفة'}</h1>
        <p className="muted">هذه واجهة مسجلة في Screen Registry. الصفحات الحرجة منفذة كتصميم كامل، وباقي الواجهات جاهزة كمسارات قابلة للتخصيص.</p>
        <div className="grid grid-3">
          <div className="card stat"><h3>الهدف التشغيلي</h3><p>تحويل المتطلبات إلى إجراء واضح داخل نظام ديل Plus.</p></div>
          <div className="card stat"><h3>المكونات</h3><p>Header، Filters، Cards، Tables، Actions، Audit Visibility.</p></div>
          <div className="card stat"><h3>الحوكمة</h3><p>RBAC + Branch Scope + Audit Log + AI Policy عند الحاجة.</p></div>
        </div>
      </main>
      <Footer />
    </BrowserFrame>
  );
}
