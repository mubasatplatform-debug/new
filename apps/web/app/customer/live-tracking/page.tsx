import { CustomerShell } from '@/components/CustomerShell';

export default function LiveTrackingPage() {
  return (
    <CustomerShell title="تتبع التسليم" active="/customer/bookings/current">
      <div className="split-2">
        <div className="card p-12">
          <div className="map-canvas r-16" style={{ height: 540 }}>
            <div className="map-grid" />
            <div className="map-pin pin-3 purple"><b>أنت</b><small>الموقع المسجَّل</small></div>
            <div className="map-pin pin-1 orange"><b>المندوب</b><small>على بُعد 2.4 كم</small></div>
            <div className="geo geo-yellow" style={{ top: '40%', left: '40%' }}>📍 9 دقائق</div>
          </div>
          <div className="row aic gap-8 mt-12">
            <span className="badge orange">● مباشر</span>
            <span className="caption">تحديث الموقع كل 5 ثواني</span>
          </div>
        </div>

        <aside className="stack gap-16">
          <div className="card p-24">
            <span className="caption">حجز #DP-2024-78452</span>
            <h2 className="h2" style={{ margin: '4px 0 8px', color: 'var(--purple)' }}>المندوب في الطريق</h2>
            <p className="muted body-m">الوصول المتوقّع <strong style={{ color: 'var(--orange-500)' }}>9:35 ص</strong> (بعد 9 دقائق)</p>
          </div>

          <div className="card p-20">
            <div className="row aic gap-12">
              <div className="avatar lg">م</div>
              <div style={{ flex: 1 }}>
                <strong style={{ color: 'var(--purple)' }}>محمد القحطاني</strong>
                <p className="muted body-s" style={{ margin: 0 }}>4.9 ⭐ • 1,245 رحلة • منذ 2020</p>
              </div>
            </div>
            <div className="row gap-8 mt-16">
              <button className="btn-orange btn-block">📞 اتصال</button>
              <button className="btn-outline btn-block">💬 واتساب</button>
            </div>
          </div>

          <div className="card p-20">
            <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>السيارة</h4>
            <div className="row aic gap-12">
              <div style={{ fontSize: 56 }}>🚘</div>
              <div>
                <strong>تويوتا كامري 2024</strong>
                <p className="muted body-s" style={{ margin: '2px 0 0' }}>أبيض لؤلؤي • أ ب ج 1234</p>
              </div>
            </div>
          </div>

          <div className="card p-20">
            <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>قبل الاستلام</h4>
            <ul className="muted body-m" style={{ lineHeight: 2, paddingInlineStart: 16 }}>
              <li>جهّز الهوية ورخصة القيادة</li>
              <li>تأكّد من السيارة شكلياً</li>
              <li>وقّع على عقد التسليم</li>
            </ul>
          </div>
        </aside>
      </div>
    </CustomerShell>
  );
}
