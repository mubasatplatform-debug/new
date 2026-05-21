import { z } from 'zod'

export const checkoutSchema = z.object({
  packageId: z.string().cuid(),
  couponCode: z.string().optional(),
  currency: z.enum(['SAR', 'USD']).default('SAR'),
})

export const couponSchema = z.object({
  code: z.string().min(3).max(20).toUpperCase(),
  packageId: z.string().cuid(),
})

export const moyasarWebhookSchema = z.object({
  id: z.string(),
  type: z.string(),
  data: z.object({
    id: z.string(),
    status: z.string(),
    amount: z.number(),
    currency: z.string(),
    metadata: z.record(z.unknown()).optional(),
  }),
})

export const stripeWebhookSchema = z.object({
  id: z.string(),
  type: z.string(),
  data: z.object({
    object: z.object({
      id: z.string(),
      status: z.string().optional(),
      payment_status: z.string().optional(),
      amount_total: z.number().optional(),
      currency: z.string().optional(),
      metadata: z.record(z.unknown()).optional(),
    }),
  }),
})

export const supportTicketSchema = z.object({
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
  orderId: z.string().cuid().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).default('MEDIUM'),
})

export const packageSchema = z.object({
  name: z.string().min(2).max(100),
  nameAr: z.string().min(2).max(100),
  description: z.string().optional(),
  dataGb: z.number().positive(),
  validityDays: z.number().int().positive(),
  priceSar: z.number().positive(),
  priceUsd: z.number().positive(),
  countryId: z.string().cuid().optional(),
  regionId: z.string().cuid().optional(),
  providerId: z.string(),
  providerRef: z.string(),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
})
