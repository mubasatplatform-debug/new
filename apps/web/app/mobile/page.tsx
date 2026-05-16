import Link from 'next/link';
import { Logo } from '@/components/Brand';

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="mobile-frame">{children}</div>
);

export default function MobileShowcase() {
  return (
    <main style={{ minHeight: '100vh', background: '#fbf9ff' }}>
      <header className="header" style={{ padding: '20px 0' }}>
        <div className="container nav" style={{ height: 'auto' }}>
          <Logo />
          <div className="crumbs" style={{ flex: 1, marginInlineStart: 16 }}>
            <Link href="/design">المعرض</Link><span className="sep">/</span>
            <span className="active">Mobile App</span>
          </div>
        </div>
      </header>

      <div className="container" style={{ padding: '24px 0 64px' }}>
        <div className="mb-24">
          <span className="caption">Phase 09 — Mobile</span>
          <h1 className="h1" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>تطبيق ديل Plus للموبايل</h1>
          <p className="body-l muted" style={{ margin: 0 }}>معاينة الشاشات الأساسية داخل إطار الجوال (iPhone 360px).</p>
        </div>

        <div className="grid grid-3 gap-16" style={{ alignItems: 'flex-start' }}>
          {/* Splash */}
          <Frame>
            <div style={{ height: '100%', background: 'linear-gradient(135deg, var(--purple-800), var(--purple-500))', color: 'white', display: 'flex', flexDirection: 'column' }}>
              <div className="mobile-status" style={{ color: 'white' }}><span>9:41</span><span>📶 100%</span></div>
              <div style={{ flex: 1, display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
                <div>
                  <div className="logo" style={{ fontSize: 56, justifyContent: 'center' }}><small style={{ fontSize: 28 }}>Plus</small>ديل</div>
                  <p style={{ opacity: .8, marginTop: 12 }}>منصّة سعودية لتأجير السيارات</p>
                </div>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,.2)', marginInline: 24, borderRadius: 999, marginBottom: 32, overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: '60%', background: 'var(--orange-400)' }} />
              </div>
            </div>
          </Frame>

          {/* Onboarding */}
          <Frame>
            <div style={{ height: '100%', background: 'white', display: 'flex', flexDirection: 'column' }}>
              <div className="mobile-status"><span>9:41</span><span>📶 100%</span></div>
              <div style={{ flex: 1, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 96, marginTop: 24 }}>🚗</div>
                <h2 style={{ color: 'var(--purple)', fontSize: 24 }}>سيارتك في دقائق</h2>
                <p className="muted body-s">احجز، ادفع، واستلم — كل هذا من جوالك بدون أوراق.</p>
                <div className="row gap-8 jcc mt-16">
                  <span className="pill active" style={{ width: 24, padding: '4px' }}> </span>
                  <span className="pill" style={{ width: 8, padding: '4px' }}> </span>
                  <span className="pill" style={{ width: 8, padding: '4px' }}> </span>
                </div>
              </div>
              <div style={{ padding: 16 }}>
                <button className="btn-orange btn-block btn-lg">التالي ←</button>
                <button className="btn-ghost btn-block mt-8" style={{ background: 'transparent', color: 'var(--muted)' }}>تخطّي</button>
              </div>
            </div>
          </Frame>

          {/* Home */}
          <Frame>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="mobile-status"><span>9:41</span><span>📶 100%</span></div>
              <div className="mobile-screen" style={{ flex: 1, paddingTop: 12 }}>
                <div className="row aic between mb-16">
                  <div>
                    <span className="caption">صباح الخير</span>
                    <h3 style={{ color: 'var(--purple)', margin: 0 }}>محمد ⭐</h3>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div className="avatar" style={{ width: 36, height: 36, fontSize: 14 }}>م</div>
                    <span style={{ position: 'absolute', top: -4, insetInlineStart: -4, width: 14, height: 14, borderRadius: 999, background: 'var(--danger)', color: 'white', fontSize: 9, display: 'grid', placeItems: 'center', fontWeight: 800 }}>3</span>
                  </div>
                </div>
                <div className="card p-16" style={{ background: 'linear-gradient(135deg, var(--purple-700), var(--purple-500))', color: 'white' }}>
                  <span style={{ opacity: .8, fontSize: 11 }}>الرصيد</span>
                  <div className="numeric" style={{ fontSize: 24, fontWeight: 900 }}>1,672 ر.س</div>
                  <div className="row gap-4 mt-8">
                    <span className="badge orange" style={{ fontSize: 10 }}>GOLD</span>
                    <span className="badge" style={{ background: 'rgba(255,255,255,.2)', color: 'white', fontSize: 10 }}>2,450 نقطة</span>
                  </div>
                </div>
                <div className="grid grid-4 gap-8 mt-12">
                  {[['📅','حجز'],['🚗','أسطولي'],['📋','العقد'],['🧾','فاتورة']].map(([icon, label]) => (
                    <div key={label} className="surface-1 p-8" style={{ textAlign: 'center', fontSize: 11 }}>
                      <div style={{ fontSize: 22 }}>{icon}</div>
                      <strong style={{ color: 'var(--purple)', fontSize: 11 }}>{label}</strong>
                    </div>
                  ))}
                </div>
                <h4 className="h4" style={{ marginTop: 16, marginBottom: 8, color: 'var(--purple)', fontSize: 14 }}>الحجز الحالي</h4>
                <div className="card p-12">
                  <div className="row aic gap-8">
                    <span style={{ fontSize: 28 }}>🚘</span>
                    <div style={{ flex: 1 }}>
                      <strong style={{ fontSize: 12, color: 'var(--purple)' }}>كامري 2024</strong>
                      <p className="caption" style={{ margin: 0 }}>22 يوم متبقي</p>
                    </div>
                  </div>
                  <div style={{ height: 4, background: 'var(--neutral-200)', borderRadius: 999, marginTop: 8, overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: '27%', background: 'var(--orange-400)' }} />
                  </div>
                </div>
              </div>
              <div className="mobile-tabs">
                <div className="tab-i active">🏠<span>الرئيسية</span></div>
                <div className="tab-i">🔍<span>بحث</span></div>
                <div className="tab-i">📋<span>حجوزاتي</span></div>
                <div className="tab-i">⭐<span>الولاء</span></div>
                <div className="tab-i">👤<span>الحساب</span></div>
              </div>
            </div>
          </Frame>

          {/* Search */}
          <Frame>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="mobile-status"><span>9:41</span><span>📶 100%</span></div>
              <div className="mobile-screen" style={{ flex: 1 }}>
                <h3 style={{ margin: 0, color: 'var(--purple)' }}>اختر سيارتك</h3>
                <div className="input-group mt-12"><input placeholder="🔎 ابحث..." style={{ fontSize: 13 }} /></div>
                <div className="row gap-4 mt-12 wrap">
                  {['الكل','سيدان','SUV','اقتصادية','فاخرة'].map((c, i) =>
                    <span key={c} className={`pill ${i === 0 ? 'active' : ''}`} style={{ fontSize: 11, padding: '6px 12px' }}>{c}</span>
                  )}
                </div>
                <div className="stack gap-8 mt-16">
                  {['🚘 كامري', '🚙 توسان', '🚙 سبورتاج'].map((c, i) => (
                    <div key={c} className="card p-12 row gap-12 aic">
                      <div style={{ fontSize: 32 }}>{c.split(' ')[0]}</div>
                      <div style={{ flex: 1 }}>
                        <strong style={{ fontSize: 12, color: 'var(--purple)' }}>{c.split(' ')[1]} 2024</strong>
                        <p className="caption" style={{ margin: 0 }}>أوتوماتيك • سيدان</p>
                      </div>
                      <div style={{ textAlign: 'end' }}>
                        <strong className="numeric" style={{ fontSize: 14, color: 'var(--orange-500)' }}>{[199,229,219][i]}</strong>
                        <small className="caption">/ يوم</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Frame>

          {/* OTP */}
          <Frame>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="mobile-status"><span>9:41</span><span>📶 100%</span></div>
              <div className="mobile-screen" style={{ flex: 1, padding: 32, textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginTop: 32 }}>🔐</div>
                <h3 style={{ color: 'var(--purple)', margin: '12px 0 4px' }}>رمز التحقّق</h3>
                <p className="muted body-s">أرسلنا رمزاً إلى</p>
                <strong className="numeric" style={{ color: 'var(--purple)' }}>+966 5x ••• 0289</strong>
                <div className="otp" style={{ margin: '24px 0', justifyContent: 'center' }}>
                  <span className="box filled" style={{ width: 36, height: 44, fontSize: 20 }}>9</span>
                  <span className="box filled" style={{ width: 36, height: 44, fontSize: 20 }}>6</span>
                  <span className="box filled" style={{ width: 36, height: 44, fontSize: 20 }}>2</span>
                  <span className="box active" style={{ width: 36, height: 44, fontSize: 20 }}>_</span>
                  <span className="box" style={{ width: 36, height: 44, fontSize: 20 }}>_</span>
                  <span className="box" style={{ width: 36, height: 44, fontSize: 20 }}>_</span>
                </div>
                <p className="caption">أعد الإرسال خلال 0:42</p>
              </div>
            </div>
          </Frame>

          {/* Live Track */}
          <Frame>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="mobile-status"><span>9:41</span><span>📶 100%</span></div>
              <div className="map-canvas" style={{ flex: 1, height: 'auto' }}>
                <div className="map-grid" />
                <div className="map-pin pin-1 orange" style={{ minWidth: 90, fontSize: 11 }}><b>المندوب</b></div>
                <div className="map-pin pin-3 purple" style={{ minWidth: 70, fontSize: 11 }}><b>أنت</b></div>
              </div>
              <div style={{ padding: 16, background: 'white' }}>
                <div className="row aic gap-12">
                  <div className="avatar">م</div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: 'var(--purple)', fontSize: 13 }}>محمد القحطاني</strong>
                    <p className="caption" style={{ margin: 0 }}>4.9 ⭐ • وصول بعد 9 د</p>
                  </div>
                  <button className="btn-orange btn-sm">📞</button>
                </div>
              </div>
            </div>
          </Frame>
        </div>

        <div className="card p-24 mt-32" style={{ background: 'var(--purple-50)', border: '1px solid var(--purple-200)' }}>
          <strong style={{ color: 'var(--purple)' }}>📲 تطبيق متاح على iOS & Android</strong>
          <p className="muted body-s" style={{ margin: '4px 0 0' }}>وضع داكن، تنبيهات حية، قبول دفع مدى/Apple Pay/STC Pay، يعمل دون اتصال للوظائف الأساسية.</p>
        </div>
      </div>
    </main>
  );
}
