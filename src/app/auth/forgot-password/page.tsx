import { AuthView } from 'better-auth-ui'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'استعادة كلمة المرور' }

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">استعادة كلمة المرور</h1>
          <p className="text-muted-foreground mt-1">
            أدخل بريدك الإلكتروني وسنرسل لك رابط الاستعادة
          </p>
        </div>

        <AuthView view="FORGOT_PASSWORD" />

        <p className="text-center text-sm text-muted-foreground mt-4">
          <Link href="/auth/sign-in" className="text-primary font-medium hover:underline">
            ← العودة لتسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  )
}
