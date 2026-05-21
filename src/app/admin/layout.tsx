import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { AppSidebar } from '@/components/admin-ui/layout/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/admin-ui/ui/sidebar'

const ADMIN_ROLES = ['ADMIN', 'SUPER_ADMIN', 'OPERATIONS', 'SUPPORT', 'FINANCE']

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) redirect('/auth/sign-in?redirect=/admin')

  const role = (session.user as { role?: string }).role ?? 'CUSTOMER'
  if (!ADMIN_ROLES.includes(role)) redirect('/')

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
