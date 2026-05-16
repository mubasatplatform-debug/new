import { Injectable } from '@nestjs/common';
import { branches, liveVehicleLocations, serviceAreas } from '../../common/mock-data';
@Injectable()
export class MapsService {
  getBranches() { return branches; }
  getServiceAreas() { return serviceAreas; }
  getLiveVehicles() { return liveVehicleLocations; }
  estimateDeliveryFee(lat?: string, lng?: string) {
    const latitude = Number(lat ?? 24.7136);
    const longitude = Number(lng ?? 46.6753);
    const isCentral = Math.abs(latitude - 24.7136) < 0.35 && Math.abs(longitude - 46.6753) < 0.35;
    const isNear = Math.abs(latitude - 24.7136) < 0.75 && Math.abs(longitude - 46.6753) < 0.75;
    const areaType = isCentral ? 'GREEN' : isNear ? 'YELLOW' : 'RED';
    return { latitude, longitude, areaType, fee: areaType === 'GREEN' ? 0 : areaType === 'YELLOW' ? 49 : null, requiresApproval: areaType === 'RED' };
  }
}
