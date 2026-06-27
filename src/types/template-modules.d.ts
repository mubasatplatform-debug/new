// Stubs for next-shadcn-dashboard-starter template modules that haven't been implemented yet.
// These declare the modules as permissive types so TypeScript doesn't error on missing files.

declare module '@clerk/nextjs' {
  export const ClerkProvider: React.FC<{ children: React.ReactNode; [key: string]: unknown }>
  export const SignedIn: React.FC<{ children: React.ReactNode }>
  export const SignedOut: React.FC<{ children: React.ReactNode }>
  export const UserButton: React.FC<{ [key: string]: unknown }>
  export const OrganizationSwitcher: React.FC<{ [key: string]: unknown }>
  export function auth(): Promise<{ userId: string | null }>
  export function currentUser(): Promise<unknown>
  const _default: unknown
  export default _default
}

declare module '@clerk/nextjs/server' {
  export function auth(): Promise<{ userId: string | null }>
  export function currentUser(): Promise<unknown>
}

declare module '@/components/icons' {
  import type { LucideIcon } from 'lucide-react'
  export const Icons: Record<string, LucideIcon>
  const _default: Record<string, LucideIcon>
  export default _default
}

declare module '@/hooks/use-breadcrumbs' {
  export function useBreadcrumbs(): { label: string; href?: string }[]
}

declare module '@/hooks/use-controllable-state' {
  export function useControllableState<T>(params: {
    prop?: T
    defaultProp?: T
    onChange?: (value: T) => void
  }): [T | undefined, (value: T) => void]
}

declare module '@/hooks/use-nav' {
  export function useNav(): unknown
}

declare module '@/components/ui/tanstack-form' {
  const TanstackForm: React.FC<{ [key: string]: unknown }>
  export default TanstackForm
  export const FormField: React.FC<{ [key: string]: unknown }>
  export const FormItem: React.FC<{ [key: string]: unknown }>
  export const FormLabel: React.FC<{ [key: string]: unknown }>
  export const FormControl: React.FC<{ [key: string]: unknown }>
  export const FormMessage: React.FC<{ [key: string]: unknown }>
}

declare module '@/components/ui/field' {
  export const Field: React.FC<{ [key: string]: unknown }>
  export const FieldDescription: React.FC<{ [key: string]: unknown }>
  export const FieldError: React.FC<{ [key: string]: unknown }>
  export const FieldLabel: React.FC<{ [key: string]: unknown }>
  const _default: React.FC<{ [key: string]: unknown }>
  export default _default
}

declare module '@/components/ui/form-context' {
  export const FormContext: React.Context<unknown>
  export function useFormContext(): unknown
  const _default: unknown
  export default _default
}

declare module '@/components/ui/infobar' {
  export const Infobar: React.FC<{ [key: string]: unknown }>
  export const InfobarContent: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/ui/info-button' {
  const InfoButton: React.FC<{ [key: string]: unknown }>
  export default InfoButton
  export { InfoButton }
}

declare module '@/components/ui/kbd' {
  const Kbd: React.FC<{ children: React.ReactNode; [key: string]: unknown }>
  export default Kbd
  export { Kbd }
}

declare module '@/components/ui/modal' {
  export const Modal: React.FC<{ [key: string]: unknown }>
  export const ModalHeader: React.FC<{ [key: string]: unknown }>
  export const ModalBody: React.FC<{ [key: string]: unknown }>
  export const ModalFooter: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/ui/spinner' {
  const Spinner: React.FC<{ [key: string]: unknown }>
  export default Spinner
  export { Spinner }
}

declare module '@/components/ui/input-group' {
  export const InputGroup: React.FC<{ [key: string]: unknown }>
  export const InputGroupAddon: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/themes/active-theme' {
  export function useActiveTheme(): { theme: string; setTheme: (t: string) => void }
  export const activeThemeValue: { get: () => string; set: (t: string) => void }
  const _default: unknown
  export default _default
}

