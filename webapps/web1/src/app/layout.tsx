import '@/styles/index.css';

import { languageTag } from '@/i18n/paraglide/runtime';
import { LanguageProvider } from '@inlang/paraglide-js-adapter-next';
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
    <LanguageProvider>
      <html className={clsx('box-border scroll-smooth antialiased', inter.variable)} lang={languageTag()}>
        <body className="text-md bg-white font-normal tracking-normal text-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:text-2xl">
          {props.children}
        </body>
      </html>
    </LanguageProvider>
  );
}
