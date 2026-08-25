export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Profiles {
  id: string
  name: string | null
  email: string
  phone: string | null
  avatar_url: string | null
  created_at: string
}

export interface Reports {
  id: string
  user_id: string
  type: 'lost' | 'found'
  name: string | null
  breed: string | null
  color: string | null
  size: string | null
  sex: string | null
  age: string | null
  description: string | null
  status: 'LOST' | 'FOUND' | 'REUNITED' | 'CLOSED'
  date: string | null
  address: string | null
  latitude: number | null
  longitude: number | null
  created_at: string
  updated_at: string
}
