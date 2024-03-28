import { signIn, signOut } from '@/auth.ts';
import 'server-only';

export async function onSignIn() {
  'use server';
  await signIn('zitadel');
}

export async function onSignOut() {
  'use server';
  await signOut();
}
