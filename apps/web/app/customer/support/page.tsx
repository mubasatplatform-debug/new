import { CustomerShell } from '@/components/CustomerShell';

export default function SupportPage() {
  return (
    <CustomerShell title="الدعم والمساعدة" active="/customer/support">
      <div className="split-3">
        <aside className="card p-16">
          <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>محادثاتي</h4>
          <div className="input-group mb-12"><input placeholder="🔎 ابحث..." /></div>
          {[
            { agent: 'سعد الشمري', last: 'سيتم تفعيل الكود خلال دقائق', time: '2:14 م', unread: 2, active: true },
            { agent: 'فاطمة العنزي', last: 'شكراً لتواصلك معنا', time: 'أمس' },
            { agent: 'AI Assistant', last: 'يمكنني تمديد العقد لك بضغطة واحدة', time: '12 مايو' },
            { agent: 'سعد الشمري', last: 'تم استلام الفاتورة بنجاح', time: '08 مايو' }
          ].map((c, i) => (
            <div key={i} className="row aic gap-12 p-12 r-12 mb-8" style={{ background: c.active ? 'var(--purple-50)' : 'transparent', cursor: 'pointer', border: c.active ? '1px solid var(--purple-200)' : '1px solid transparent' }}>
              <div className="avatar" style={{ background: c.agent.includes('AI') ? 'linear-gradient(135deg, var(--orange-400), var(--orange-500))' : undefined }}>{c.agent[0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="row between">
                  <strong style={{ color: 'var(--purple)', fontSize: 13 }}>{c.agent}</strong>
                  <small className="caption">{c.time}</small>
                </div>
                <p className="muted body-s" style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.last}</p>
              </div>
              {c.unread && <span className="badge purple">{c.unread}</span>}
            </div>
          ))}
        </aside>

        <main className="card" style={{ display: 'flex', flexDirection: 'column', minHeight: 600 }}>
          <div className="p-16" style={{ borderBottom: '1px solid var(--neutral-200)' }}>
            <div className="row aic gap-12">
              <div className="avatar">س</div>
              <div style={{ flex: 1 }}>
                <strong style={{ color: 'var(--purple)' }}>سعد الشمري</strong>
                <p className="caption" style={{ margin: 0 }}>● متصل الآن • وكيل خدمة العملاء</p>
              </div>
              <button className="btn-outline btn-sm">📞</button>
              <button className="btn-outline btn-sm">📹</button>
            </div>
          </div>

          <div style={{ flex: 1, padding: 16, background: 'var(--neutral-50)', overflowY: 'auto' }}>
            <div className="message in"><strong style={{ color: 'var(--purple)' }}>سعد:</strong> صباح الخير محمد، كيف أقدر أخدمك؟</div>
            <div className="message out"><strong>أنا:</strong> صباح النور، عندي حجز #DP-78452 وأبي أمدّد فترة العقد أسبوع</div>
            <div className="message in"><strong style={{ color: 'var(--purple)' }}>سعد:</strong> أكيد، تحت أمرك. فحصت الحجز، السيارة متاحة للأسبوع القادم.</div>
            <div className="message in" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
              <strong style={{ color: 'var(--purple)' }}>📋 طلب تمديد</strong>
              <p style={{ margin: '4px 0' }}>الحجز #DP-78452 — تمديد 7 أيام إضافية</p>
              <p className="numeric muted" style={{ margin: 0 }}>التكلفة الإضافية: 1,393 ر.س (شامل الضريبة)</p>
              <div className="row gap-8 mt-12">
                <button className="btn-orange btn-sm">✓ موافق ومتابعة</button>
                <button className="btn-outline btn-sm">رفض</button>
              </div>
            </div>
          </div>

          <div className="p-12" style={{ borderTop: '1px solid var(--neutral-200)' }}>
            <div className="input-group">
              <button className="btn-icon btn-outline" style={{ border: 0 }}>📎</button>
              <input placeholder="اكتب رسالة..." />
              <button className="btn-orange btn-sm">إرسال</button>
            </div>
          </div>
        </main>

        <aside className="card p-16">
          <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>سياق الحجز</h4>
          <div className="surface-2 p-16 r-16 stack gap-8">
            <div className="row between"><span className="muted body-s">رقم الحجز</span><strong className="numeric">#DP-78452</strong></div>
            <div className="row between"><span className="muted body-s">السيارة</span><span>كامري 2024</span></div>
            <div className="row between"><span className="muted body-s">من</span><span>14 مايو</span></div>
            <div className="row between"><span className="muted body-s">إلى</span><span>14 يونيو</span></div>
            <div className="row between"><span className="muted body-s">الحالة</span><span className="badge green">نشط</span></div>
          </div>

          <h4 className="h4" style={{ color: 'var(--purple)', marginBottom: 8 }}>إجراءات سريعة</h4>
          <div className="stack gap-8">
            <button className="btn-outline btn-sm btn-block">⬆️ تمديد العقد</button>
            <button className="btn-outline btn-sm btn-block">🔄 تغيير السيارة</button>
            <button className="btn-outline btn-sm btn-block">📥 تحميل العقد</button>
            <button className="btn-outline btn-sm btn-block">⚠️ بلاغ عن مشكلة</button>
          </div>
        </aside>
      </div>
    </CustomerShell>
  );
}
