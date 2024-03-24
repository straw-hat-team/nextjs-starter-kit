import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: ['./tests/vitest/vitest.setup.ts'],
  },
});
