import { Body, Controller, Get, Post } from '@nestjs/common';
import { AiService } from './ai.service';
@Controller('ai')
export class AiController {
  constructor(private readonly ai: AiService) {}
  @Post('chat') chat(@Body() body: { message: string }) { return this.ai.chat(body.message); }
  @Get('tools') tools() { return this.ai.listTools(); }
  @Post('tools/execute') execute(@Body() body: { name: string; payload: Record<string, unknown>; confirmed?: boolean }) { return this.ai.executeTool(body.name, body.payload, body.confirmed); }
}
