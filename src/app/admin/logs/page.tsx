import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'سجل الأحداث' }

const actionColors: Record<string, string> = {
  ESIM_DELIVERED:   'bg-green-100 text-green-700',
  ORDER_COMPLETED:  'bg-blue-100 text-blue-700',
  PAYMENT_FAILED:   'bg-red-100 text-red-700',
  REFUND_ISSUED:    'bg-purple-100 text-purple-700',
  COUPON_APPLIED:   'bg-yellow-100 text-yellow-700',
  WEBHOOK_RECEIVED: 'bg-gray-100 text-gray-600',
}

async function getLogs() {
  return db.auditLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  })
}

export default async function LogsPage() {
  const logs = await getLogs()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">سجل الأحداث</h1>
        <p className="text-sm text-muted-foreground">آخر {logs.length} حدث</p>
      </div>

      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              {['الإجراء', 'الكيان', 'معرف الكيان', 'المستخدم', 'التاريخ'].map(h => (
                <th key={h} className="text-right px-4 py-3 font-medium text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => {
              const colorCls = actionColors[log.action] ?? 'bg-gray-100 text-gray-600'
              return (
                <tr key={log.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${colorCls}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{log.entity ?? '—'}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground truncate max-w-[120px]">
                    {log.entityId ?? '—'}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground truncate max-w-[120px]">
                    {log.userId ?? 'system'}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{formatDate(log.createdAt)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
