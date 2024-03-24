import { env } from '@/env.mjs';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { DefaultSession, NextAuthOptions, getServerSession } from 'next-auth';
import ZitadelProvider from 'next-auth/providers/zitadel';

declare module 'next-auth' {
  interface Session {
    user?: {} & DefaultSession['user'];
  }
}

export const authOptions = {
  providers: [
    ZitadelProvider({
      issuer: env.AUTH_ZITADEL_ISSUER,
      clientId: env.AUTH_ZITADEL_ID,
      clientSecret: env.AUTH_ZITADEL_SECRET,
    }),
  ],
} satisfies NextAuthOptions;

export function getServerAuthSession(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}
