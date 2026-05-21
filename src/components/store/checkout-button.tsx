'use client'

import { useState } from 'react'
import { useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
  packageId: string
  available: boolean
}

export function CheckoutButton({ packageId, available }: Props) {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    if (!session) {
      router.push(`/auth/sign-in?redirect=/packages/${packageId}`)
      return
    }

    if (!available) {
      toast.error('هذه الباقة غير متوفرة حالياً')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageId }),
      })

      const data = await res.json() as { url?: string; error?: string }

      if (!res.ok) throw new Error(data.error ?? 'حدث خطأ')
      if (data.url) window.location.href = data.url
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'حدث خطأ، حاول مرة أخرى')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || !available}
      className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'جاري التحضير...' : !available ? 'غير متوفر' : 'اشترِ الآن'}
    </button>
  )
}
