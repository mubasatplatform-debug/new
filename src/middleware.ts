import { NextRequest, NextResponse } from 'next/server'
import { apiRatelimit, checkoutRatelimit, authRatelimit } from '@/lib/redis'

const ADMIN_ROLES = ['ADMIN', 'SUPER_ADMIN', 'OPERATIONS', 'SUPPORT', 'FINANCE']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? '127.0.0.1'

  // ── Rate Limiting ────────────────────────────────────────────────────────────

  if (pathname.startsWith('/api/auth')) {
    const { success } = await authRatelimit.limit(ip)
    if (!success) return new NextResponse('Too Many Requests', { status: 429 })
  }

  if (pathname.startsWith('/api/webhooks')) {
    // Webhooks bypass rate limiting — signature is the protection
    return NextResponse.next()
  }

  if (pathname.includes('/checkout') || pathname.includes('/api/checkout')) {
    const { success } = await checkoutRatelimit.limit(ip)
    if (!success) return new NextResponse('Too Many Requests', { status: 429 })
  }

  if (pathname.startsWith('/api/')) {
    const { success } = await apiRatelimit.limit(ip)
    if (!success) return new NextResponse('Too Many Requests', { status: 429 })
  }

  // ── Admin Guard ──────────────────────────────────────────────────────────────

  if (pathname.startsWith('/admin')) {
    const sessionToken = request.cookies.get('better-auth.session_token')?.value

    if (!sessionToken) {
      return NextResponse.redirect(new URL('/auth/sign-in?redirect=/admin', request.url))
    }

    // Role check is handled in the admin layout via server component
    // Middleware only checks session existence for fast rejection
  }

  // ── Account Guard ────────────────────────────────────────────────────────────

  if (pathname.startsWith('/account')) {
    const sessionToken = request.cookies.get('better-auth.session_token')?.value

    if (!sessionToken) {
      return NextResponse.redirect(new URL(`/auth/sign-in?redirect=${pathname}`, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/account/:path*',
    '/api/:path*',
    '/checkout/:path*',
  ],
}
