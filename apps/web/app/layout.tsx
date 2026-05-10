import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dheel Plus Rent OS',
  description: 'نظام ديل بلس لتأجير السيارات والليموزين'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
