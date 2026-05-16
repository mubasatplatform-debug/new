# Dheel Plus Rent OS — Release Candidate Readiness

## ما تم تحويله في هذه النسخة

- إضافة صفحة خرائط عامة `/maps` للفروع، مناطق الخدمة، وحساب رسوم التوصيل.
- إضافة صفحة خريطة الأسطول الحية للإدارة `/admin/live-map`.
- إضافة دعم Google Maps عبر `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` مع Demo Mode عند عدم وجود المفتاح.
- إضافة API Module للخرائط:
  - `GET /api/maps/branches`
  - `GET /api/maps/service-areas`
  - `GET /api/maps/vehicles/live`
  - `GET /api/maps/delivery-fee?lat=24.7&lng=46.6`
- إضافة Page Map داخل النظام `/admin/page-map` يوضح ترتيب صفحات الويب آب.
- إضافة catch-all renderer يجعل كل صفحات الـ Page Map قابلة للفتح ضمن الويب آب.
- توسيع API Modules: العملاء، الفروع، الفواتير، الصيانة، المخالفات، العروض، الولاء، الإشعارات، الإعدادات.
- تحديث `.env.example` بمفاتيح خرائط Google وبوابات الدفع وواتساب وZATCA وGPS.

## مستوى الجاهزية

هذه النسخة جاهزة كـ **Web App Release Candidate** للتشغيل المحلي والعرض الاستثماري وبداية التطوير الفعلي. التفعيل الإنتاجي النهائي يحتاج مفاتيح API وتعاقدات رسمية مع مزودي الدفع، ZATCA، WhatsApp، GPS، والخرائط.

## أولويات التفعيل الإنتاجي

1. تشغيل PostgreSQL وPrisma migrations.
2. ربط الواجهات بخدمات API بدل Mock Data تدريجيًا.
3. تفعيل Auth/OTP production.
4. إدخال مفاتيح Google Maps وPayment وWhatsApp وZATCA.
5. تفعيل Audit Log على كل Mutation.
6. اختبارات E2E للحجز، الدفع، العقد، التسليم، الاستلام.
