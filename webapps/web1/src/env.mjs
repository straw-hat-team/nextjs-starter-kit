// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import { vercel } from "@t3-oss/env-core/presets";
import { z } from 'zod';

export const env = createEnv({
  extends: [vercel],
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
  shared: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    BASE_URL: z.string().url().optional(),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
  },
  server: {
    SENTRY_DSN: z.string().url(),
    SENTRY_ORG: z.string(),
    SENTRY_PROJECT: z.string(),
    SENTRY_AUTH_TOKEN: z.string(),
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
    // NextAuth Secrets
    AUTH_SECRET: z.string(),
    AUTH_URL: z.preprocess(
      (value) => process.env.VERCEL_URL ?? value,
      process.env.VERCEL ? z.string() : z.string().url(),
    ),
    AUTH_REDIRECT_PROXY_URL: z.string().url().optional(),
    AUTH_ZITADEL_ID: z.string(),
    AUTH_ZITADEL_SECRET: z.string(),
    AUTH_ZITADEL_ISSUER: z.string(),
    ZITADEL_ORG_ID: z.string(),
    ZITADEL_PROJECT_ID: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});
