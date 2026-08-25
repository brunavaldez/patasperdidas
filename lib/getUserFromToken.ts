export default async function getUserFromToken(token: string) {
  if (!token) return null

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!supabaseUrl) return null

  try {
    const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) return null
    const data = await res.json()
    return data?.user || data
  } catch (err) {
    return null
  }
}
