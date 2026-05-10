import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuditService } from './audit.service';
@Controller('audit')
export class AuditController {
  constructor(private readonly service: AuditService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Post() write(@Body() body: { action: string; payload: Record<string, unknown> }) { return this.service.write(body.action, body.payload); }
}
