import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';

export default function ContractPage({ params }: { params: { id: string } }) {
  return (
    <BrowserFrame url={`admin.dheelplus.sa/contracts/${params.id}`}>
      <AdminShell title="ملف العقد وتسليم المركبة">
        <section className="card stat"><div className="grid grid-4"><div style={{fontSize:90}}>🚘</div><div><b>رقم العقد</b><p>{params.id}</p></div><div><b>العميل</b><p>أحمد محمد العتيبي</p></div><div><b>مدة العقد</b><p>12 شهر</p></div></div></section>
        <div className="pill-row" style={{margin:'22px 0'}}><button className="btn">تفعيل العقد</button><button className="btn-outline">تمديد العقد</button><button className="btn-outline">إعادة المركبة</button><button className="btn-outline">طباعة العقد</button></div>
        <div style={{display:'grid', gridTemplateColumns:'260px 1fr 300px', gap:18}}>
          <aside className="grid"><div className="card stat"><h3>ملخص الأسعار</h3><p>قيمة الإيجار الشهري 2,599 ر.س</p><p>ضريبة القيمة المضافة 4,678 ر.س</p><b className="price">37,266 ر.س</b><span className="badge green">مدفوع</span></div><div className="card stat"><h3>الفواتير والمدفوعات</h3><p>INV-2024-000512-01</p><p>INV-2024-000512-02</p><p>INV-2024-000512-03</p></div></aside>
          <main className="card stat"><h2>قائمة تسليم / فحص المركبة</h2><div className="grid grid-3">{['أمامي','خلفي','جانب أيمن','جانب أيسر','داخلي','عداد الكيلومترات'].map(x=><div className="field" key={x}>📷 {x}</div>)}</div><div className="grid grid-3" style={{marginTop:20}}><div className="field"><label>العداد</label><b>12,345 كم</b></div><div className="field"><label>مستوى الوقود</label><b>75%</b></div><div className="field"><label>الحالة العامة</label><b>ممتازة</b></div></div><h3>الملحقات والمستندات</h3><div className="pill-row">{['مفتاح أساسي','مفتاح احتياطي','استمارة المركبة','بطاقة تأمين','جهاز تتبع','مثلث تحذير'].map(x=><span className="pill" key={x}>✓ {x}</span>)}</div><h3>توقيع الاستلام</h3><div className="grid grid-2"><div className="field">توقيع ممثل ديل Plus</div><div className="field">توقيع العميل</div></div></main>
          <aside className="card stat"><h3>سجل أحداث العقد</h3>{['تم إنشاء العقد','تم تأكيد بيانات العميل','تم دفع الدفعة الأولى','تم تجهيز المركبة','تم تسليم المركبة','الصيانة الدورية القادمة'].map((e,i)=><p key={e}><span className={`badge ${i<5?'green':'purple'}`}>{i+1}</span> {e}</p>)}</aside>
        </div>
      </AdminShell>
    </BrowserFrame>
  );
}
