import { env } from '@/env.mjs';
import { makeZitadelAuth } from '@/helpers/zitadel.ts';
import NextAuth, { NextAuthConfig, NextAuthResult } from 'next-auth';
import Zitadel from 'next-auth/providers/zitadel';

// TODO: Add offline_access support
const { scope, profileToken } = makeZitadelAuth({
  orgId: env.ZITADEL_ORG_ID,
  projectId: env.ZITADEL_PROJECT_ID,
  metadata: true,
});

const config = {
  session: { strategy: 'jwt' },
  providers: [Zitadel({ authorization: { params: { scope } } })],
  callbacks: {
    jwt({ token, profile }) {
      // TODO: Find out why `profile` is undefined when refreshing the page
      //  but present when we authenticate for the first time.
      //  The second time, the values are already in the `token` object.
      if (profile) {
        Object.assign(token, profileToken(profile));
      }

      return token;
    },
    session({ session, token }) {
      // TODO: https://github.com/nextauthjs/next-auth/pull/10008
      session.user.id = token.sub!;
      // @ts-expect-error `zitadel` is not part of the default `session` object
      session.zitadel = token.zitadel;
      return session;
    },
    authorized({ request, auth }) {
      if (request.nextUrl.pathname === '/dashboard') return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

// TODO: Fix when NexAuth fixes their types https://github.com/nextauthjs/next-auth/discussions/9950
const nextAuthResult = NextAuth(config);
export const auth: NextAuthResult['auth'] = nextAuthResult.auth;
export const { handlers, signIn, signOut }: NextAuthResult = nextAuthResult;
