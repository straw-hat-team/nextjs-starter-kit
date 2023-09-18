'use client';

import { trpcApi } from '@/services/api/react-query-client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { ReactNode, useState } from 'react';

export function TrpcProvider(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpcApi.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
    }),
  );
  return (
    <trpcApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </trpcApi.Provider>
  );
}
