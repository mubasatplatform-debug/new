import { AdminShell } from '@/components/AdminShell';

export default function HandoverPage() {
  return (
    <AdminShell title="تسليم السيارة — Handover">
      <div className="card p-24 mb-16" style={{ background: 'var(--orange-50)', border: '1px solid var(--orange-200)' }}>
        <div className="row aic gap-16">
          <div style={{ fontSize: 32 }}>🚗</div>
          <div style={{ flex: 1 }}>
            <strong style={{ color: 'var(--orange-600)' }}>تسليم نشط — العقد CN-2024-000512</strong>
            <p className="muted body-s" style={{ margin: '4px 0 0' }}>تويوتا كامري 2024 (أ ب ج 1234) — العميل: محمد العتيبي</p>
          </div>
          <span className="badge orange">قيد التسليم</span>
        </div>
      </div>

      <div className="split-2">
        <div className="stack gap-16">
          <div className="card p-24">
            <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>قائمة الفحص الشكلي</h3>
            {[
              ['🔋 البطارية', true],
              ['⛽ الوقود (75%)', true],
              ['🛞 الإطارات الأربعة', true],
              ['🪟 الزجاج خالٍ من الكسور', true],
              ['💡 الأضواء الأمامية والخلفية', true],
              ['📻 الراديو والصوتيات', true],
              ['❄️ المكيّف يبرّد', true],
              ['🔧 العدّاد على 12,450 كم', false],
              ['🚨 إشارات التحذير منطفئة', false],
              ['📋 رخصة السيارة وكرت التأمين', false],
              ['🛡️ كفر السيارة وعدّة الإطار البديل', false]
            ].map(([label, done]) => (
              <label key={label as string} className="row aic gap-8 mb-8" style={{ cursor: 'pointer' }}>
                <span className={`checkbox ${done ? 'checked' : ''}`}>{done ? '✓' : ''}</span>
                <span style={{ flex: 1, opacity: done ? 1 : .7 }}>{label}</span>
                {done && <span className="caption">✓ 9:42 ص</span>}
              </label>
            ))}
          </div>

          <div className="card p-24">
            <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>الصور قبل التسليم (6/8)</h3>
            <div className="grid grid-4 gap-8">
              {['أمامي','خلفي','يمين','يسار','الداخلية','الكيلومتر','مؤشر الوقود','صدمات (إن وُجدت)'].map((label, i) => (
                <div key={label} style={{
                  height: 100, borderRadius: 12,
                  background: i < 6 ? 'var(--purple-100)' : 'var(--neutral-50)',
                  border: i < 6 ? '2px solid var(--purple-500)' : '2px dashed var(--neutral-300)',
                  display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: 11, fontWeight: 800, color: i < 6 ? 'var(--purple)' : 'var(--muted)'
                }}>
                  {i < 6 ? '📷 ✓' : '📷 +'}
                  <div>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="stack gap-16">
          <div className="card p-24">
            <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>توقيع العميل</h3>
            <p className="muted body-s">سيتم حفظ التوقيع رقمياً مع طابع الزمن.</p>
            <div style={{ height: 140, border: '2px dashed var(--neutral-300)', borderRadius: 14, position: 'relative', background: 'white', marginTop: 8 }}>
              <svg viewBox="0 0 200 60" style={{ position: 'absolute', inset: '20px 30px', width: 'calc(100% - 60px)', height: 100 }}>
                <path d="M5 40 Q 20 5, 40 30 T 80 25 Q 100 50, 120 20 T 170 30" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="row gap-8 mt-12">
              <button className="btn-outline btn-sm">مسح</button>
              <button className="btn btn-sm">حفظ التوقيع</button>
            </div>
          </div>

          <div className="card p-20">
            <span className="caption">معلومات الموظف</span>
            <div className="row aic gap-12 mt-8">
              <div className="avatar">س</div>
              <div>
                <strong style={{ color: 'var(--purple)' }}>سعد الحربي</strong>
                <p className="caption" style={{ margin: 0 }}>موظف تسليم — الرياض العليا</p>
              </div>
            </div>
            <div className="stack gap-4 mt-12 body-s">
              <div className="row between"><span className="muted">البدء</span><span className="numeric">9:25 ص</span></div>
              <div className="row between"><span className="muted">الوقت المنقضي</span><span className="numeric">17 دقيقة</span></div>
            </div>
          </div>

          <button className="btn-orange btn-lg btn-block">إكمال التسليم وتنشيط العقد ←</button>
        </aside>
      </div>
    </AdminShell>
  );
}
