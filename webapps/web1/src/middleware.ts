export { auth as middleware } from '@/auth';

export const config = {
  matcher: ['/dashboard'],
  // or enable all routes except the ones that match the following pattern
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
