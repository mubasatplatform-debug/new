import Link from 'next/link';
import { BookingShell } from '@/components/BookingShell';

const plans = [
  { id: 'basic', name: 'تأمين أساسي', desc: 'يلبّي الحد الأدنى المطلوب', price: 0, includes: ['أضرار الطرف الثالث','المسؤولية المدنية'], excludes: ['تصادم السيارة','الزجاج','السرقة'] },
  { id: 'standard', name: 'تأمين متوسط', desc: 'الأنسب لمعظم العملاء', price: 49, includes: ['الأساسي', 'تصادم السيارة', 'الزجاج', 'إصابات الركاب'], excludes: ['السرقة','الكوارث الطبيعية'], popular: true },
  { id: 'comprehensive', name: 'تأمين شامل', desc: 'تغطية كاملة بدون قلق', price: 99, includes: ['الكل','السرقة','الحرائق','الكوارث الطبيعية','سيارة بديلة'], excludes: [] }
];

export default function BookingInsurancePage() {
  return (
    <BookingShell current="insurance" summary={
      <div className="stack gap-12">
        <Sum k="السيارة" v="تويوتا كامري 2024" />
        <Sum k="المدة" v="30 يوم" />
        <Sum k="التأمين" v="متوسط" highlight />
        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
        <Sum k="إيجار شهري" v="2,999 ر.س" />
        <Sum k="تأمين × 30" v="1,470 ر.س" />
        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)' }} />
        <div className="row between">
          <strong>الإجمالي</strong>
          <strong className="numeric" style={{ color: 'var(--orange-500)' }}>4,469 ر.س</strong>
        </div>
      </div>
    }>
      <div className="card p-32">
        <span className="caption">الخطوة 5 من 11</span>
        <h1 className="h1" style={{ marginTop: 4, marginBottom: 8, color: 'var(--purple)' }}>اختر التأمين المناسب</h1>
        <p className="muted body-l">حماية السيارة وراحة بالك أولوية.</p>

        <div className="grid grid-3 gap-16 mt-24">
          {plans.map((p, i) => (
            <label key={p.id} className="card p-24 hover-lift" style={{
              cursor: 'pointer',
              border: i === 1 ? '2px solid var(--orange-400)' : '1px solid var(--neutral-200)',
              position: 'relative'
            }}>
              {p.popular && <span style={{ position: 'absolute', top: -12, insetInlineEnd: 16 }} className="badge orange">⭐ موصى به</span>}
              <div className="row aic gap-8 mb-12">
                <span className={`radio-i ${i === 1 ? 'checked' : ''}`} />
                <strong style={{ color: 'var(--purple)' }}>{p.name}</strong>
              </div>
              <p className="muted body-s">{p.desc}</p>
              <div className="row aie gap-4 mt-8">
                <span className="numeric" style={{ fontSize: 32, fontWeight: 900, color: 'var(--purple)' }}>{p.price === 0 ? 'مجاني' : `+${p.price}`}</span>
                {p.price > 0 && <span className="muted body-s">ر.س / يوم</span>}
              </div>
              <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)', margin: '12px 0' }} />
              <strong className="caption">يشمل:</strong>
              <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 8px' }}>
                {p.includes.map(x => <li key={x} className="row gap-8 aic body-s mb-4"><span style={{ color: 'var(--success)' }}>✓</span>{x}</li>)}
              </ul>
              {p.excludes.length > 0 && (<>
                <strong className="caption">لا يشمل:</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0' }}>
                  {p.excludes.map(x => <li key={x} className="row gap-8 aic body-s mb-4 muted"><span style={{ color: 'var(--danger)' }}>✗</span>{x}</li>)}
                </ul>
              </>)}
            </label>
          ))}
        </div>

        <div className="row gap-8 jce mt-24">
          <Link href="/booking/availability" className="btn-outline">رجوع</Link>
          <Link href="/booking/extras" className="btn-orange btn-lg">التالي ←</Link>
        </div>
      </div>
    </BookingShell>
  );
}

function Sum({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="row between">
      <span className="muted body-s">{k}</span>
      <span className="body-s" style={{ fontWeight: highlight ? 800 : 600, color: highlight ? 'var(--purple)' : undefined }}>{v}</span>
    </div>
  );
}
