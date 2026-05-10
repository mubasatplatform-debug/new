import { Injectable, NotFoundException } from '@nestjs/common';
import { contracts } from '../../common/mock-data';
@Injectable()
export class ContractsService {
  findAll() { return contracts; }
  findOne(id: string) {
    const record = (contracts as any[]).find((item) => item.id === id || item.bookingNumber === id || item.contractNumber === id);
    if (!record) throw new NotFoundException('Contracts record not found');
    return record;
  }
  create(payload: Record<string, unknown>) { return { id: crypto.randomUUID?.() ?? String(Date.now()), ...payload, createdAt: new Date().toISOString() }; }
  update(id: string, payload: Record<string, unknown>) { return { id, ...payload, updatedAt: new Date().toISOString(), audit: 'written' }; }
}
