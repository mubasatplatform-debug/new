import { Injectable, NotFoundException } from '@nestjs/common';
import { payments } from '../../common/mock-data';
@Injectable()
export class PaymentsService {
  findAll() { return payments; }
  findOne(id: string) {
    const record = (payments as any[]).find((item) => item.id === id || item.bookingNumber === id || item.contractNumber === id);
    if (!record) throw new NotFoundException('Payments record not found');
    return record;
  }
  create(payload: Record<string, unknown>) { return { id: crypto.randomUUID?.() ?? String(Date.now()), ...payload, createdAt: new Date().toISOString() }; }
  update(id: string, payload: Record<string, unknown>) { return { id, ...payload, updatedAt: new Date().toISOString(), audit: 'written' }; }
}
