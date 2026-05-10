import { CustomerShell } from '@/components/CustomerShell';

const tiers = [
  { name: 'SILVER', range: '0 - 1,000', perks: 'دعم قياسي، خصم 5%', color: 'gray' },
  { name: 'GOLD', range: '1,000 - 5,000', perks: 'دعم سريع، خصم 10%، ترقية فئة', color: 'orange', current: true },
  { name: 'PLATINUM', range: '5,000 - 12,000', perks: 'مدير حساب، توصيل مجاني، 2x نقاط', color: 'purple' },
  { name: 'VIP', range: '+12,000', perks: 'كل المزايا + ترقية مجانية + شاحن سريع', color: 'green' }
];

const rewards = [
  { icon: '🎁', name: 'يوم تأجير مجاني', cost: 1500, save: '~250 ر.س' },
  { icon: '⬆️', name: 'ترقية فئة السيارة', cost: 800, save: '~150 ر.س' },
  { icon: '⛽', name: 'باقة وقود مجانية', cost: 600, save: '~100 ر.س' },
  { icon: '🚚', name: 'توصيل مجاني', cost: 300, save: '50 ر.س' },
  { icon: '☕', name: 'كوبون قهوة', cost: 200, save: '30 ر.س' },
  { icon: '🛡️', name: 'ترقية تأمين', cost: 1000, save: '~120 ر.س' }
];

export default function LoyaltyPage() {
  return (
    <CustomerShell title="الولاء والنقاط" active="/customer/loyalty">
      <section className="card p-32" style={{ background: 'linear-gradient(135deg, var(--orange-400), var(--orange-500))', color: 'white', marginBottom: 24 }}>
        <div className="row between aic gap-16 wrap">
          <div>
            <span className="caption" style={{ color: 'rgba(255,255,255,.85)' }}>عضويتك الحالية</span>
            <h2 className="h2" style={{ margin: '4px 0' }}>GOLD ⭐</h2>
            <p style={{ opacity: .9, margin: 0 }}>اقترب على PLATINUM — تحتاج 2,550 نقطة فقط</p>
          </div>
          <div style={{ textAlign: 'end' }}>
            <span className="caption" style={{ color: 'rgba(255,255,255,.85)' }}>رصيد النقاط</span>
            <div className="numeric" style={{ fontSize: 56, fontWeight: 900 }}>2,450</div>
          </div>
        </div>
        <div style={{ height: 12, background: 'rgba(255,255,255,.2)', borderRadius: 999, overflow: 'hidden', marginTop: 16 }}>
          <span style={{ display: 'block', height: '100%', width: '49%', background: 'white', borderRadius: 999 }} />
        </div>
        <div className="row between mt-8" style={{ fontSize: 12, opacity: .9 }}>
          <span>GOLD (1,000)</span>
          <span>PLATINUM (5,000)</span>
        </div>
      </section>

      <h3 className="h3" style={{ color: 'var(--purple)' }}>المستويات</h3>
      <div className="grid grid-4 gap-16 mb-24">
        {tiers.map(t => (
          <div key={t.name} className="card p-20" style={{ border: t.current ? '2px solid var(--orange-400)' : '1px solid var(--neutral-200)', position: 'relative' }}>
            {t.current && <span style={{ position: 'absolute', top: -12, insetInlineEnd: 16 }} className="badge orange">عضويتك</span>}
            <span className={`badge ${t.color}`}>{t.name}</span>
            <h4 className="h4 numeric" style={{ margin: '8px 0 4px', color: 'var(--purple)' }}>{t.range}</h4>
            <p className="muted body-s" style={{ margin: 0 }}>{t.perks}</p>
          </div>
        ))}
      </div>

      <h3 className="h3" style={{ color: 'var(--purple)' }}>المكافآت المتاحة</h3>
      <div className="grid grid-3 gap-16 mb-24">
        {rewards.map(r => (
          <div key={r.name} className="card p-20 hover-lift">
            <div style={{ fontSize: 38 }}>{r.icon}</div>
            <h4 className="h4" style={{ margin: '8px 0 4px', color: 'var(--purple)' }}>{r.name}</h4>
            <p className="muted body-s" style={{ margin: 0 }}>وفّر {r.save}</p>
            <div className="row between aic mt-12">
              <strong className="numeric" style={{ color: 'var(--orange-500)' }}>{r.cost.toLocaleString()} نقطة</strong>
              <button className="btn-orange btn-sm" disabled={r.cost > 2450}>{r.cost > 2450 ? 'غير كافٍ' : 'استبدل'}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-24" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
        <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>كيف تكسب نقاط أكثر؟</h3>
        <ul className="muted body-m" style={{ lineHeight: 1.9 }}>
          <li>كل ريال تنفقه = نقطة (مضاعف 2x للأعضاء PLATINUM)</li>
          <li>إحالة صديق ينضم: <strong>500 نقطة</strong></li>
          <li>تقييم رحلتك: <strong>50 نقطة</strong></li>
          <li>تفعيل الإيداع التلقائي: <strong>200 نقطة</strong></li>
        </ul>
      </div>
    </CustomerShell>
  );
}
