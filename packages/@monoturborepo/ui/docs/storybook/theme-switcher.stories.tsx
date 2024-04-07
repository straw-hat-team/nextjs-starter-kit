import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '../../src/components/theme-switcher';

const meta = {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <ThemeProvider attribute="class" defaultTheme="ligth">
        <ThemeSwitcher />
      </ThemeProvider>
    );
  },
};
