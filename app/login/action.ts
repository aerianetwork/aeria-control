'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export type LoginState = {
  error?: string
}

export type LogoutState = {
  error?: string
}

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) return { error: 'Email atau password salah' }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout(): Promise<LogoutState> {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) return { error: 'Gagal logout, silakan coba lagi' }

  revalidatePath('/', 'layout')
  redirect('/login')
}
