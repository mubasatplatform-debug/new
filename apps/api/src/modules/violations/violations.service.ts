import { Injectable } from '@nestjs/common';
import { violations as records } from '../../common/mock-data';
@Injectable()
export class ViolationsService {
  findAll() { return records as any[]; }
  findOne(id: string) { return (records as any[]).find((item) => item.id === id || item.invoiceNumber === id || item.code === id) ?? { id, status: 'NOT_FOUND' }; }
  create(payload: Record<string, unknown>) { return { id: crypto.randomUUID?.() ?? String(Date.now()), ...payload, createdAt: new Date().toISOString(), audit: 'written' }; }
  update(id: string, payload: Record<string, unknown>) { return { id, ...payload, updatedAt: new Date().toISOString(), audit: 'written' }; }
}
