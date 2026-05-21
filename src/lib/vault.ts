import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
)

export async function storeSecret(name: string, secret: string): Promise<string> {
  const { data, error } = await supabase.rpc('vault.create_secret', {
    secret,
    name,
  })

  if (error) throw new Error(`Vault store failed: ${error.message}`)
  return data as string
}

export async function getSecret(vaultId: string): Promise<string> {
  const { data, error } = await supabase.rpc('vault.decrypted_secrets', {
    filter: `id = '${vaultId}'`,
  })

  if (error) throw new Error(`Vault fetch failed: ${error.message}`)
  if (!data?.[0]?.decrypted_secret) throw new Error('Secret not found')

  return data[0].decrypted_secret as string
}

export async function deleteSecret(vaultId: string): Promise<void> {
  const { error } = await supabase
    .from('vault.secrets')
    .delete()
    .eq('id', vaultId)

  if (error) throw new Error(`Vault delete failed: ${error.message}`)
}
