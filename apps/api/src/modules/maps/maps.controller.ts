import { Controller, Get, Query } from '@nestjs/common';
import { MapsService } from './maps.service';
@Controller('maps')
export class MapsController {
  constructor(private readonly service: MapsService) {}
  @Get('branches') getBranches() { return this.service.getBranches(); }
  @Get('service-areas') getServiceAreas() { return this.service.getServiceAreas(); }
  @Get('vehicles/live') getLiveVehicles() { return this.service.getLiveVehicles(); }
  @Get('delivery-fee') estimateDeliveryFee(@Query('lat') lat?: string, @Query('lng') lng?: string) { return this.service.estimateDeliveryFee(lat, lng); }
}
