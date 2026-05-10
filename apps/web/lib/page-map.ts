export type PageEntry = { route: string; title: string; description: string; section: string; order: number; implemented: boolean; };

export const pageSections = [
  {
    "section": "01 الموقع العام",
    "pages": [
      {
        "route": "/",
        "title": "Landing Page",
        "description": "الصفحة الرئيسية والتسويق والتحويل"
      },
      {
        "route": "/fleet",
        "title": "Fleet Listing",
        "description": "أسطول السيارات ونتائج البحث"
      },
      {
        "route": "/cars/camry-2024",
        "title": "Car Details",
        "description": "تفاصيل السيارة والتسعير"
      },
      {
        "route": "/compare",
        "title": "Compare Cars",
        "description": "مقارنة السيارات"
      },
      {
        "route": "/pricing",
        "title": "Pricing Plans",
        "description": "الأسعار والباقات"
      },
      {
        "route": "/rent/daily",
        "title": "Daily Rental",
        "description": "تأجير يومي"
      },
      {
        "route": "/rent/weekly",
        "title": "Weekly Rental",
        "description": "تأجير أسبوعي"
      },
      {
        "route": "/rent/monthly",
        "title": "Monthly Rental",
        "description": "تأجير شهري"
      },
      {
        "route": "/rent/long-term",
        "title": "Long Term Rental",
        "description": "تأجير طويل الأمد"
      },
      {
        "route": "/limousine",
        "title": "Limousine / Driver",
        "description": "ليموزين وسيارة بسائق"
      },
      {
        "route": "/corporate",
        "title": "B2B Landing",
        "description": "تأجير الشركات"
      },
      {
        "route": "/offers",
        "title": "Offers & Coupons",
        "description": "العروض والكوبونات"
      },
      {
        "route": "/branches",
        "title": "Branches",
        "description": "الفروع"
      },
      {
        "route": "/branches/riyadh-olaya",
        "title": "Branch Details",
        "description": "تفاصيل الفرع"
      },
      {
        "route": "/maps",
        "title": "Google Maps Service Areas",
        "description": "خرائط Google ومناطق الخدمة"
      },
      {
        "route": "/services",
        "title": "Additional Services",
        "description": "الخدمات الإضافية"
      },
      {
        "route": "/partners",
        "title": "Trust Partners",
        "description": "شركاء التأمين والثقة"
      },
      {
        "route": "/app",
        "title": "Download App",
        "description": "تحميل التطبيق"
      },
      {
        "route": "/about",
        "title": "About",
        "description": "عن ديل Plus"
      },
      {
        "route": "/faq",
        "title": "FAQ",
        "description": "الأسئلة الشائعة"
      },
      {
        "route": "/help",
        "title": "Help Center",
        "description": "مركز المساعدة"
      },
      {
        "route": "/contact",
        "title": "Contact",
        "description": "تواصل معنا"
      },
      {
        "route": "/terms",
        "title": "Terms",
        "description": "الشروط والأحكام"
      },
      {
        "route": "/privacy",
        "title": "Privacy",
        "description": "سياسة الخصوصية"
      }
    ]
  },
  {
    "section": "02 مسار الحجز",
    "pages": [
      {
        "route": "/booking/type",
        "title": "Rental Type",
        "description": "اختيار نوع التأجير"
      },
      {
        "route": "/booking/location",
        "title": "Location",
        "description": "اختيار المدينة والفرع"
      },
      {
        "route": "/booking/dates",
        "title": "Dates",
        "description": "اختيار التاريخ والوقت"
      },
      {
        "route": "/booking/availability",
        "title": "Availability",
        "description": "السيارات المتاحة"
      },
      {
        "route": "/booking/insurance",
        "title": "Insurance",
        "description": "اختيار التأمين"
      },
      {
        "route": "/booking/extras",
        "title": "Extras",
        "description": "الخدمات الإضافية"
      },
      {
        "route": "/booking/customer",
        "title": "Customer Details",
        "description": "بيانات العميل"
      },
      {
        "route": "/booking/otp",
        "title": "OTP Login",
        "description": "تسجيل الدخول والتحقق"
      },
      {
        "route": "/booking/documents",
        "title": "Documents OCR",
        "description": "رفع الهوية والرخصة"
      },
      {
        "route": "/booking/checkout",
        "title": "Checkout",
        "description": "إكمال الحجز والدفع"
      },
      {
        "route": "/booking/confirmation",
        "title": "Confirmation",
        "description": "تأكيد الحجز"
      },
      {
        "route": "/booking/payment-failed",
        "title": "Payment Failed",
        "description": "فشل الدفع"
      },
      {
        "route": "/booking/track",
        "title": "Track Booking",
        "description": "تتبع حالة الحجز"
      },
      {
        "route": "/booking/conflict",
        "title": "Conflict Resolution",
        "description": "بدائل عدم التوفر"
      }
    ]
  },
  {
    "section": "03 حساب العميل",
    "pages": [
      {
        "route": "/customer",
        "title": "Customer Dashboard",
        "description": "لوحة العميل"
      },
      {
        "route": "/customer/bookings/current",
        "title": "Current Booking",
        "description": "الحجز الحالي"
      },
      {
        "route": "/customer/bookings/upcoming",
        "title": "Upcoming Bookings",
        "description": "الحجوزات القادمة"
      },
      {
        "route": "/customer/bookings/history",
        "title": "Booking History",
        "description": "سجل الحجوزات"
      },
      {
        "route": "/customer/contracts/current",
        "title": "Current Contract",
        "description": "العقد الحالي"
      },
      {
        "route": "/customer/contracts/extend",
        "title": "Extend Contract",
        "description": "طلب تمديد"
      },
      {
        "route": "/customer/wallet",
        "title": "Wallet",
        "description": "المحفظة"
      },
      {
        "route": "/customer/deposits",
        "title": "Deposits",
        "description": "الودائع"
      },
      {
        "route": "/customer/invoices",
        "title": "Invoices",
        "description": "الفواتير"
      },
      {
        "route": "/customer/violations",
        "title": "Violations",
        "description": "المخالفات"
      },
      {
        "route": "/customer/claims",
        "title": "Claims",
        "description": "البلاغات والشكاوى"
      },
      {
        "route": "/customer/reviews",
        "title": "Reviews",
        "description": "التقييمات"
      },
      {
        "route": "/customer/wishlist",
        "title": "Wishlist",
        "description": "السيارات المحفوظة"
      },
      {
        "route": "/customer/loyalty",
        "title": "Loyalty",
        "description": "الولاء والنقاط"
      },
      {
        "route": "/customer/referrals",
        "title": "Referrals",
        "description": "الإحالات"
      },
      {
        "route": "/customer/notifications",
        "title": "Notifications",
        "description": "الإشعارات"
      },
      {
        "route": "/customer/profile",
        "title": "Profile",
        "description": "الملف الشخصي"
      },
      {
        "route": "/customer/support",
        "title": "Support Chat",
        "description": "الشات والدعم"
      },
      {
        "route": "/customer/live-tracking",
        "title": "Live Tracking",
        "description": "تتبع مندوب التسليم"
      }
    ]
  },
  {
    "section": "04 الإدارة والتشغيل",
    "pages": [
      {
        "route": "/admin",
        "title": "Executive Dashboard",
        "description": "لوحة الإدارة العليا"
      },
      {
        "route": "/admin/portal",
        "title": "Portal Hub",
        "description": "بوابة الأنظمة"
      },
      {
        "route": "/admin/branch",
        "title": "Branch Dashboard",
        "description": "لوحة الفرع"
      },
      {
        "route": "/admin/fleet",
        "title": "Fleet Management",
        "description": "إدارة الأسطول"
      },
      {
        "route": "/admin/live-map",
        "title": "Live Fleet Map",
        "description": "خريطة الأسطول الحية"
      },
      {
        "route": "/admin/vehicles",
        "title": "Vehicle Table",
        "description": "جدول السيارات"
      },
      {
        "route": "/admin/vehicles/new",
        "title": "Add Vehicle",
        "description": "إضافة سيارة"
      },
      {
        "route": "/admin/vehicles/camry-2024",
        "title": "Vehicle Profile",
        "description": "ملف السيارة"
      },
      {
        "route": "/admin/bookings",
        "title": "Booking Management",
        "description": "إدارة الحجوزات"
      },
      {
        "route": "/admin/bookings/DP-2024-0789",
        "title": "Booking Details",
        "description": "تفاصيل الحجز"
      },
      {
        "route": "/admin/contracts/CN-2024-000512",
        "title": "Contract Profile",
        "description": "ملف العقد"
      },
      {
        "route": "/admin/contracts/handover",
        "title": "Handover Checklist",
        "description": "تسليم السيارة"
      },
      {
        "route": "/admin/contracts/return",
        "title": "Return Checklist",
        "description": "استلام السيارة"
      },
      {
        "route": "/admin/finance",
        "title": "Finance Dashboard",
        "description": "لوحة المالية"
      },
      {
        "route": "/admin/invoices",
        "title": "Invoices / ZATCA",
        "description": "الفواتير وزاتكا"
      },
      {
        "route": "/admin/collections",
        "title": "Collections",
        "description": "التحصيل"
      },
      {
        "route": "/admin/crm",
        "title": "CRM Inbox",
        "description": "صندوق الوارد"
      },
      {
        "route": "/admin/customers",
        "title": "Customer 360",
        "description": "إدارة العملاء"
      },
      {
        "route": "/admin/maintenance",
        "title": "Maintenance",
        "description": "الصيانة"
      },
      {
        "route": "/admin/violations",
        "title": "Violations",
        "description": "المخالفات"
      },
      {
        "route": "/admin/accidents",
        "title": "Accidents & Claims",
        "description": "الحوادث والمطالبات"
      },
      {
        "route": "/admin/corporate",
        "title": "B2B Companies",
        "description": "الشركات"
      },
      {
        "route": "/admin/promotions",
        "title": "Promotions",
        "description": "العروض"
      },
      {
        "route": "/admin/loyalty",
        "title": "Loyalty Admin",
        "description": "إدارة الولاء"
      },
      {
        "route": "/admin/ai",
        "title": "AI Command Center",
        "description": "مركز الذكاء الاصطناعي"
      },
      {
        "route": "/admin/integrations",
        "title": "Integrations Hub",
        "description": "التكاملات"
      },
      {
        "route": "/admin/settings",
        "title": "Settings & Permissions",
        "description": "الإعدادات والصلاحيات"
      },
      {
        "route": "/admin/audit",
        "title": "Audit Logs",
        "description": "سجل التدقيق"
      },
      {
        "route": "/admin/page-map",
        "title": "Page Map",
        "description": "ترتيب الصفحات"
      },
      {
        "route": "/admin/screen-registry",
        "title": "396 Screen Registry",
        "description": "سجل الواجهات الكامل"
      }
    ]
  },
  {
    "section": "05 تجربة الموبايل داخل الويب",
    "pages": [
      {
        "route": "/mobile",
        "title": "Mobile Home Preview",
        "description": "معاينة تطبيق العميل"
      },
      {
        "route": "/mobile/search",
        "title": "Mobile Search",
        "description": "بحث الموبايل"
      },
      {
        "route": "/mobile/booking",
        "title": "Mobile Booking",
        "description": "حجز الموبايل"
      },
      {
        "route": "/mobile/account",
        "title": "Mobile Account",
        "description": "حساب الموبايل"
      }
    ]
  }
] as const;

export const pageMap: PageEntry[] = pageSections.flatMap((section, sectionIndex) => section.pages.map((page, pageIndex) => ({ ...page, section: section.section, order: sectionIndex * 100 + pageIndex + 1, implemented: true })));

export function getPageByRoute(route: string) { return pageMap.find(page => page.route === route); }
