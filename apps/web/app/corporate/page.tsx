import Link from 'next/link';
import { PublicShell, PageHeader } from '@/components/PublicShell';

export default function CorporatePage() {
  return (
    <PublicShell url="dheelplus.sa/corporate">
      <PageHeader eyebrow="تأجير الشركات B2B" title="حلول الأسطول للشركات السعودية" sub="عقود طويلة الأمد بأسعار خاصة، فواتير شهرية ZATCA، إدارة ذاتية لموظفيك." />
      <div className="container">
        <section className="section grid grid-3 gap-16">
          {[
            ['📋', 'عقود ذكية', 'عقد إطاري مع ملاحق شهرية، توقيع رقمي عبر Nafath، تجديد تلقائي'],
            ['💼', 'بوابة الشركة', 'كل موظفيك يحجزون من حسابك. حدود استخدام، تصنيف مراكز التكلفة، تقارير شهرية'],
            ['🧾', 'فاتورة موحّدة', 'فاتورة ZATCA شاملة لكل العقود — مرفقة QR ومتوافقة مع المرحلة الثانية'],
            ['🚗', 'أسطول حديث', 'موديلات 2024 وأحدث. تبديل مجاني عند الصيانة. صنف مختار لكل دور وظيفي'],
            ['📊', 'تقارير الإدارة', 'لوحة فيها استهلاك الوقود، الكيلومترات، المخالفات، الحوادث، المصروف الشهري'],
            ['👤', 'مدير حساب مخصص', 'شخص واحد للتواصل، استجابة خلال ساعة، اتفاقيات SLA مكتوبة']
          ].map(([icon, title, sub]) => (
            <div key={title as string} className="card p-24">
              <div style={{ fontSize: 40, marginBottom: 8 }}>{icon}</div>
              <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>{title}</h3>
              <p className="muted body-m" style={{ margin: 0 }}>{sub}</p>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="h2" style={{ color: 'var(--purple)' }}>عملاؤنا من الشركات</h2>
          <div className="card p-24 grid grid-5 gap-16">
            {['🏗️ أرامكو', '🏛️ سابك', '🏥 الموسى', '🛒 المراعي', '⚡ الأهلي'].map(c => (
              <div key={c} className="surface-2 p-16" style={{ textAlign: 'center', fontWeight: 800, color: 'var(--purple)' }}>{c}</div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="card p-32 split-2 gap-24">
            <div>
              <h2 className="h2" style={{ marginTop: 0, color: 'var(--purple)' }}>اطلب عرض سعر للشركة</h2>
              <p className="muted body-m">سيعود إليك مدير حساب خلال يوم عمل واحد.</p>
              <div className="grid grid-2 gap-12 mt-16">
                <div><label className="label">اسم الشركة</label><div className="input-group"><input placeholder="مثلاً: شركة ديل التجارية" /></div></div>
                <div><label className="label">السجل التجاري</label><div className="input-group"><input placeholder="10100xxxxxx" /></div></div>
                <div><label className="label">الشخص المسؤول</label><div className="input-group"><input placeholder="الاسم" /></div></div>
                <div><label className="label">رقم الجوال</label><div className="input-group"><input placeholder="5x xxx xxxx" /><span className="suffix">+966</span></div></div>
                <div style={{ gridColumn: '1 / -1' }}><label className="label">حجم الأسطول المطلوب</label><div className="row gap-8 wrap">{['1-10','11-30','31-100','+100'].map(x => <span key={x} className="pill">{x}</span>)}</div></div>
              </div>
              <button className="btn-orange btn-lg btn-block mt-16">اطلب العرض ←</button>
            </div>
            <div className="surface-2 p-24">
              <span className="caption">مزايا حصرية</span>
              <h3 className="h3" style={{ marginTop: 4, color: 'var(--purple)' }}>للشركات فقط</h3>
              <ul className="stack gap-8 muted body-m" style={{ paddingInlineStart: 18 }}>
                <li>خصم يصل إلى 25% على الأسعار العادية</li>
                <li>سداد خلال 30 يوم — بدون إيداع</li>
                <li>سيارة بديلة خلال ساعتين عند العطل</li>
                <li>تكامل مع ERPNext / Odoo / SAP</li>
                <li>توصيل السيارات لمقر الشركة</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
