export const cars = [
  { id: 'camry-2024', name: 'تويوتا كامري 2024', category: 'سيدان', daily: 199, weekly: 1799, monthly: 4499, status: 'متاحة', branch: 'الرياض - العليا', specs: 'أوتوماتيك • 5 مقاعد • بنزين', image: '🚘' },
  { id: 'tucson-2024', name: 'هيونداي توسان 2024', category: 'SUV', daily: 229, weekly: 1999, monthly: 4999, status: 'متاحة', branch: 'جدة - التحلية', specs: 'أوتوماتيك • SUV • بنزين', image: '🚙' },
  { id: 'sportage-2024', name: 'كيا سبورتاج 2024', category: 'SUV', daily: 219, weekly: 1899, monthly: 4799, status: 'محجوزة', branch: 'الدمام', specs: 'أوتوماتيك • SUV • بنزين', image: '🚙' },
  { id: 'altima-2024', name: 'نيسان التيما 2024', category: 'سيدان', daily: 189, weekly: 1699, monthly: 4299, status: 'متاحة', branch: 'الخبر', specs: 'أوتوماتيك • 5 مقاعد • بنزين', image: '🚘' },
  { id: 'tahoe-2024', name: 'شيفروليه تاهو 2024', category: 'فاخرة', daily: 599, weekly: 4999, monthly: 12999, status: 'صيانة', branch: 'الرياض', specs: 'SUV • 7 مقاعد • بنزين', image: '🚙' },
  { id: 'yaris-2024', name: 'تويوتا يارس 2024', category: 'اقتصادية', daily: 139, weekly: 1099, monthly: 2999, status: 'متاحة', branch: 'مكة', specs: 'اقتصادية • أوتوماتيك', image: '🚗' }
];

export const branches = [
  { city: 'الرياض', count: 15, image: '🌆' },
  { city: 'جدة', count: 10, image: '🌇' },
  { city: 'الدمام', count: 7, image: '🏙️' },
  { city: 'الخبر', count: 5, image: '🌃' }
];

export const bookings = [
  { id: '#DP-78452', customer: 'شركة السيف للتجارة', car: 'تويوتا كامري 2024', amount: 1899, status: 'مؤكدة', start: '14 مايو 2024', end: '16 مايو 2024' },
  { id: '#DP-78451', customer: 'محمد خالد', car: 'هيونداي توسان 2024', amount: 2499, status: 'مؤكدة', start: '14 مايو 2024', end: '17 مايو 2024' },
  { id: '#DP-78450', customer: 'شركة النور للمقاولات', car: 'كيا سبورتاج 2024', amount: 1799, status: 'مكتملة', start: '13 مايو 2024', end: '15 مايو 2024' },
  { id: '#DP-78449', customer: 'سارة عبدالله', car: 'تويوتا كورولا 2024', amount: 1499, status: 'مؤكدة', start: '13 مايو 2024', end: '14 مايو 2024' },
  { id: '#DP-78448', customer: 'أحمد الفوزان', car: 'نيسان كيكس 2024', amount: 1199, status: 'ملغاة', start: '12 مايو 2024', end: '14 مايو 2024' }
];

export const integrations = [
  { provider: 'Moyasar', type: 'Payment', status: 'Needs Setup' },
  { provider: 'WhatsApp Cloud API', type: 'Communication', status: 'Needs Setup' },
  { provider: 'ZATCA Provider', type: 'E-Invoice', status: 'Planned' },
  { provider: 'Unifonic', type: 'SMS', status: 'Disabled' },
  { provider: 'Traccar', type: 'GPS', status: 'Planned' },
  { provider: 'ERPNext', type: 'ERP', status: 'Planned' }
];
