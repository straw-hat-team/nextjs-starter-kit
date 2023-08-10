import { Button } from '@/components/button';
import { PageTitle } from '@/components/page-title';

export function IndexRoute() {
  return (
    <>
      <PageTitle title="Home" />
      <div className="mt-10 flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="mb-10 text-5xl font-normal">Hello, World!</h1>
        <Button>Click me 🚀!</Button>
      </div>
    </>
  );
}
