import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';

const people = ['سارة محمد','فهد القحطاني','نورة العتيبي','محمد الشهري','أحمد الراشد','هدى اليامي','علي المالكي','ريم الدوسري'];
export default function CrmPage() {
  return (
    <BrowserFrame url="crm.dheelplus.sa">
      <AdminShell title="صندوق الوارد CRM">
        <div className="chat-layout">
          <aside className="card stat"><button className="btn" style={{width:'100%'}}>+ محادثة جديدة</button><h3>المحادثات</h3><input className="input" placeholder="البحث في المحادثات..."/>{people.map((p,i)=><div className="field" key={p}><b>{p}</b><p className="muted">السلام عليكم، أود الاستفسار عن...</p><span className="badge green">واتساب</span>{i<3 && <span className="badge purple">{i+1}</span>}</div>)}</aside>
          <main className="card stat"><h2>سارة محمد</h2><div className="message out">السلام عليكم، أود الاستفسار عن حجز سيارة تويوتا كامري 2024</div><div className="message in">وعليكم السلام سارة، يسعدني مساعدتك في حجز تويوتا كامري 2024.</div><div className="message out">أريد معرفة الأسعار والتوافر للألوان المتاحة</div><div className="message in">متوفر حالياً: أبيض لؤلؤي، فضي معدني، أسود. الأسعار تشمل الضريبة.</div><div className="card stat" style={{background:'#fbf7ff'}}><span className="badge purple">BETA</span><h3>اقتراحات الذكاء الاصطناعي</h3><p>تم حجز تويوتا كامري 2024 لون أبيض لؤلؤي بنجاح. سيتم التواصل خلال 30 دقيقة لتأكيد موعد الاستلام.</p><button className="btn">استخدام الاقتراح</button></div><div style={{display:'flex', gap:10}}><input className="input" placeholder="اكتب رسالتك هنا..."/><button className="btn">إرسال</button></div></main>
          <aside className="card stat"><h3>بيانات العميل</h3><div style={{fontSize:80}}>👩</div><b>سارة محمد</b><p className="muted">+966 50 123 4567</p><h3>آخر حجز</h3><div className="small-car">🚘</div><p>تويوتا كامري 2024 • مؤكد</p><button className="btn-outline">عرض التفاصيل</button><h3>أدوات سريعة</h3>{['إنشاء حجز جديد','إرسال عرض سعر','إضافة ملاحظة','تصعيد المحادثة'].map(x=><button className="btn-outline" style={{width:'100%', marginBottom:8}} key={x}>{x}</button>)}</aside>
        </div>
      </AdminShell>
    </BrowserFrame>
  );
}
