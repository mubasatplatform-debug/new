# منصة eSIM — eSIM Platform

منصة بيع شرائح eSIM احترافية مبنية بالكامل على Next.js 15.

## Stack التقني

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Database:** PostgreSQL + Prisma + Supabase (RLS + Vault)
- **Auth:** better-auth
- **UI:** shadcn/ui + Tailwind CSS
- **Payment:** Moyasar (GCC) + Stripe (Global)
- **Email:** Resend + React Email
- **Cache/Rate Limit:** Upstash Redis
- **Deployment:** Vercel
- **Monitoring:** Sentry + PostHog

## هيكل المشروع

```
src/
├── app/
│   ├── (store)/      ← Customer Storefront
│   ├── admin/        ← Admin Dashboard
│   └── api/          ← API Routes + Webhooks
├── components/
├── lib/
│   ├── auth.ts       ← better-auth
│   ├── db.ts         ← Prisma client
│   ├── redis.ts      ← Upstash
│   └── vault.ts      ← Supabase Vault
└── middleware.ts     ← Auth + Rate Limiting + Admin Guard
```

## البدء

```bash
cp .env.example .env.local
pnpm install
pnpm db:migrate
pnpm dev
```

## المراحل

- **Phase 1 — MVP:** متجر + دفع + Webhook + تسليم QR
- **Phase 2 — Operations:** Refunds + Support + Fraud + Multi-currency
- **Phase 3 — Scale:** B2B + White-label + Mobile