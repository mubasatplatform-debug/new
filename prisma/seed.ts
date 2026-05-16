import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const owner = await prisma.role.upsert({ where: { name: 'Owner' }, update: {}, create: { name: 'Owner', scope: 'GLOBAL' } });
  await prisma.user.upsert({ where: { phone: '+966500000000' }, update: {}, create: { fullName: 'أحمد العتيبي', phone: '+966500000000', email: 'owner@dheelplus.sa', roleId: owner.id, loyaltyTier: 'PLATINUM' } });
  const branch = await prisma.branch.create({ data: { nameAr: 'الرياض - العليا', nameEn: 'Riyadh Olaya', city: 'الرياض', address: 'طريق العليا', phone: '920028090' } });
  const category = await prisma.carCategory.create({ data: { nameAr: 'سيدان', nameEn: 'Sedan', icon: 'car' } });
  await prisma.car.create({ data: { branchId: branch.id, categoryId: category.id, brand: 'تويوتا', model: 'كامري', year: 2024, plateNumber: 'د ب ل 1234', color: 'أبيض', transmission: 'أوتوماتيك', fuelType: 'بنزين', seats: 5, dailyPrice: 199, weeklyPrice: 1799, monthlyPrice: 4499, status: 'AVAILABLE', mileage: 12345 } });
}
main().finally(() => prisma.$disconnect());
