import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';
import { env } from './src/env.mjs';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/index.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  transpilePackages: ['@monoturborepo/ui'],
};

export default [
  withBundleAnalyzer({ enabled: env.ANALYZE }),
  withNextIntl,
].reduce((acc, fn) => fn(acc), nextConfig);
