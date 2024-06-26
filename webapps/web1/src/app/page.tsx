import { onSignIn, onSignOut } from '@/actions.ts';
import { auth } from '@/auth.ts';
import { Button } from '@monoturborepo/ui/src/components/button';
import { ThemeSwitcher } from '@monoturborepo/ui/src/components/theme-switcher.tsx';
import type { Metadata } from 'next';

export const metadata = {
  title: 'Home',
} satisfies Metadata;

export default async function Page() {
  const session = await auth();
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-10">
      <ThemeSwitcher />
      <h1 className="text-5xl font-normal">Hello, World! {session?.user?.name}</h1>
      {session ? (
        <form action={onSignOut}>
          <Button type="submit">Logout</Button>
        </form>
      ) : (
        <form action={onSignIn}>
          <Button type="submit">Sign in with ZITADEL</Button>
        </form>
      )}
      {session && (
        <pre className="mx-auto flex max-w-screen-lg justify-center rounded-md bg-gray-800 p-6 font-mono text-gray-300 dark:bg-white dark:text-gray-700">
          <code className="text-wrap">{JSON.stringify(session, null, 4)}</code>
        </pre>
      )}
    </div>
  );
}
