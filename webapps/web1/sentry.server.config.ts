import * as Sentry from '@sentry/nextjs';
import { env } from './src/env.mjs';

Sentry.init({
  dsn: env.SENTRY_DSN,
  tracesSampleRate: 1,
  debug: false,
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
