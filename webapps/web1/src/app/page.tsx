import { onSignIn, onSignOut } from '@/actions.ts';
import { auth } from '@/auth.ts';
import { Button } from '@monoturborepo/ui/src/components/button';
import type { Metadata } from 'next';
import { UserButton } from "@clerk/nextjs";

export const metadata = {
  title: 'Home',
} satisfies Metadata;

export default async function Page() {
  const session = await auth();
  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center gap-10">
        <UserButton />
        <h1 className="text-5xl font-normal">Hello, World! {session?.user?.name}</h1>
        {session ? (
          <form action={onSignOut}>
            <Button type="submit">Logout</Button>
          </form>
        ) : (
          <form action={onSignIn}>
            <Button type="submit">Sign in with Zitadel</Button>
          </form>
        )}
      </div>
      {session && (
        <pre className="flex justify-center">
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      )}
    </>
  );
}
