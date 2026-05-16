import { Injectable, NotFoundException } from '@nestjs/common';
import { bookings } from '../../common/mock-data';
@Injectable()
export class BookingsService {
  findAll() { return bookings; }
  findOne(id: string) {
    const record = (bookings as any[]).find((item) => item.id === id || item.bookingNumber === id || item.contractNumber === id);
    if (!record) throw new NotFoundException('Bookings record not found');
    return record;
  }
  create(payload: Record<string, unknown>) { return { id: crypto.randomUUID?.() ?? String(Date.now()), ...payload, createdAt: new Date().toISOString() }; }
  update(id: string, payload: Record<string, unknown>) { return { id, ...payload, updatedAt: new Date().toISOString(), audit: 'written' }; }
}
