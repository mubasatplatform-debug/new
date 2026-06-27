import { AuthCard } from 'better-auth-ui'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'إنشاء حساب' }

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">إنشاء حساب جديد</h1>
          <p className="text-muted-foreground mt-1">انضم للمنصة واحصل على شريحتك</p>
        </div>

        <AuthCard
          authClient={authClient}
          view="sign-up"
          redirectTo="/"
          socialProviders={['google']}
          localization={{
            name: 'الاسم الكامل',
            email: 'البريد الإلكتروني',
            password: 'كلمة المرور',
            signUp: 'إنشاء الحساب',
            signUpWith: 'التسجيل بـ',
            alreadyHaveAccount: 'لديك حساب بالفعل؟',
            signIn: 'تسجيل الدخول',
          }}
        />

        <p className="text-center text-sm text-muted-foreground mt-4">
          لديك حساب بالفعل؟{' '}
          <Link href="/auth/sign-in" className="text-primary font-medium hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  )
}
