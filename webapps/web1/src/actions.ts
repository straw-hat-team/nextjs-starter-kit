import { signIn, signOut } from '@/auth.ts';

export async function onSignIn() {
  'use server';
  await signIn('zitadel');
}

export async function onSignOut() {
  'use server';
  await signOut();
}
