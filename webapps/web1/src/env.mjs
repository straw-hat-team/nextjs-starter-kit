// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
    NEXTAUTH_SECRET: z.string(),
    AUTH_REDIRECT_PROXY_URL: z.string().url().optional(),
    NEXTAUTH_URL: z.preprocess(
      (value) => process.env.VERCEL_URL ?? value,
      process.env.VERCEL ? z.string() : z.string().url(),
    ),
    ZITADEL_ISSUER: z.string(),
    ZITADEL_CLIENT_ID: z.string(),
    ZITADEL_CLIENT_SECRET: z.string(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    ZITADEL_ISSUER: process.env.ZITADEL_ISSUER,
    ZITADEL_CLIENT_ID: process.env.ZITADEL_CLIENT_ID,
    ZITADEL_CLIENT_SECRET: process.env.ZITADEL_CLIENT_SECRET,
    AUTH_REDIRECT_PROXY_URL: process.env.AUTH_REDIRECT_PROXY_URL,
  },
});
