import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  requestOtp(phone: string) { return { ok: true, phone, provider: process.env.OTP_PROVIDER ?? 'mock', expiresIn: 120 }; }
  verifyOtp(phone: string, code: string) { return { accessToken: 'mock-access-token', refreshToken: 'mock-refresh-token', user: { id: 'u1', phone, role: 'OWNER' }, verified: code.length >= 4 }; }
  me() { return { id: 'u1', name: 'أحمد العتيبي', role: 'OWNER', branchScope: ['*'] }; }
}
