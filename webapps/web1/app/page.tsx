import { Button } from '@/components/button';
import type { Metadata } from 'next';

export const metadata = {
  title: 'Home',
} satisfies Metadata;

export default function Page() {
  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center gap-10">
        <h1 className="text-5xl font-normal">Hello, World!</h1>
        <Button>Click me 🚀!</Button>
      </div>
    </>
  );
}
