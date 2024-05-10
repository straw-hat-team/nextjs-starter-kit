import withBundleAnalyzer from '@next/bundle-analyzer';
import withMDX from '@next/mdx'

import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

import { env } from './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  transpilePackages: ['@monoturborepo/ui'],
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default [
  withBundleAnalyzer({ enabled: env.ANALYZE }),
  withMDX({
    options: {
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    },
  }),
].reduce((acc, fn) => fn(acc), nextConfig);
