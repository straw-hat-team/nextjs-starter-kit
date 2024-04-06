import withBundleAnalyzer from '@next/bundle-analyzer';
import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin";
import { env } from './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  transpilePackages: ['@monoturborepo/ui'],
};

export default [
  withBundleAnalyzer({ enabled: env.ANALYZE }),
  paraglide({
    paraglide: {
      project: "./project.inlang",
      outdir: "./src/i18n/paraglide"
    }
  }),
].reduce((acc, fn) => fn(acc), nextConfig);
