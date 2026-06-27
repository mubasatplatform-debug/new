import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import ThemeProvider from '@/components/admin-ui/themes/theme-provider'
import { Toaster } from 'sonner'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'منصة الشرائح — SIM & eSIM',
    template: '%s | منصة الشرائح',
  },
  description: 'شراء شرائح eSIM وSIM بسرعة وأمان. تغطية عالمية بأفضل الأسعار.',
  keywords: ['eSIM', 'SIM', 'شريحة إنترنت', 'شريحة سياحية', 'باقات بيانات'],
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'منصة الشرائح',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
