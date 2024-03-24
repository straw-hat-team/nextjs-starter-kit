import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docs/storybook/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {},
} satisfies Config;
