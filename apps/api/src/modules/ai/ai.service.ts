import { Injectable } from '@nestjs/common';

type Tool = { name: string; permission: 'SUGGEST_ONLY' | 'NEEDS_CONFIRMATION' | 'AUTO_WITHIN_LIMITS'; description: string };

@Injectable()
export class AiService {
  private tools: Tool[] = [
    { name: 'create_quote', permission: 'SUGGEST_ONLY', description: 'إنشاء عرض سعر مخصص' },
    { name: 'modify_booking', permission: 'NEEDS_CONFIRMATION', description: 'تعديل بيانات الحجز' },
    { name: 'apply_discount', permission: 'NEEDS_CONFIRMATION', description: 'تطبيق خصم على عقد أو حجز' },
    { name: 'send_notification', permission: 'AUTO_WITHIN_LIMITS', description: 'إرسال إشعار غير حساس' },
    { name: 'generate_report', permission: 'AUTO_WITHIN_LIMITS', description: 'إنشاء تقرير إداري' }
  ];

  chat(message: string) {
    return {
      message,
      answer: 'ملخص اليوم: 128 حجز، 240,560 ريال إيرادات، أفضل سيارة أداءً تويوتا كامري 2024. أوصي بزيادة توفر كامري في فرع الرياض.',
      cards: [
        { label: 'إجمالي الحجوزات', value: 128, delta: '+12%' },
        { label: 'الإيرادات', value: 'SAR 240,560', delta: '+18%' },
        { label: 'المبالغ المتأخرة', value: 'SAR 56,430', delta: '-8%' }
      ]
    };
  }

  listTools() { return this.tools; }

  executeTool(name: string, payload: Record<string, unknown>, confirmed = false) {
    const tool = this.tools.find((t) => t.name === name);
    if (!tool) return { ok: false, reason: 'TOOL_NOT_FOUND' };
    if (tool.permission === 'NEEDS_CONFIRMATION' && !confirmed) {
      return { ok: false, requiresConfirmation: true, tool, payload };
    }
    return { ok: true, tool, payload, audit: { action: `ai.tool.${name}`, createdAt: new Date().toISOString() } };
  }
}
