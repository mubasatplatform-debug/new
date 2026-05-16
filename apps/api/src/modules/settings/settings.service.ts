import { Injectable } from '@nestjs/common';
import { settings as records } from '../../common/mock-data';
@Injectable()
export class SettingsService {
  findAll() { return records as any[]; }
  findOne(id: string) { return (records as any[]).find((item) => item.id === id || item.key === id) ?? { id, status: 'NOT_FOUND' }; }
  create(payload: Record<string, unknown>) { return { id: crypto.randomUUID?.() ?? String(Date.now()), ...payload, createdAt: new Date().toISOString(), audit: 'written' }; }
  update(id: string, payload: Record<string, unknown>) { return { id, ...payload, updatedAt: new Date().toISOString(), audit: 'written' }; }
}
