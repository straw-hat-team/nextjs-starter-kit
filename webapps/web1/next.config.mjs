import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import { env } from './src/env.mjs';

const bundleAnalyzer = withBundleAnalyzer({enabled: env.ANALYZE});

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {instrumentationHook: true},
  transpilePackages: ['@monoturborepo/ui'],
  sentry: {
    widenClientFileUpload: true,
    transpileClientSDK: false,
    hideSourceMaps: false,
    // tunnelRoute: '/.well-known/monitoring/errors',
    disableLogger: true,
  },
};

export default withSentryConfig(
  bundleAnalyzer(nextConfig),
  {
    org: env.SENTRY_ORG,
    project: env.SENTRY_PROJECT,
    authToken: env.SENTRY_AUTH_TOKEN,
    silent: true,
  },
)
