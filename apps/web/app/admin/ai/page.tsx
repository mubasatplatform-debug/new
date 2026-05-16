import { BrowserFrame } from '@/components/Brand';
import { AdminShell } from '@/components/AdminShell';
import { StatCard } from '@/components/Cards';

export default function AiCenter() {
  return (
    <BrowserFrame url="admin.dheelplus.sa/ai">
      <AdminShell title="AI Command Center">
        <div className="grid" style={{gridTemplateColumns:'260px 1fr 300px'}}>
          <aside className="card stat"><button className="btn" style={{width:'100%'}}>+ محادثة جديدة</button><h3>المحادثات الحديثة</h3>{['تقرير الحجوزات اليومي','إنشاء عرض سعر','تحليل الإيرادات','عملاء متأخرين عن الدفع'].map(x=><p key={x}>⌁ {x}</p>)}</aside>
          <main className="card stat"><h2>مرحباً أحمد 👋 كيف أستطيع مساعدتك اليوم؟</h2><div className="message out">ما هي الحجوزات اليوم وأفضل السيارات أداءً؟</div><div className="message in">إليك ملخص أداء اليوم، مع أفضل السيارات من حيث الطلب والإيرادات.</div><div className="grid grid-4"><StatCard label="إجمالي الحجوزات" value="128" delta="+12%"/><StatCard label="إجمالي الإيرادات" value="SAR 240,560" delta="+18%"/><StatCard label="المبالغ المتأخرة" value="SAR 56,430" delta="-8%" tone="red"/><StatCard label="متوسط مدة الإيجار" value="3.6 يوم" delta="+4%"/></div><h3>توصيات ذكية</h3>{['زيادة توفر تويوتا كامري في فرع الرياض','تطبيق خصم خاص للعملاء الدائمين','مراجعة العملاء المتأخرين'].map(x=><div className="field" key={x}>⚡ {x}</div>)}<div style={{display:'flex', gap:10, marginTop:16}}><input className="input" placeholder="اكتب سؤالك هنا..."/><button className="btn">إرسال</button></div></main>
          <aside className="card stat"><h3>أدوات الذكاء الاصطناعي</h3>{[['إنشاء عرض سعر','green','Suggest Only'],['تعديل حجز','orange','Needs Confirmation'],['تطبيق خصم','orange','Needs Confirmation'],['إرسال إشعار','green','Auto Within Limits'],['إنشاء تقرير','green','Auto Within Limits']].map(([name,tone,label])=><div className="field" key={name}><b>{name}</b><br/><span className={`badge ${tone}`}>{label}</span></div>)}</aside>
        </div>
      </AdminShell>
    </BrowserFrame>
  );
}
