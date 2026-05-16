import { PublicShell, PageHeader } from '@/components/PublicShell';

export default function ContactPage() {
  return (
    <PublicShell url="dheelplus.sa/contact">
      <PageHeader eyebrow="تواصل معنا" title="نحن هنا لخدمتك 24/7" sub="اختر الطريقة الأنسب لك — هاتف، واتساب، شات مباشر، أو بريد إلكتروني." />
      <div className="container">
        <section className="section grid grid-4 gap-16">
          {[
            { icon: '📞', label: 'الخط الموحّد', value: '920 028 090', sub: '24/7 على مدار السنة' },
            { icon: '💬', label: 'واتساب', value: '+966 50 028 0900', sub: 'رد خلال 5 دقائق' },
            { icon: '✉️', label: 'البريد الإلكتروني', value: 'info@dheelplus.sa', sub: 'رد خلال يوم عمل' },
            { icon: '🏢', label: 'العنوان', value: 'الرياض - العليا', sub: 'طريق الملك فهد' }
          ].map(c => (
            <div key={c.label} className="card p-20" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 38 }}>{c.icon}</div>
              <span className="caption">{c.label}</span>
              <h4 className="h4" style={{ margin: '4px 0 4px', color: 'var(--purple)' }}>{c.value}</h4>
              <p className="muted body-s" style={{ margin: 0 }}>{c.sub}</p>
            </div>
          ))}
        </section>

        <section className="section split-2">
          <div className="card p-32">
            <h2 className="h2" style={{ marginTop: 0, color: 'var(--purple)' }}>أرسل رسالة</h2>
            <p className="muted body-m">سيعود إليك فريق الدعم خلال 24 ساعة.</p>
            <div className="grid grid-2 gap-12 mt-16">
              <div><label className="label">الاسم</label><div className="input-group"><input placeholder="مثلاً: محمد العتيبي" /></div></div>
              <div><label className="label">البريد الإلكتروني</label><div className="input-group"><input placeholder="you@example.com" /></div></div>
              <div><label className="label">رقم الجوال</label><div className="input-group"><input placeholder="5x xxx xxxx" /><span className="suffix">+966</span></div></div>
              <div><label className="label">الموضوع</label><div className="input-group"><input placeholder="اختر الموضوع" /></div></div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="label">الرسالة</label>
                <div className="input-group" style={{ alignItems: 'flex-start' }}>
                  <textarea rows={5} placeholder="اكتب رسالتك هنا..." style={{ border: 0, outline: 0, flex: 1, padding: 12, background: 'transparent', resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
              </div>
            </div>
            <div className="row gap-8 between aic mt-16">
              <span className="caption">سيتم التعامل مع بياناتك وفق سياسة الخصوصية</span>
              <button className="btn-orange btn-lg">أرسل ←</button>
            </div>
          </div>
          <aside className="card p-24">
            <span className="caption">الفروع الرئيسية</span>
            <h3 className="h3" style={{ marginTop: 4, color: 'var(--purple)' }}>المقر الرئيسي</h3>
            <p className="muted body-m">طريق الملك فهد - حي العليا<br />الرياض 11564<br />المملكة العربية السعودية</p>
            <div className="map-canvas r-16 mt-16" style={{ height: 220 }}>
              <div className="map-grid" />
              <div className="map-pin pin-1 purple"><b>المقر</b><small>الرياض - العليا</small></div>
              <div className="map-pin pin-3 orange"><b>فرع جدة</b><small>التحلية</small></div>
              <div className="map-pin pin-2 green"><b>فرع الدمام</b><small>الكورنيش</small></div>
            </div>
          </aside>
        </section>
      </div>
    </PublicShell>
  );
}
