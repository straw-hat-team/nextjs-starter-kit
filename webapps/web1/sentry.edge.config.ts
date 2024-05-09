import * as Sentry from '@sentry/nextjs';
import { env } from './src/env.mjs';

Sentry.init({
  dsn: env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: false,
});
