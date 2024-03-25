import withBundleAnalyzer from '@next/bundle-analyzer';
import { env } from './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  transpilePackages: ['@monoturborepo/ui'],
};

export default [withBundleAnalyzer({ enabled: env.ANALYZE })].reduce((acc, fn) => fn(acc), nextConfig);
