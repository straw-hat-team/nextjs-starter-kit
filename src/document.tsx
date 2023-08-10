import Document, { Head, Html, Main, NextScript } from 'next/document';

export class WebsiteDocument extends Document {
  override render() {
    return (
      <Html lang="en" className="box-border h-full scroll-smooth antialiased">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body className="h-full w-full bg-white font-sans text-lg font-normal tracking-normal text-gray-700 dark:bg-gray-800 dark:text-gray-300 sm:text-2xl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
