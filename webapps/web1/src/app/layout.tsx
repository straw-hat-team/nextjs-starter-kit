import '@/styles/index.css';

import { clsx } from 'clsx';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  variable: '--font-sans',
  weight: ['100', '400', '600'],
  display: 'swap',
  subsets: ['latin'],
});

export default function Layout(props: { children: ReactNode }) {
  const messages = useMessages();

  return (
    <html className={clsx('box-border scroll-smooth antialiased', inter.variable)} lang="en" suppressHydrationWarning>
      <body className="text-md bg-white font-normal tracking-normal text-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:text-2xl">
        <ThemeProvider attribute="class" defaultTheme="ligth">
          <NextIntlClientProvider messages={messages}>{props.children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
