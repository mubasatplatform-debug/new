'use client'

import Link from 'next/link'
import { useSession, signOut } from '@/lib/auth-client'
import { ShoppingCart, User, LogOut, Menu } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-primary">
          منصة الشرائح
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/countries" className="hover:text-primary transition-colors">الدول</Link>
          <Link href="/packages" className="hover:text-primary transition-colors">الباقات</Link>
          <Link href="/support" className="hover:text-primary transition-colors">الدعم</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <Link href="/account" aria-label="حسابي">
                <User className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <button
                onClick={() => signOut()}
                aria-label="تسجيل الخروج"
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                دخول
              </Link>
              <Link
                href="/auth/sign-up"
                className="bg-primary text-primary-foreground text-sm px-4 py-1.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                حساب جديد
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(v => !v)}
            aria-label="القائمة"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden border-t px-4 py-3 flex flex-col gap-3 text-sm bg-background">
          <Link href="/countries" onClick={() => setOpen(false)}>الدول</Link>
          <Link href="/packages" onClick={() => setOpen(false)}>الباقات</Link>
          <Link href="/support" onClick={() => setOpen(false)}>الدعم</Link>
        </nav>
      )}
    </header>
  )
}
