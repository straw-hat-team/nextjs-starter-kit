import type { Config } from 'tailwindcss';
import * as defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../../packages/@monoturborepo/ui/src/**/*.{ts,tsx}'],
  presets: [require('@monoturborepo/tailwind-config')],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
