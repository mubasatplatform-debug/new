import { Injectable, NotFoundException } from '@nestjs/common';
import { vehicles } from '../../common/mock-data';
@Injectable()
export class VehiclesService {
  findAll() { return vehicles; }
  findOne(id: string) {
    const record = (vehicles as any[]).find((item) => item.id === id || item.bookingNumber === id || item.contractNumber === id);
    if (!record) throw new NotFoundException('Vehicles record not found');
    return record;
  }
  create(payload: Record<string, unknown>) { return { id: crypto.randomUUID?.() ?? String(Date.now()), ...payload, createdAt: new Date().toISOString() }; }
  update(id: string, payload: Record<string, unknown>) { return { id, ...payload, updatedAt: new Date().toISOString(), audit: 'written' }; }
}
