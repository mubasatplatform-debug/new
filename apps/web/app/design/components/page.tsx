import Link from 'next/link';
import { Logo } from '@/components/Brand';
import { CarCard, StatCard, PromoBanner } from '@/components/Cards';
import { cars } from '@/lib/data';

const Section = ({ title, children, hint }: { title: string; children: React.ReactNode; hint?: string }) => (
  <section className="section">
    <div className="row aic between mb-16 wrap gap-8">
      <h2 className="h2" style={{ margin: 0, color: 'var(--purple)' }}>{title}</h2>
      {hint && <span className="caption">{hint}</span>}
    </div>
    {children}
  </section>
);

export default function ComponentsLibrary() {
  return (
    <main style={{ minHeight: '100vh', background: '#fbf9ff' }}>
      <header className="header" style={{ padding: '20px 0' }}>
        <div className="container nav" style={{ height: 'auto' }}>
          <Logo />
          <div className="crumbs" style={{ flex: 1, marginInlineStart: 16 }}>
            <Link href="/design">المعرض</Link><span className="sep">/</span>
            <Link href="/design/system">Tokens</Link><span className="sep">/</span>
            <span className="active">Components</span>
          </div>
          <Link className="btn-ghost" href="/design/flow">User Journeys ←</Link>
        </div>
      </header>

      <div className="container" style={{ padding: '32px 0 64px' }}>
        <div className="mb-24">
          <span className="caption">Phase 03 — Library</span>
          <h1 className="h1" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>Components Library</h1>
          <p className="body-l muted" style={{ margin: 0 }}>40+ مكوّن قابل لإعادة الاستخدام مع كل حالاته. كل مكوّن هنا يستخدم نفس الـ Tokens.</p>
        </div>

        <Section title="Buttons" hint="5 variants × 3 sizes × 5 states">
          <div className="preview">
            <button className="btn btn-sm">Secondary sm</button>
            <button className="btn">Secondary</button>
            <button className="btn btn-lg">Secondary lg</button>
            <button className="btn-orange">Primary CTA</button>
            <button className="btn-orange btn-lg">احجز الآن ←</button>
            <button className="btn-outline">Outline</button>
            <button className="btn-ghost" style={{ background: 'var(--purple)', color: 'white' }}>Ghost on dark</button>
            <button className="btn-danger">Danger</button>
            <button className="btn" style={{ opacity: .5 }} disabled>Disabled</button>
            <button className="btn"><span className="skeleton" style={{ width: 16, height: 16, borderRadius: 999 }} />Loading…</button>
            <button className="btn-icon btn-orange">+</button>
          </div>
        </Section>

        <Section title="Inputs & Forms" hint="Text, Phone, OTP, Date, Currency, Checkbox, Switch">
          <div className="grid grid-2 gap-16">
            <div className="card p-24 stack gap-16">
              <div>
                <label className="label">الاسم الكامل</label>
                <div className="input-group"><input placeholder="مثلاً: محمد عبدالله" defaultValue="" /></div>
              </div>
              <div>
                <label className="label">رقم الجوال</label>
                <div className="input-group">
                  <input placeholder="5x xxx xxxx" defaultValue="" />
                  <span className="suffix">+966</span>
                </div>
                <p className="help">سنرسل رمز التحقق على هذا الرقم.</p>
              </div>
              <div>
                <label className="label">رقم الهوية / الإقامة</label>
                <div className="input-group is-error"><input defaultValue="10******" /></div>
                <p className="error-text">رقم الهوية غير صالح، يجب 10 أرقام.</p>
              </div>
              <div>
                <label className="label">السعر اليومي</label>
                <div className="input-group is-success">
                  <input defaultValue="199" className="numeric" />
                  <span className="suffix">ر.س</span>
                </div>
                <p className="help">شامل ضريبة القيمة المضافة.</p>
              </div>
            </div>
            <div className="card p-24 stack gap-16">
              <div>
                <label className="label">رمز التحقق OTP</label>
                <div className="otp">
                  <span className="box filled">9</span>
                  <span className="box filled">6</span>
                  <span className="box filled">2</span>
                  <span className="box active">_</span>
                  <span className="box">_</span>
                  <span className="box">_</span>
                </div>
                <p className="help" style={{ textAlign: 'center', marginTop: 12 }}>أعد الإرسال خلال 0:42</p>
              </div>
              <div>
                <label className="label">الموافقة</label>
                <div className="row gap-12 aic"><span className="checkbox checked">✓</span><span>أقبل الشروط والأحكام</span></div>
                <div className="row gap-12 aic mt-8"><span className="checkbox">·</span><span>أرغب باستلام العروض</span></div>
              </div>
              <div>
                <label className="label">نوع التأجير</label>
                <div className="row gap-12 aic"><span className="radio-i checked" /><span>تأجير شهري</span></div>
                <div className="row gap-12 aic mt-8"><span className="radio-i" /><span>تأجير يومي</span></div>
                <div className="row gap-12 aic mt-8"><span className="radio-i" /><span>طويل الأمد</span></div>
              </div>
              <div className="row gap-16 aic between">
                <span>إشعارات WhatsApp</span>
                <span className="switch on" />
              </div>
              <div className="row gap-16 aic between">
                <span>إشعارات SMS</span>
                <span className="switch" />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Stepper" hint="Booking flow indicator">
          <div className="card">
            <div className="stepper">
              <div className="step done"><span className="num">✓</span><span className="lbl">النوع</span></div>
              <span className="bar" />
              <div className="step done"><span className="num">✓</span><span className="lbl">الموقع</span></div>
              <span className="bar" />
              <div className="step done"><span className="num">✓</span><span className="lbl">التاريخ</span></div>
              <span className="bar" />
              <div className="step current"><span className="num">4</span><span className="lbl">السيارة</span></div>
              <span className="bar" />
              <div className="step"><span className="num">5</span><span className="lbl">التأمين</span></div>
              <span className="bar" />
              <div className="step"><span className="num">6</span><span className="lbl">الإضافات</span></div>
              <span className="bar" />
              <div className="step"><span className="num">7</span><span className="lbl">الدفع</span></div>
            </div>
          </div>
        </Section>

        <Section title="Cards" hint="Car, Stat, Promo, Booking, Customer">
          <div className="grid grid-3 gap-16">
            {cars.slice(0, 3).map(car => <CarCard car={car} key={car.id} />)}
          </div>
          <div className="grid grid-4 gap-16 mt-16">
            <StatCard label="السيارات المتاحة" value="384" delta="+8%" tone="green" />
            <StatCard label="حجوزات اليوم" value="42" delta="+12%" tone="green" />
            <StatCard label="إيرادات الشهر" value="2.4M ر.س" delta="+18%" tone="orange" />
            <StatCard label="متأخرات" value="3" delta="-2" tone="red" />
          </div>
          <div className="mt-16"><PromoBanner /></div>
        </Section>

        <Section title="Tables & Data Display" hint="Sortable, filtered, paginated">
          <div className="table-wrap">
            <div className="table-toolbar">
              <div className="row gap-8 aic">
                <div className="input-group" style={{ minWidth: 240 }}><input placeholder="🔎 ابحث في الحجوزات..." /></div>
                <button className="btn-outline btn-sm">المدينة ▾</button>
                <button className="btn-outline btn-sm">الحالة ▾</button>
                <button className="btn-outline btn-sm">آخر 30 يوم ▾</button>
              </div>
              <div className="row gap-8 aic">
                <span className="caption">5 حجوزات</span>
                <button className="btn-orange btn-sm">+ حجز جديد</button>
              </div>
            </div>
            <table className="table">
              <thead><tr>
                <th>رقم الحجز</th>
                <th>العميل</th>
                <th>السيارة</th>
                <th>الفترة</th>
                <th>المبلغ</th>
                <th>الحالة</th>
                <th>إجراء</th>
              </tr></thead>
              <tbody>
                <tr><td className="numeric">#DP-78452</td><td>شركة السيف للتجارة</td><td>تويوتا كامري 2024</td><td>14 → 16 مايو</td><td className="numeric">1,899 ر.س</td><td><span className="badge green">مؤكدة</span></td><td><button className="row-action">عرض</button></td></tr>
                <tr><td className="numeric">#DP-78451</td><td>محمد خالد</td><td>هيونداي توسان 2024</td><td>14 → 17 مايو</td><td className="numeric">2,499 ر.س</td><td><span className="badge green">مؤكدة</span></td><td><button className="row-action">عرض</button></td></tr>
                <tr><td className="numeric">#DP-78450</td><td>شركة النور</td><td>كيا سبورتاج 2024</td><td>13 → 15 مايو</td><td className="numeric">1,799 ر.س</td><td><span className="badge purple">مكتملة</span></td><td><button className="row-action">عرض</button></td></tr>
                <tr><td className="numeric">#DP-78449</td><td>سارة عبدالله</td><td>تويوتا كورولا 2024</td><td>13 → 14 مايو</td><td className="numeric">1,499 ر.س</td><td><span className="badge orange">قيد المراجعة</span></td><td><button className="row-action">عرض</button></td></tr>
                <tr><td className="numeric">#DP-78448</td><td>أحمد الفوزان</td><td>نيسان كيكس 2024</td><td>12 → 14 مايو</td><td className="numeric">1,199 ر.س</td><td><span className="badge red">ملغاة</span></td><td><button className="row-action">عرض</button></td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Tabs & Breadcrumbs">
          <div className="card mb-16">
            <div className="tabs">
              <button className="tab active">نظرة عامة</button>
              <button className="tab">المواصفات</button>
              <button className="tab">الأسعار</button>
              <button className="tab">الموقع</button>
              <button className="tab">التقييمات (12)</button>
            </div>
            <div className="p-24">
              <p className="muted" style={{ margin: 0 }}>محتوى التبويب النشط يظهر هنا مع نفس النمط البصري للبطاقات.</p>
            </div>
          </div>
          <div className="crumbs">
            <Link href="/">الرئيسية</Link><span className="sep">/</span>
            <Link href="/fleet">الأسطول</Link><span className="sep">/</span>
            <Link href="/fleet">سيدان</Link><span className="sep">/</span>
            <span className="active">تويوتا كامري 2024</span>
          </div>
        </Section>

        <Section title="Toasts & Alerts">
          <div className="stack gap-12">
            <div className="toast success"><strong>تم تأكيد الحجز.</strong> سيصلك تأكيد على واتساب خلال دقائق.</div>
            <div className="toast warn"><strong>صلاحية الرخصة قاربت على الانتهاء.</strong> رجاءً جدّدها قبل 30 يوم.</div>
            <div className="toast danger"><strong>تعذّر إتمام الدفع.</strong> راجع بياناتك أو اختر طريقة دفع أخرى.</div>
            <div className="toast info"><strong>تحديث في الأسعار.</strong> تحقق من باقات التأجير طويل الأمد الجديدة.</div>
          </div>
        </Section>

        <Section title="Modal / Dialog">
          <div className="modal-backdrop">
            <div className="modal">
              <span className="caption">تأكيد العملية</span>
              <h3 className="h3" style={{ margin: '4px 0 12px', color: 'var(--purple)' }}>هل تريد إلغاء الحجز #DP-78452؟</h3>
              <p className="muted" style={{ margin: 0 }}>سيتم إعادة المبلغ المدفوع للمحفظة خلال 3 أيام عمل وفق سياسة الإلغاء.</p>
              <div className="row gap-8 mt-24 jce">
                <button className="btn-outline">رجوع</button>
                <button className="btn-danger">إلغاء الحجز</button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Charts (visual)">
          <div className="grid grid-3 gap-16">
            <div className="card p-20">
              <span className="caption">إيرادات آخر 7 أيام</span>
              <h3 className="h3 numeric" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>342,800 ر.س</h3>
              <div className="bars">
                <span className="bar" style={{ height: '40%' }} />
                <span className="bar" style={{ height: '65%' }} />
                <span className="bar" style={{ height: '50%' }} />
                <span className="bar o" style={{ height: '85%' }} />
                <span className="bar" style={{ height: '70%' }} />
                <span className="bar" style={{ height: '55%' }} />
                <span className="bar o" style={{ height: '90%' }} />
              </div>
            </div>
            <div className="card p-20 stack aic">
              <span className="caption">معدّل استخدام الأسطول</span>
              <div className="donut"><div className="donut-center"><strong className="numeric" style={{ color: 'var(--purple)', fontSize: 22 }}>85%</strong></div></div>
            </div>
            <div className="card p-20">
              <span className="caption">حجوزات اليوم</span>
              <h3 className="h3 numeric" style={{ margin: '4px 0 12px', color: 'var(--purple)' }}>42 حجز</h3>
              <div className="spark" />
              <div className="row gap-8 mt-12 wrap">
                <span className="badge green">+12%</span>
                <span className="caption">مقارنة بأمس</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Avatar & List Item">
          <div className="card p-20 stack gap-12">
            {[
              ['م', 'محمد العتيبي', 'GOLD • 2,450 نقطة', 'green'],
              ['س', 'سارة العمري', 'SILVER • 980 نقطة', 'gray'],
              ['أ', 'أحمد الزهراني', 'PLATINUM • 5,800 نقطة', 'purple'],
              ['ف', 'فاطمة الشمري', 'VIP • 12,200 نقطة', 'orange']
            ].map(([letter, name, role, tone]) => (
              <div key={String(name)} className="row aic gap-12">
                <div className="avatar lg">{letter}</div>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: 'var(--purple)' }}>{name}</strong>
                  <div className="caption">{role}</div>
                </div>
                <span className={`badge ${tone}`}>عضو</span>
                <button className="row-action">عرض الملف ←</button>
              </div>
            ))}
          </div>
        </Section>

        <Section title="QR (ZATCA) & Signature">
          <div className="grid grid-2 gap-16">
            <div className="card p-24 row aic gap-16">
              <div className="qr-block" />
              <div>
                <span className="caption">ZATCA QR</span>
                <h3 className="h3" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>فاتورة #INV-2024-1042</h3>
                <p className="muted body-s" style={{ margin: 0 }}>المعرّف الضريبي 300012345600003 — مولّد وفق متطلّبات الفاتورة الإلكترونية المرحلة الثانية.</p>
              </div>
            </div>
            <div className="card p-24 stack gap-12">
              <span className="caption">توقيع العميل عند التسليم</span>
              <div style={{ height: 140, border: '2px dashed var(--neutral-300)', borderRadius: 14, position: 'relative' }}>
                <svg viewBox="0 0 200 60" style={{ position: 'absolute', inset: '20px 30px', width: 'calc(100% - 60px)', height: 100 }}>
                  <path d="M5 40 Q 20 5, 40 30 T 80 25 Q 100 50, 120 20 T 170 30" fill="none" stroke="var(--purple)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="row gap-8 jce">
                <button className="btn-outline btn-sm">مسح</button>
                <button className="btn btn-sm">حفظ</button>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Empty / Loading States">
          <div className="grid grid-2 gap-16">
            <div className="card empty">
              <div className="ill">📭</div>
              <h3>لا توجد حجوزات بعد</h3>
              <p>ابدأ رحلتك مع ديل Plus بحجز سيارتك الأولى.</p>
              <Link href="/fleet" className="btn-orange">استعرض الأسطول ←</Link>
            </div>
            <div className="card p-20 stack gap-12">
              <span className="caption">Loading skeleton</span>
              <div className="skeleton" style={{ height: 22, width: '60%' }} />
              <div className="skeleton" style={{ height: 14, width: '90%' }} />
              <div className="skeleton" style={{ height: 14, width: '80%' }} />
              <div className="row gap-12">
                <div className="skeleton" style={{ height: 120, flex: 1, borderRadius: 14 }} />
                <div className="skeleton" style={{ height: 120, flex: 1, borderRadius: 14 }} />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
