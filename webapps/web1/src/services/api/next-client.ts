import { getAppBaseUrl } from '@/helpers';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from './server';

export const trpcApi = createTRPCNext<AppRouter>({
  ssr: true,
  config(_opts) {
    return {
      abortOnUnmount: true,
      links: [
        loggerLink({
          enabled(opts) {
            if (process.env.NODE_ENV === 'development') {
              return true;
            }

            return opts.direction === 'down' && opts.result instanceof Error;
          },
        }),
        httpBatchLink({
          url: `${getAppBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
});

export type RouterInputs = inferRouterInputs<AppRouter>;

export type RouterOutputs = inferRouterOutputs<AppRouter>;
