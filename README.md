# Dheel Plus Rent OS

نظام تشغيل كامل لتأجير السيارات والليموزين في السعودية، بهوية ديل Plus: بنفسجي `#5B2C91` وبرتقالي `#F5A623`، عربي أولًا مع دعم الإنجليزية.

## ما يحتويه هذا التسليم

- Frontend: Next.js + TypeScript + Design System مخصص.
- Backend: NestJS + TypeScript + REST APIs.
- Database: Prisma Schema شامل لدومين التأجير.
- UI Screens: صفحات تنفيذية أساسية + Screen Registry يغطي جميع الواجهات.
- AI Gateway: Tool Registry + Policy Engine مبدئي.
- Integrations Hub: Payment/SMS/WhatsApp/ZATCA/GPS/ERP adapters كقوالب قابلة للربط.
- Docker Compose للبنية المحلية.
- Docs: Architecture, Workflows, API, AI Policy, Design System.
- UI Renders: صور واجهات أساسية داخل `docs/ui-renders`.

## التشغيل المحلي

```bash
cp .env.example .env
pnpm install
pnpm dev:web
pnpm dev:api
```

لخدمات قاعدة البيانات والكاش والتخزين:

```bash
docker compose up -d
pnpm db:generate
pnpm db:migrate
pnpm db:seed
```

## روابط الواجهات الأساسية

- `/` الصفحة الرئيسية
- `/fleet` أسطول السيارات
- `/cars/camry-2024` تفاصيل سيارة
- `/booking/checkout` إكمال الحجز
- `/customer` حساب العميل
- `/admin` لوحة الإدارة
- `/admin/fleet` إدارة الأسطول
- `/admin/contracts/CN-2024-000512` ملف العقد والتسليم
- `/admin/crm` صندوق الوارد CRM
- `/admin/ai` AI Command Center
- `/admin/integrations` مركز التكاملات
- `/admin/settings` الإعدادات والصلاحيات
- `/admin/screen-registry` سجل كل الواجهات

## قرار معماري

تم بناء المشروع كـ Modular Monolith في البداية: أسرع في الإطلاق وأقل مخاطرة من Microservices مبكرة. عند زيادة الحمل يمكن فصل Payment, Notifications, AI, Analytics إلى خدمات مستقلة.

## ملاحظات إنتاجية مهمة

- لا تخزن بيانات البطاقات داخليًا.
- ZATCA يجب ربطه بمزود مؤهل عند الإنتاج.
- Nafath/Absher/Najm تحتاج صلاحيات وتعاقدات رسمية.
- WhatsApp يفضل رسميًا عبر Cloud API للإنتاج، ويمكن استخدام Evolution API لبيئات تشغيل محدودة حسب سياسة الشركة.
- AI لا ينفذ إجراء حساس بدون صلاحية وتأكيد.


## Web App Release Candidate — الصفحات والتشغيل

تمت إضافة خريطة Google Maps ومناطق الخدمة وصفحة ترتيب الصفحات.

### صفحات الخرائط

```txt
/maps                 خريطة الفروع ومناطق الخدمة للعميل
/admin/live-map       خريطة الأسطول الحية للإدارة
```

### ترتيب الصفحات الموجودة

```txt
/admin/page-map       ترتيب صفحات الويب آب الموجودة
/admin/screen-registry سجل الواجهات الكامل 396 شاشة
```

### Google Maps

أضف المفتاح في `.env`:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_browser_key
GOOGLE_MAPS_SERVER_API_KEY=your_google_maps_server_key
GOOGLE_MAP_ID=your_google_map_id
```

بدون المفتاح يعمل النظام على Demo Map حتى لا تتعطل تجربة الواجهة.

### APIs جديدة

```txt
GET /api/maps/branches
GET /api/maps/service-areas
GET /api/maps/vehicles/live
GET /api/maps/delivery-fee?lat=24.7&lng=46.6
```

انظر: `docs/page-map.md` و `docs/readiness-report.md`.
