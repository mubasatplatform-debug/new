import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Get(':id') findOne(@Param('id') id: string) { return this.service.findOne(id); }
  @Post() create(@Body() body: Record<string, unknown>) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: Record<string, unknown>) { return this.service.update(id, body); }
}
