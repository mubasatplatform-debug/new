import { CustomerShell } from '@/components/CustomerShell';

export default function CurrentContractPage() {
  return (
    <CustomerShell title="العقد الحالي" active="/customer/contracts/current">
      <div className="grid grid-3 gap-16 mb-16">
        <div className="card p-20">
          <span className="caption">رقم العقد</span>
          <strong className="numeric" style={{ display: 'block', fontSize: 18, color: 'var(--purple)', marginTop: 4 }}>CN-2024-000512</strong>
        </div>
        <div className="card p-20">
          <span className="caption">حالة العقد</span>
          <div className="row aic gap-8 mt-8"><span className="badge green dot">●</span><strong style={{ color: 'var(--purple)' }}>نشط</strong></div>
        </div>
        <div className="card p-20">
          <span className="caption">آخر تحديث</span>
          <strong style={{ display: 'block', color: 'var(--purple)', marginTop: 4 }}>14 مايو 9:42 ص</strong>
          <p className="caption" style={{ margin: '2px 0 0' }}>تم التسليم بنجاح</p>
        </div>
      </div>

      <div className="card p-32 mb-16">
        <div className="row aic between mb-16">
          <h2 className="h2" style={{ margin: 0, color: 'var(--purple)' }}>عقد إيجار سيارة</h2>
          <div className="row gap-8">
            <button className="btn-outline btn-sm">📥 PDF</button>
            <button className="btn-outline btn-sm">📧 إرسال</button>
            <button className="btn-orange btn-sm">⬆️ تمديد</button>
          </div>
        </div>

        <div className="grid grid-2 gap-24">
          <div>
            <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>الطرف الأول — المؤجِّر</h4>
            <p style={{ margin: 0 }}><strong>شركة ديل Plus لتأجير السيارات</strong></p>
            <p className="muted body-s" style={{ margin: 0 }}>س.ت: 1010xxxxxx — رقم ضريبي: 300012345600003</p>
            <p className="muted body-s" style={{ margin: 0 }}>الرياض - حي العليا - شارع الأمير سلطان</p>
          </div>
          <div>
            <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>الطرف الثاني — المستأجر</h4>
            <p style={{ margin: 0 }}><strong>محمد عبدالله العتيبي</strong></p>
            <p className="muted body-s" style={{ margin: 0 }}>هوية: 1098765432</p>
            <p className="muted body-s" style={{ margin: 0 }}>جوال: +966 5x xxx 0289</p>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)', margin: '24px 0' }} />

        <div className="grid grid-2 gap-24">
          <div>
            <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>المركبة</h4>
            <Row k="النوع" v="تويوتا كامري 2024 — لؤلؤي" />
            <Row k="رقم اللوحة" v="أ ب ج 1234" />
            <Row k="رقم الهيكل (VIN)" v="JTNB11HK5J3008923" />
            <Row k="القراءة عند التسليم" v="12,450 كم" />
            <Row k="الوقود عند التسليم" v="100% — ممتلئ" />
          </div>
          <div>
            <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>شروط العقد</h4>
            <Row k="تاريخ البداية" v="14 مايو 2024 - 9:00 ص" />
            <Row k="تاريخ الإرجاع" v="14 يونيو 2024 - 9:00 ص" />
            <Row k="السعر الشهري" v="2,999 ر.س" />
            <Row k="الإيداع" v="1,500 ر.س (محجوز)" />
            <Row k="الكيلومترات المسموح بها" v="غير محدود" />
            <Row k="نوع التأمين" v="متوسط" />
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid var(--neutral-200)', margin: '24px 0' }} />

        <h4 className="h4" style={{ marginTop: 0, color: 'var(--purple)' }}>التوقيعات</h4>
        <div className="grid grid-2 gap-16">
          <div className="surface-2 p-20" style={{ textAlign: 'center' }}>
            <div style={{ height: 80, position: 'relative' }}>
              <svg viewBox="0 0 200 60" style={{ width: '100%', height: '100%' }}>
                <path d="M5 40 Q 20 5, 40 30 T 80 25 Q 100 50, 120 20 T 170 30" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="caption">المؤجِّر — سعد الحربي</span>
            <p className="body-s" style={{ margin: '4px 0 0' }}>14 مايو 2024 - 9:42 ص</p>
          </div>
          <div className="surface-2 p-20" style={{ textAlign: 'center' }}>
            <div style={{ height: 80, position: 'relative' }}>
              <svg viewBox="0 0 200 60" style={{ width: '100%', height: '100%' }}>
                <path d="M10 30 Q 30 50, 50 25 T 90 30 Q 110 10, 140 35 T 180 25" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="caption">المستأجر — محمد العتيبي</span>
            <p className="body-s" style={{ margin: '4px 0 0' }}>14 مايو 2024 - 9:42 ص</p>
          </div>
        </div>

        <p className="caption mt-16" style={{ textAlign: 'center' }}>
          🔒 موقَّع رقمياً عبر Nafath وموثَّق بـ Hash: <code className="kbd">9f2a1b...</code>
        </p>
      </div>
    </CustomerShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="row between mb-4"><span className="muted body-s">{k}</span><strong className="body-s">{v}</strong></div>;
}
