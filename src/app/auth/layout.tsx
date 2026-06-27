'use client'
import { AuthUIProvider } from 'better-auth-ui'
import { authClient } from '@/lib/auth-client'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthUIProvider
      authClient={authClient}
      social={{ providers: ['google'] }}
    >
      {children}
    </AuthUIProvider>
  )
}