declare module '@/components/themes/theme.config' {
  export const themes: { id: string; label: string }[]
  const _default: unknown
  export default _default
}

declare module '@/config/nav-config' {
  export const navConfig: unknown
  const _default: unknown
  export default _default
}

declare module '@/lib/compose-refs' {
  export function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T>
}

declare module '@/lib/data-table' {
  export function useDataTable(opts: unknown): unknown
  export type DataTableConfig = unknown
}

declare module '@/lib/format' {
  export function formatDate(date: Date | string, opts?: unknown): string
  export function formatBytes(bytes: number): string
  export function formatNumber(n: number): string
}

declare module '@/lib/query-client' {
  export const queryClient: unknown
  const _default: unknown
  export default _default
}

declare module '@/lib/searchparams' {
  export const searchParamsCache: unknown
  export const deserialize: unknown
  const _default: unknown
  export default _default
}

declare module '@/types/data-table' {
  export type DataTableFilterField<T> = unknown
  export type DataTableConfig = unknown
  export type SearchParams = Record<string, string | string[] | undefined>
}

declare module '@/features/notifications/components/notification-center' {
  const NotificationCenter: React.FC<{ [key: string]: unknown }>
  export default NotificationCenter
  export { NotificationCenter }
}

declare module '@/components/user-avatar-profile' {
  const UserAvatarProfile: React.FC<{ [key: string]: unknown }>
  export default UserAvatarProfile
  export { UserAvatarProfile }
}

declare module '@/components/file-uploader' {
  export const FileUploader: React.FC<{ [key: string]: unknown }>
  export const FileInput: React.FC<{ [key: string]: unknown }>
  export const FileUploaderContent: React.FC<{ [key: string]: unknown }>
  export const FileUploaderItem: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/forms/fields' {
  export const TextField: React.FC<{ [key: string]: unknown }>
  export const SelectField: React.FC<{ [key: string]: unknown }>
  export const CheckboxField: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/ui/table/data-table-pagination' {
  const DataTablePagination: React.FC<{ [key: string]: unknown }>
  export default DataTablePagination
  export { DataTablePagination }
}

declare module '@/components/ui/table/data-table-date-filter' {
  const DataTableDateFilter: React.FC<{ [key: string]: unknown }>
  export default DataTableDateFilter
  export { DataTableDateFilter }
}

declare module '@/components/ui/table/data-table-faceted-filter' {
  const DataTableFacetedFilter: React.FC<{ [key: string]: unknown }>
  export default DataTableFacetedFilter
  export { DataTableFacetedFilter }
}

declare module '@/components/ui/table/data-table-slider-filter' {
  const DataTableSliderFilter: React.FC<{ [key: string]: unknown }>
  export default DataTableSliderFilter
  export { DataTableSliderFilter }
}

declare module '@/components/ui/table/data-table-view-options' {
  const DataTableViewOptions: React.FC<{ [key: string]: unknown }>
  export default DataTableViewOptions
  export { DataTableViewOptions }
}

declare module '@/constants/mock-api' {
  export const mockProducts: unknown[]
  export const mockUsers: unknown[]
  const _default: unknown
  export default _default
}

declare module '@/features/overview/components/area-graph' {
  const AreaGraph: React.FC<{ [key: string]: unknown }>
  export default AreaGraph
}

declare module '@/features/overview/components/area-graph-skeleton' {
  const AreaGraphSkeleton: React.FC
  export default AreaGraphSkeleton
}

declare module '@/features/overview/components/bar-graph' {
  const BarGraph: React.FC<{ [key: string]: unknown }>
  export default BarGraph
}

declare module '@/features/overview/components/bar-graph-skeleton' {
  const BarGraphSkeleton: React.FC
  export default BarGraphSkeleton
}

declare module '@/features/overview/components/pie-graph' {
  const PieGraph: React.FC<{ [key: string]: unknown }>
  export default PieGraph
}

