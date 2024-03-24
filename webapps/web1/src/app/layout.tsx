import '@/styles/index.css';

import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  variable: '--font-sans',
  weight: ['100', '400', '600'],
  display: 'swap',
  subsets: ['latin'],
});

export default function Layout(props: { children: ReactNode }) {
  return (
    <html className={clsx('box-border scroll-smooth antialiased', inter.variable)} lang="en">
      <body className="bg-white text-lg font-normal tracking-normal text-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:text-2xl">
        {props.children}
      </body>
    </html>
  );
}
