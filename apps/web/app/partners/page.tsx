import { PublicShell, PageHeader } from '@/components/PublicShell';

const partners = [
  { name: 'تأمين التعاونية', cat: 'شركاء التأمين', desc: 'تأمين شامل على كل سيارات الأسطول' },
  { name: 'الأهلية للتأمين', cat: 'شركاء التأمين', desc: 'بوليصة المركبات والشمسية' },
  { name: 'مدى', cat: 'الدفع', desc: 'بطاقات مدى لكل المعاملات' },
  { name: 'STC Pay', cat: 'الدفع', desc: 'محفظة رقمية للدفع الفوري' },
  { name: 'Apple Pay', cat: 'الدفع', desc: 'دفع بدون لمس عبر الجوال' },
  { name: 'Moyasar', cat: 'بنية الدفع', desc: 'بوابة الدفع المعتمدة' },
  { name: 'WhatsApp Cloud', cat: 'التواصل', desc: 'إرسال التأكيدات والإشعارات' },
  { name: 'Google Maps', cat: 'الخرائط', desc: 'خدمات الموقع والاتجاهات' },
  { name: 'ZATCA', cat: 'حكومي', desc: 'الفوترة الإلكترونية' },
  { name: 'Najm', cat: 'حكومي', desc: 'تكامل المخالفات والحوادث' },
  { name: 'Nafath', cat: 'حكومي', desc: 'التوقيع الرقمي والتحقّق' },
  { name: 'Absher', cat: 'حكومي', desc: 'التحقق من الهوية' }
];

export default function PartnersPage() {
  return (
    <PublicShell url="dheelplus.sa/partners">
      <PageHeader eyebrow="شركاؤنا" title="شركاء النجاح والثقة" sub="نعمل مع أفضل المؤسسات السعودية والعالمية لتقديم تجربة موثوقة." />
      <div className="container">
        <section className="section grid grid-3 gap-16">
          {partners.map(p => (
            <div key={p.name} className="card p-20 hover-lift">
              <span className="caption">{p.cat}</span>
              <h3 className="h3" style={{ margin: '4px 0 6px', color: 'var(--purple)' }}>{p.name}</h3>
              <p className="muted body-s" style={{ margin: 0 }}>{p.desc}</p>
              <div className="mt-16 row gap-8 aic">
                <span className="badge green">● فعّال</span>
                <span className="caption">آخر تزامن: قبل 4 دقائق</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </PublicShell>
  );
}
