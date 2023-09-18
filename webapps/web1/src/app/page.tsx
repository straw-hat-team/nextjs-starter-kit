import { trpcApi } from '@/services/api/react-query-client';
import { Button } from '@monoturborepo/ui/src/components/button';
import type { Metadata } from 'next';

export const metadata = {
  title: 'Home',
} satisfies Metadata;

export default function Page() {
  const magicLinkQuery = trpcApi.magicLink.useQuery();

  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-normal">Hello, World!</h1>
        <Button>Click me 🚀!</Button>
        <pre>
          <code>{JSON.stringify(magicLinkQuery.data, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}
