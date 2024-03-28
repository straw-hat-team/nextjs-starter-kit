import { signIn, signOut } from '@/auth.ts';
import 'server-only';

export async function onSignIn() {
  'use server';
  await signIn('zitadel', { callbackUrl: '/dashboard' }, { prompt: 'select_account' });
}

export async function onSignOut() {
  'use server';
  await signOut();
}
