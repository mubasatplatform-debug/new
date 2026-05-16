import Link from 'next/link';
import { Logo } from './Brand';

export function Header() {
  const links = [
    ['/', 'الرئيسية'],
    ['/fleet', 'استئجار سيارة'],
    ['/fleet', 'عروض وأسعار'],
    ['/fleet', 'الفروع'],
    ['/fleet', 'خدماتنا'],
    ['/fleet', 'تأجير للشركات'],
    ['/admin', 'لوحة الإدارة']
  ];
  return (
    <header className="header">
      <div className="container nav">
        <Logo />
        <nav className="nav-links">{links.map(([href, label]) => <Link key={label} href={href}>{label}</Link>)}</nav>
        <div className="nav-actions">
          <button className="btn-ghost">العربية 🌐</button>
          <button className="btn-ghost">تسجيل الدخول</button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Logo/><p>ديل Plus منصة سعودية لتأجير السيارات والليموزين بتجربة ذكية وأسعار مرنة وخدمة موثوقة.</p></div>
        <div><h4>خدماتنا</h4><ul><li>تأجير طويل الأمد</li><li>تأجير قصير الأمد</li><li>تأجير الشركات</li><li>ليموزين وسائق</li></ul></div>
        <div><h4>الشركة</h4><ul><li>عن ديل Plus</li><li>وظائف</li><li>الشروط والأحكام</li><li>سياسة الخصوصية</li></ul></div>
        <div><h4>مساعدة</h4><ul><li>الأسئلة الشائعة</li><li>طريقة الحجز</li><li>الدعم والمساعدة</li><li>الشكاوى</li></ul></div>
        <div><h4>تواصل معنا</h4><ul><li>920 028 090</li><li>info@dheelplus.sa</li><li>الرياض، السعودية</li></ul></div>
      </div>
    </footer>
  );
}
