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
    AUTH_SECRET: z.string(),
    AUTH_REDIRECT_PROXY_URL: z.string().url().optional(),
    AUTH_URL: z.preprocess(
      (value) => process.env.VERCEL_URL ?? value,
      process.env.VERCEL ? z.string() : z.string().url(),
    ),
    AUTH_ZITADEL_ISSUER: z.string(),
    AUTH_ZITADEL_ID: z.string(),
    AUTH_ZITADEL_SECRET: z.string(),
  },
  client: {},
});
