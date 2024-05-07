import type { Config } from 'tailwindcss';
import * as defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../../packages/@monoturborepo/ui/src/**/*.{ts,tsx}'],
  presets: [require('@monoturborepo/tailwind-config')],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
} satisfies Config;
