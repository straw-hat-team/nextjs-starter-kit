// export { auth as middleware } from '@/auth';
// export const config = {
//   matcher: ['/dashboard'],
//   // or enable all routes except the ones that match the following pattern
//   // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  // Prevent the specified routes from accessing
  // authentication information:
  // ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)"
  ]
};
