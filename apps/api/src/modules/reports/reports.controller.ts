import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';
@Controller('reports')
export class ReportsController {
  constructor(private readonly service: ReportsService) {}
  @Get('dashboard') dashboard() { return this.service.dashboard(); }
  @Get('branch-performance') branchPerformance() { return this.service.branchPerformance(); }
}
