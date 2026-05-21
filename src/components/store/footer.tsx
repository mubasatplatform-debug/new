import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-bold text-base mb-2">منصة الشرائح</p>
          <p className="text-muted-foreground leading-relaxed">
            شرائح eSIM وSIM للسفر والإقامة. تغطية عالمية، تفعيل فوري.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">روابط سريعة</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/countries" className="hover:text-primary transition-colors">الدول والباقات</Link></li>
            <li><Link href="/account" className="hover:text-primary transition-colors">حسابي</Link></li>
            <li><Link href="/support" className="hover:text-primary transition-colors">الدعم الفني</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">قانوني</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
            <li><Link href="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} منصة الشرائح. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