declare module '@/features/overview/components/pie-graph-skeleton' {
  const PieGraphSkeleton: React.FC
  export default PieGraphSkeleton
}

declare module '@/features/overview/components/recent-sales' {
  const RecentSales: React.FC<{ [key: string]: unknown }>
  export default RecentSales
}

declare module '@/features/overview/components/recent-sales-skeleton' {
  const RecentSalesSkeleton: React.FC
  export default RecentSalesSkeleton
}

declare module '@/features/chat/components/chat-view-page' {
  const ChatViewPage: React.FC
  export default ChatViewPage
}

declare module '@/features/elements/components/icons-view-page' {
  const IconsViewPage: React.FC
  export default IconsViewPage
}

declare module '@/features/kanban/components/kanban-view-page' {
  const KanbanViewPage: React.FC
  export default KanbanViewPage
}

declare module '@/features/notifications/components/notifications-page' {
  const NotificationsPage: React.FC
  export default NotificationsPage
}

declare module '@/features/forms/components/advanced-form-patterns' {
  const AdvancedFormPatterns: React.FC
  export default AdvancedFormPatterns
}

declare module '@/features/forms/components/forms-showcase-page' {
  const FormsShowcasePage: React.FC
  export default FormsShowcasePage
}

declare module '@/features/forms/components/sheet-form-demo' {
  const SheetFormDemo: React.FC
  export default SheetFormDemo
}

declare module '@/components/forms/demo-form' {
  const DemoForm: React.FC<{ [key: string]: unknown }>
  export default DemoForm
}

declare module '@/features/products/api/queries' {
  export const getProducts: unknown
  export const getProduct: unknown
}

declare module '@/features/products/components/product-view-page' {
  const ProductViewPage: React.FC<{ [key: string]: unknown }>
  export default ProductViewPage
}

declare module '@/features/products/components/product-listing' {
  const ProductListing: React.FC<{ [key: string]: unknown }>
  export default ProductListing
}

declare module '@/features/profile/components/profile-view-page' {
  const ProfileViewPage: React.FC
  export default ProfileViewPage
}

declare module '@/features/react-query-demo/api/queries' {
  export const getPokemon: unknown
}

declare module '@/features/react-query-demo/components/pokemon-info' {
  const PokemonInfo: React.FC<{ [key: string]: unknown }>
  export default PokemonInfo
}

declare module '@/features/react-query-demo/components/pokemon-skeleton' {
  const PokemonSkeleton: React.FC
  export default PokemonSkeleton
}

declare module '@/features/react-query-demo/info-content' {
  const infoContent: unknown
  export default infoContent
}

declare module '@/features/users/components/user-listing' {
  const UserListing: React.FC<{ [key: string]: unknown }>
  export default UserListing
}

declare module '@/features/users/components/user-form-sheet' {
  const UserFormSheet: React.FC<{ [key: string]: unknown }>
  export default UserFormSheet
}

declare module '@/features/users/info-content' {
  const infoContent: unknown
  export default infoContent
}

declare module '@/components/layout/page-container' {
  const PageContainer: React.FC<{ children: React.ReactNode; [key: string]: unknown }>
  export default PageContainer
  export { PageContainer }
}

declare module '@/components/kbar' {
  export const KBar: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/layout/app-sidebar' {
  export const AppSidebar: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/layout/header' {
  export const Header: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/components/layout/info-sidebar' {
  export const InfoSidebar: React.FC<{ [key: string]: unknown }>
  const _default: unknown
  export default _default
}

declare module '@/config/infoconfig' {
  export const infoConfig: unknown
  const _default: unknown
  export default _default
}

declare module 'nuqs/server' {
  export function createSearchParamsCache(parsers: unknown): unknown
  export function parseAsString(value?: string): unknown
  export function parseAsInteger(value?: string): unknown
  const _default: unknown
  export default _default
}

declare module '@sentry/nextjs' {
  export function captureException(err: unknown): void
  export function captureMessage(msg: string): void
  const _default: unknown
  export default _default
}
