import '@/styles/index.css';

import { clsx } from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
  return (
    <html
      className={clsx('box-border scroll-smooth antialiased', GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-white text-base font-normal tracking-normal text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <ThemeProvider attribute="class" defaultTheme="ligth">
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
