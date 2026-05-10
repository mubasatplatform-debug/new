import { Body, Controller, Get, Post } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly service: IntegrationsService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Post(':provider/test') test(@Body() body: { provider: string }) { return this.service.test(body.provider); }
}
