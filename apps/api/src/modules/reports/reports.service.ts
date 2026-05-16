import { Injectable } from '@nestjs/common';
@Injectable()
export class ReportsService {
  dashboard() { return { revenue: 2450000, utilization: 78, activeContracts: 1248, overdueAmount: 132500, availableVehicles: 354 }; }
  branchPerformance() { return [
    { branch: 'الرياض - العليا', revenue: 850000, utilization: 82, bookings: 412 },
    { branch: 'جدة - التحلية', revenue: 620000, utilization: 76, bookings: 298 }
  ]; }
}
