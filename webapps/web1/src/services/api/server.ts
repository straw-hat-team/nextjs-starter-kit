import { initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export type Context = Awaited<ReturnType<typeof createContext>>;

export async function createContext(_opts: FetchCreateContextFnOptions) {
  return {};
}

const t = initTRPC.context<Context>().create();
const publicProcedure = t.procedure;

// export const protectedProcedure = publicProcedure.use((opts) => {
//   const { session } = opts.ctx;
//
//   if (!session?.user) {
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//     });
//   }
//
//   return opts.next({ ctx: { session } });
// });

export const appRouter = t.router({
  magicLink: publicProcedure.query(() => {
    return 'https://bit.ly/3se7YYw';
  }),
});

export type AppRouter = typeof appRouter;
