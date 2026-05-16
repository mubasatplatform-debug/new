import { CustomerShell } from '@/components/CustomerShell';

export default function ProfilePage() {
  return (
    <CustomerShell title="الملف الشخصي" active="/customer/profile">
      <div className="card p-32 mb-24" style={{ background: 'linear-gradient(135deg, var(--purple-700), var(--purple-500))', color: 'white' }}>
        <div className="row aic gap-24">
          <div className="avatar lg" style={{ width: 96, height: 96, fontSize: 36 }}>م</div>
          <div style={{ flex: 1 }}>
            <h2 className="h2" style={{ marginTop: 0 }}>محمد عبدالله العتيبي</h2>
            <p style={{ opacity: .9, margin: 0 }}>عضو ديل Plus منذ مارس 2022</p>
            <div className="row gap-8 mt-8">
              <span className="badge orange">⭐ GOLD</span>
              <span className="badge green">✓ متحقّق Nafath</span>
              <span className="badge purple">2,450 نقطة</span>
            </div>
          </div>
          <button className="btn-orange">📤 تعديل الصورة</button>
        </div>
      </div>

      <div className="grid grid-2 gap-16">
        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>المعلومات الشخصية</h3>
          <div className="grid grid-2 gap-12 mt-12">
            <div><label className="label">الاسم الأول</label><div className="input-group"><input defaultValue="محمد" /></div></div>
            <div><label className="label">الاسم الأخير</label><div className="input-group"><input defaultValue="العتيبي" /></div></div>
            <div><label className="label">رقم الهوية</label><div className="input-group"><input defaultValue="1098765432" disabled /></div><p className="help">من أبشر — لا يمكن التعديل</p></div>
            <div><label className="label">تاريخ الميلاد</label><div className="input-group"><input defaultValue="22/03/1992" disabled /></div></div>
          </div>
        </div>

        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>التواصل</h3>
          <div className="stack gap-12 mt-12">
            <div>
              <label className="label">رقم الجوال</label>
              <div className="input-group is-success">
                <input defaultValue="50 028 0289" />
                <span className="suffix">+966</span>
              </div>
              <p className="help">✓ متحقّق</p>
            </div>
            <div>
              <label className="label">البريد الإلكتروني</label>
              <div className="input-group"><input defaultValue="m.alotaibi@example.com" /></div>
            </div>
            <div>
              <label className="label">العنوان</label>
              <div className="input-group"><input defaultValue="الرياض - حي العليا - شارع الأمير سلطان" /></div>
            </div>
          </div>
        </div>

        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>رخصة القيادة</h3>
          <div className="surface-2 p-16 r-16">
            <div className="row between mb-8">
              <span className="caption">رقم الرخصة</span>
              <strong className="numeric">1098765432</strong>
            </div>
            <div className="row between mb-8">
              <span className="caption">الفئة</span>
              <span>خاصة</span>
            </div>
            <div className="row between mb-8">
              <span className="caption">تاريخ الإصدار</span>
              <span>15/06/2018</span>
            </div>
            <div className="row between">
              <span className="caption">تاريخ الانتهاء</span>
              <span style={{ color: 'var(--success)', fontWeight: 800 }}>14/06/2028 ✓</span>
            </div>
          </div>
        </div>

        <div className="card p-24">
          <h3 className="h3" style={{ marginTop: 0, color: 'var(--purple)' }}>الأمن</h3>
          <div className="stack gap-12 mt-12">
            <div className="row aic between">
              <span>تأكيد بخطوتين 2FA</span>
              <span className="switch on" />
            </div>
            <div className="row aic between">
              <span>التحقق ببصمة الوجه</span>
              <span className="switch on" />
            </div>
            <button className="btn-outline btn-block">🔒 تغيير كلمة المرور</button>
            <button className="btn-outline btn-block">📱 إدارة الأجهزة المتصلة (3)</button>
            <button className="btn-danger btn-block">حذف الحساب</button>
          </div>
        </div>
      </div>
    </CustomerShell>
  );
}
