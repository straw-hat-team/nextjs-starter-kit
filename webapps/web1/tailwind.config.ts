import type { Config } from 'tailwindcss';
import * as defaultTheme from 'tailwindcss/defaultTheme';
import '@monoturborepo/ui/tailwind.config';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/@monoturborepo/ui/src/**/*.{ts,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
