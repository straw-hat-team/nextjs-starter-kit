import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';
import { env } from './src/env.mjs';

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  transpilePackages: ['@monoturborepo/ui'],
});

export default config;
