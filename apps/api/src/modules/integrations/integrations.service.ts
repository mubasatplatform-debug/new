import { Injectable } from '@nestjs/common';
@Injectable()
export class IntegrationsService {
  findAll() { return [
    { provider: 'Moyasar', status: 'NEEDS_SETUP', type: 'PAYMENT' },
    { provider: 'WhatsApp Cloud API', status: 'NEEDS_SETUP', type: 'COMMUNICATION' },
    { provider: 'ZATCA Provider', status: 'PLANNED', type: 'E_INVOICE' },
    { provider: 'Traccar', status: 'PLANNED', type: 'GPS' }
  ]; }
  test(provider: string) { return { provider, ok: provider === 'mock', message: 'Adapter ready; add credentials in .env' }; }
}
