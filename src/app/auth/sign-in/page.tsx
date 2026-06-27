import { AuthCard } from 'better-auth-ui'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'تسجيل الدخول' }

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">مرحباً بك</h1>
          <p className="text-muted-foreground mt-1">سجّل دخولك للمتابعة</p>
        </div>

        <AuthCard
          authClient={authClient}
          view="sign-in"
          redirectTo="/"
          socialProviders={['google']}
          localization={{
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            signIn: 'تسجيل الدخول',
            signInWith: 'الدخول بـ',
            forgotPassword: 'نسيت كلمة المرور؟',
            dontHaveAccount: 'ليس لديك حساب؟',
            signUp: 'إنشاء حساب',
          }}
        />

        <p className="text-center text-sm text-muted-foreground mt-4">
          ليس لديك حساب؟{' '}
          <Link href="/auth/sign-up" className="text-primary font-medium hover:underline">
            إنشاء حساب
          </Link>
        </p>
      </div>
    </div>
  )
}
