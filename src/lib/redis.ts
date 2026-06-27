import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL ?? '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN ?? '',
})

// 30 requests per 10 seconds per IP for general API
export const apiRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, '10 s'),
  prefix: 'rl:api',
})

// 5 requests per minute for checkout
export const checkoutRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
  prefix: 'rl:checkout',
})

// 10 requests per hour for auth
export const authRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '3600 s'),
  prefix: 'rl:auth',
})

// 10 WhatsApp messages per hour per customer phone (agent rate limit)
export const whatsappAgentRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '3600 s'),
  prefix: 'rl:wa-agent',
})

export async function checkIdempotency(key: string): Promise<boolean> {
  const exists = await redis.exists(`idempotent:${key}`)
  return exists === 1
}

export async function setIdempotency(key: string, ttlSeconds = 86400): Promise<void> {
  await redis.setex(`idempotent:${key}`, ttlSeconds, '1')
}
