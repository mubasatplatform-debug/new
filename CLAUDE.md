# قواعد المشروع — eSIM & SIM Platform

## 🔒 الالتزام الأول: المصادر المفتوحة أولاً

**Claude وأي مطور يعمل على هذا المشروع ملزم بما يلي:**

> قبل بناء أي مكوّن أو حل من الصفر — ابحث أولاً عن بديل مفتوح المصدر جاهز.
> إذا وُجد بديل مفتوح المصدر يغطي 80%+ من المتطلبات → استخدمه وخصّصه.
> لا تبنِ من الصفر إلا إذا لم يكن هناك بديل مناسب.

### قائمة المصادر المفتوحة المعتمدة في المشروع

| الوظيفة | الحل المعتمد | الـ Repo |
|---------|------------|---------|
| **Auth UI** | `better-auth-ui` | github.com/better-auth/ui |
| **Admin Dashboard** | `next-shadcn-dashboard-starter` | github.com/Kiranism/next-shadcn-dashboard-starter |
| **UI Components** | `shadcn/ui` | github.com/shadcn-ui/ui |
| **Email Templates** | `react-email` | github.com/resend/react-email |
| **Data Tables** | `@tanstack/react-table` | github.com/TanStack/table |
| **Forms** | `react-hook-form` + `zod` | مدمج |
| **Charts** | `recharts` | github.com/recharts/recharts |
| **Animations** | `framer-motion` أو `tailwindcss-animate` | مفتوح |

### قواعد الإضافة
1. **واجهات وقوالب** → GitHub أولاً (open source، مرتبة بالنجوم)
2. **مكتبات** → npm مفتوح المصدر أولاً، لا SaaS مدفوع إلا للـ APIs الخارجية
3. **كل إضافة جديدة** → تُوثَّق في هذا الملف في جدول المصادر

---

## 🏗️ نطاق المشروع

### المنتجات
- **eSIM** — شرائح إنترنت رقمية (تسليم فوري بـ QR)
- **شرائح عادية (Physical SIM)** — تسليم فيزيائي بالشحن
- **باقات البيانات** — تجديد وإضافة بيانات

### الشحن
- **Aramex** — Saudi Arabia + GCC
- **OTO** — Aggregator لعدة شركات شحن

### الدفع والمحفظة
- **Moyasar** — الخليج (Cards + Apple Pay + STC Pay + Google Pay)
- **Stripe** — عالمي
- **محفظة داخلية** — رصيد + cashback + استرداد

---

## ⚙️ القواعد التقنية

### Stack — لا تتغير إلا بموافقة صريحة
```
Next.js 15 (App Router) + TypeScript strict
PostgreSQL + Prisma + PgBouncer (Supabase)
better-auth + better-auth-ui
shadcn/ui + Tailwind CSS
Zod (validation) + Upstash Redis (rate limit)
Supabase Vault (encryption)
Moyasar + Stripe
Resend + React Email
Infobip WhatsApp (REST API + MCP)
Aramex REST API + OTO API
Vercel (deployment)
```

### ممنوع بدون مناقشة
- إضافة مكتبة جديدة ثقيلة (+50kb) بدون مبرر
- استبدال better-auth بحل آخر
- استخدام `any` في TypeScript
- تخزين activation codes كنص عادي
- بناء أي حل من الصفر يوجد له بديل مفتوح

### مطلوب دائماً
- Zod validation على كل API input
- HMAC verification على كل Webhook
- Idempotency key على كل عملية مالية
- Audit log على كل عملية حساسة
- RLS على كل جدول في Supabase
- ISR على صفحات الباقات والدول

---

## 📁 هيكل المشروع

```
src/
├── app/
│   ├── (store)/          ← واجهة العميل (متجر + باقات + checkout)
│   ├── admin/            ← لوحة التحكم
│   └── api/
│       ├── auth/         ← better-auth
│       ├── webhooks/     ← Moyasar + Stripe
│       ├── shipping/     ← Aramex + OTO
│       └── wallet/       ← محفظة
├── lib/
│   ├── auth.ts           ← better-auth config
│   ├── db.ts             ← Prisma singleton
│   ├── redis.ts          ← Upstash (rate limit + idempotency)
│   ├── vault.ts          ← Supabase Vault (encryption)
│   ├── email.ts          ← Resend
│   ├── whatsapp.ts       ← إشعارات WhatsApp (Infobip)
│   ├── shipping.ts       ← Aramex + OTO
│   └── wallet.ts         ← محفظة داخلية
├── middleware.ts          ← Auth + Rate limit + Admin guard
└── types/
emails/                   ← React Email templates
prisma/
  schema.prisma           ← Single source of truth
```

---

## 🔄 قواعد Git

- كل feature في branch منفصل
- لا merge بدون CI passes
- commit messages بالعربي أو الإنجليزي — واضحة ومباشرة
- لا secrets في الكود — `.env.local` فقط

---

*آخر تحديث: 2026-05-21*
*المشروع: منصة SIM/eSIM — mubasatplatform*
