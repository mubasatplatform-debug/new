export const vehicles = [
  { id: 'camry-2024', branchId: 'riyadh-olaya', category: 'سيدان', brand: 'تويوتا', model: 'كامري', year: 2024, plateNumber: 'د ب ل 1234', status: 'AVAILABLE', dailyPrice: 199, weeklyPrice: 1799, monthlyPrice: 4499, mileage: 12345 },
  { id: 'tucson-2024', branchId: 'jeddah-tahlia', category: 'SUV', brand: 'هيونداي', model: 'توسان', year: 2024, plateNumber: 'د ب ل 2458', status: 'AVAILABLE', dailyPrice: 229, weeklyPrice: 1999, monthlyPrice: 4999, mileage: 32450 },
  { id: 'sportage-2024', branchId: 'dammam', category: 'SUV', brand: 'كيا', model: 'سبورتاج', year: 2024, plateNumber: 'د ب ل 5678', status: 'RESERVED', dailyPrice: 219, weeklyPrice: 1899, monthlyPrice: 4799, mileage: 28770 }
];

export const bookings = [
  { id: 'b1', bookingNumber: 'DP-2024-0789', customerId: 'c1', customerName: 'أحمد محمد العتيبي', vehicleId: 'camry-2024', status: 'CONFIRMED', paymentStatus: 'PAID', pickupAt: '2024-05-20T10:00:00+03:00', returnAt: '2024-06-20T10:00:00+03:00', totalAmount: 4499 },
  { id: 'b2', bookingNumber: 'DP-2024-0790', customerId: 'c2', customerName: 'سارة محمد', vehicleId: 'tucson-2024', status: 'PENDING_PAYMENT', paymentStatus: 'PENDING', pickupAt: '2024-05-25T10:00:00+03:00', returnAt: '2024-05-28T10:00:00+03:00', totalAmount: 2499 }
];

export const contracts = [
  { id: 'ct1', contractNumber: 'CN-2024-000512', bookingId: 'b1', customerName: 'أحمد محمد العتيبي', vehicleId: 'camry-2024', status: 'ACTIVE', startAt: '2024-05-15', endAt: '2025-05-14', balance: 0 }
];

export const conversations = [
  { id: 'conv1', customerName: 'سارة محمد', channel: 'WHATSAPP', status: 'OPEN', assignedTo: 'support-1', messages: [
    { sender: 'customer', content: 'السلام عليكم، أود الاستفسار عن حجز سيارة تويوتا كامري 2024' },
    { sender: 'agent', content: 'وعليكم السلام، يسعدني مساعدتك في ديل Plus.' }
  ] }
];


export const branches = [
  { id: 'riyadh-olaya', nameAr: 'فرع الرياض - العليا', city: 'الرياض', address: 'طريق الملك فهد، العليا', latitude: 24.7136, longitude: 46.6753, vehicles: 89, status: 'ACTIVE' },
  { id: 'jeddah-tahlia', nameAr: 'فرع جدة - التحلية', city: 'جدة', address: 'شارع الأمير محمد بن عبدالعزيز', latitude: 21.5433, longitude: 39.1728, vehicles: 67, status: 'ACTIVE' },
  { id: 'dammam-corniche', nameAr: 'فرع الدمام - الكورنيش', city: 'الدمام', address: 'طريق الخليج', latitude: 26.4207, longitude: 50.0888, vehicles: 45, status: 'BUSY' },
  { id: 'khobar', nameAr: 'فرع الخبر', city: 'الخبر', address: 'الكورنيش، الخبر الشمالية', latitude: 26.2172, longitude: 50.1971, vehicles: 28, status: 'ACTIVE' }
];

export const serviceAreas = [
  { id: 'green-riyadh', city: 'الرياض', type: 'GREEN', title: 'النطاق الأخضر', fee: 0, slaMinutes: 45, description: 'توصيل واستلام عادي داخل النطاق الرئيسي' },
  { id: 'yellow-riyadh', city: 'الرياض', type: 'YELLOW', title: 'النطاق الأصفر', fee: 49, slaMinutes: 90, description: 'خارج النطاق القريب برسوم إضافية' },
  { id: 'red-riyadh', city: 'الرياض', type: 'RED', title: 'النطاق الأحمر', fee: null, slaMinutes: null, description: 'يحتاج موافقة مدير الفرع' }
];

export const liveVehicleLocations = [
  { id: 'camry-2024', plateNumber: 'د ب ل 1234', model: 'تويوتا كامري 2024', latitude: 24.7136, longitude: 46.6753, status: 'AVAILABLE', branch: 'الرياض - العليا' },
  { id: 'tucson-2024', plateNumber: 'د ب ل 2458', model: 'هيونداي توسان 2024', latitude: 21.5433, longitude: 39.1728, status: 'RENTED', branch: 'جدة - التحلية' },
  { id: 'sportage-2024', plateNumber: 'د ب ل 5678', model: 'كيا سبورتاج 2024', latitude: 26.4207, longitude: 50.0888, status: 'RESERVED', branch: 'الدمام - الكورنيش' }
];

export const customers = [
  { id: 'c1', name: 'أحمد محمد العتيبي', phone: '+966501234567', tier: 'PLATINUM', riskScore: 18, status: 'ACTIVE' },
  { id: 'c2', name: 'سارة محمد', phone: '+966501234568', tier: 'GOLD', riskScore: 9, status: 'ACTIVE' }
];

export const invoices = [
  { id: 'inv1', invoiceNumber: 'INV-2024-000512-01', contractNumber: 'CN-2024-000512', amount: 12422, vat: 1620.26, status: 'PAID', zatcaStatus: 'READY' }
];

export const maintenanceRecords = [
  { id: 'm1', vehicleId: 'sportage-2024', type: 'PERIODIC', cost: 650, status: 'SCHEDULED', nextServiceDate: '2024-08-15' }
];

export const violations = [
  { id: 'v1', plateNumber: 'د ب ل 2458', customerName: 'سارة محمد', amount: 300, status: 'PENDING_COLLECTION', violationDate: '2024-05-21' }
];

export const promotions = [
  { id: 'p1', code: 'DHEEL15', title: 'خصم التأجير طويل الأمد', discount: 15, status: 'ACTIVE' }
];


export const notifications = [
  { id: 'n1', userId: 'c1', channel: 'WHATSAPP', title: 'تأكيد الحجز', body: 'تم تأكيد حجزك DP-2024-0789', status: 'SENT' },
  { id: 'n2', userId: 'c1', channel: 'PUSH', title: 'موعد التسليم', body: 'موعد تسليم السيارة غداً الساعة 10 صباحاً', status: 'QUEUED' }
];

export const loyalty = [
  { id: 'l1', customerId: 'c1', type: 'EARN', points: 450, source: 'BOOKING', status: 'POSTED' },
  { id: 'l2', customerId: 'c2', type: 'REDEEM', points: -200, source: 'PROMOTION', status: 'POSTED' }
];

export const settings = [
  { id: 'brand', key: 'brand.colors', value: { purple: '#5B2C91', orange: '#F5A623' } },
  { id: 'booking', key: 'booking.expiryMinutes', value: 30 },
  { id: 'maps', key: 'maps.provider', value: 'GOOGLE_MAPS' }
];
