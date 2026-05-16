import { Injectable } from '@nestjs/common';
@Injectable()
export class AuditService {
  findAll() { return [
    { id: 'a1', action: 'booking.confirmed', userId: 'u1', createdAt: new Date().toISOString() },
    { id: 'a2', action: 'vehicle.updated', userId: 'u2', createdAt: new Date().toISOString() }
  ]; }
  write(action: string, payload: Record<string, unknown>) { return { id: Date.now().toString(), action, payload, createdAt: new Date().toISOString() }; }
}
