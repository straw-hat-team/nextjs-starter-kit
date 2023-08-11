import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';
import { env } from './env.mjs';

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE === 'true' })]], {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
});

export default config;
