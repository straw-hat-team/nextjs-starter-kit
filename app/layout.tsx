import '@/styles/index.css';
import type { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
  console.log('Have a great day! 📣🐢');
  console.log('Check this amazing material: https://bit.ly/3se7YYw');

  return (
    <html className="box-border scroll-smooth antialiased" lang="en">
      <body className="bg-white font-sans text-lg font-normal tracking-normal text-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:text-2xl">
        {props.children}
      </body>
    </html>
  );
}
