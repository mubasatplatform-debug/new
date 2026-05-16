import { AdminShell } from '@/components/AdminShell';

export default function ReturnPage() {
  return (
    <AdminShell title="استلام السيارة — Return">
      <div className="card p-24 mb-16" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
        <div className="row aic gap-16">
          <div style={{ fontSize: 32 }}>🔄</div>
          <div style={{ flex: 1 }}>
            <strong style={{ color: 'var(--purple)' }}>إرجاع نشط — العقد CN-2024-000497</strong>
            <p className="muted body-s" style={{ margin: '4px 0 0' }}>هيونداي توسان 2024 — العميل: عبدالله القحطاني</p>
          </div>
          <button className="btn-orange btn-sm">⏱️ بدء الفحص</button>
        </div>
      </div>

      <div className="grid grid-3 gap-16 mb-16">
        <div className="card p-20">
          <span className="caption">القراءة الحالية</span>
          <h3 className="h3 numeric" style={{ margin: '4px 0', color: 'var(--purple)' }}>14,287 كم</h3>
          <p className="muted body-s" style={{ margin: 0 }}>الفرق: +1,837 كم (ضمن الحد)</p>
        </div>
        <div className="card p-20">
          <span className="caption">مستوى الوقود</span>
          <h3 className="h3" style={{ margin: '4px 0', color: 'var(--orange-500)' }}>50% ⚠️</h3>
          <p className="muted body-s" style={{ margin: 0 }}>تكلفة إعادة التعبئة: 90 ر.س</p>
        </div>
        <div className="card p-20">
          <span className="caption">تأخّر الإرجاع</span>
          <h3 className="h3" style={{ margin: '4px 0', color: 'var(--success)' }}>0 ساعة ✓</h3>
          <p className="muted body-s" style={{ margin: 0 }}>سُلِّم في الموعد</p>
        </div>
      </div>

      <h3 className="h3" style={{ color: 'var(--purple)' }}>🔍 مقارنة Vision AI: قبل / بعد</h3>
      <div className="card p-24 mb-16">
        <div className="grid grid-2 gap-16">
          <div>
            <span className="caption">قبل التسليم — 14 إبريل</span>
            <div style={{ aspectRatio: '4/3', borderRadius: 14, background: 'linear-gradient(135deg, var(--purple-100), var(--purple-200))', display: 'grid', placeItems: 'center', fontSize: 80, marginTop: 8, position: 'relative' }}>🚙</div>
          </div>
          <div>
            <span className="caption">عند الإرجاع — اليوم</span>
            <div style={{ aspectRatio: '4/3', borderRadius: 14, background: 'linear-gradient(135deg, var(--orange-100), var(--orange-200))', display: 'grid', placeItems: 'center', fontSize: 80, marginTop: 8, position: 'relative' }}>
              🚙
              <div style={{ position: 'absolute', top: '40%', insetInlineEnd: '30%', width: 50, height: 50, border: '3px dashed var(--danger)', borderRadius: '50%' }} />
              <span style={{ position: 'absolute', top: '38%', insetInlineEnd: '15%', background: 'var(--danger)', color: 'white', padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800 }}>خدش جديد</span>
            </div>
          </div>
        </div>

        <div className="card p-16 mt-16" style={{ background: 'var(--orange-50)', border: '1px solid var(--orange-200)' }}>
          <strong style={{ color: 'var(--orange-600)' }}>🤖 Vision AI كشف 1 ضرر جديد</strong>
          <ul className="muted body-m" style={{ lineHeight: 1.8, margin: '8px 0 0' }}>
            <li>خدش طولي على الباب الأمامي اليمين — احتمال 92%</li>
            <li>الطول التقديري: 14 سم — العمق: سطحي</li>
            <li>تكلفة الإصلاح المقدّرة: <strong>450 ر.س</strong></li>
          </ul>
          <div className="row gap-8 mt-12">
            <button className="btn btn-sm">✓ تأكيد الكشف وإصدار الفاتورة</button>
            <button className="btn-outline btn-sm">رفض الكشف</button>
          </div>
        </div>
      </div>

      <div className="grid grid-2 gap-16">
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>ملخص الفاتورة الإضافية</h3>
          <div className="stack gap-8">
            <div className="row between"><span className="muted">إعادة تعبئة الوقود</span><strong className="numeric">90 ر.س</strong></div>
            <div className="row between"><span className="muted">إصلاح خدش الباب</span><strong className="numeric">450 ر.س</strong></div>
            <div className="row between"><span className="muted">VAT 15%</span><strong className="numeric">81 ر.س</strong></div>
            <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
            <div className="row between"><strong>الإجمالي</strong><strong className="numeric" style={{ color: 'var(--orange-500)' }}>621 ر.س</strong></div>
          </div>
          <div className="row aic gap-12 mt-16 p-12 r-12" style={{ background: 'var(--neutral-50)' }}>
            <span style={{ fontSize: 24 }}>💰</span>
            <div style={{ flex: 1 }}>
              <strong style={{ color: 'var(--purple)' }}>الإيداع المحجوز: 1,500 ر.س</strong>
              <p className="muted body-s" style={{ margin: 0 }}>سيتم خصم 621 ر.س — يُسترد 879 ر.س</p>
            </div>
          </div>
        </div>

        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>الإجراء التالي</h3>
          <div className="stack gap-12">
            <button className="btn btn-block">🧽 إرسال للتنظيف</button>
            <button className="btn-outline btn-block">🔧 إرسال للصيانة</button>
            <button className="btn-outline btn-block">✓ إعادة للأسطول مباشرة</button>
            <button className="btn-orange btn-lg btn-block mt-12">إغلاق العقد وإصدار الفاتورة ←</button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
