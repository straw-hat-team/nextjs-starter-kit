export { auth as middleware } from '@/auth';

export const config = {
  matcher: ['/dashboard'],
  // or enable all routes except the ones that match the following pattern
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// import createMiddleware from 'next-intl/middleware';
//
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'de'],
//
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
//
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(de|en)/:path*']
// };
