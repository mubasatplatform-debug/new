// @ts-nocheck
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from '@/lib/auth-client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/admin-ui/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/admin-ui/ui/dropdown-menu'
import {
  LayoutDashboard,
  SimCard,
  Package,
  ShoppingCart,
  Users,
  Truck,
  ReceiptRefund,
  ScrollText,
  ChevronDown,
  LogOut,
  User,
} from 'lucide-react'

const navItems = [
  { label: 'الرئيسية',    href: '/admin/dashboard',   icon: LayoutDashboard },
  { label: 'المخزون',     href: '/admin/inventory',   icon: SimCard },
  { label: 'الباقات',     href: '/admin/packages',    icon: Package },
  { label: 'الطلبات',     href: '/admin/orders',      icon: ShoppingCart },
  { label: 'العملاء',     href: '/admin/customers',   icon: Users },
  { label: 'الشحنات',     href: '/admin/shipments',   icon: Truck },
  { label: 'المستردات',   href: '/admin/refunds',     icon: ReceiptRefund },
  { label: 'سجل الأحداث', href: '/admin/logs',        icon: ScrollText },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary">🌐</span>
          <span className="group-data-[collapsible=icon]:hidden">مباصات</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>لوحة التحكم</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map(({ label, href, icon: Icon }) => (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton asChild tooltip={label} isActive={pathname === href}>
                  <Link href={href}>
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                      <p className="text-sm font-medium truncate">{session?.user.name ?? '—'}</p>
                      <p className="text-xs text-muted-foreground truncate">{session?.user.email}</p>
                    </div>
                  </div>
                  <ChevronDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/" target="_blank">المتجر ←</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive"
                  onClick={() => signOut({ fetchOptions: { onSuccess: () => { window.location.href = '/auth/sign-in' } } })}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  تسجيل الخروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
