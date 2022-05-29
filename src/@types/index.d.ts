declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// TODO: remove once https://github.com/testing-library/jest-dom/issues/426 is resolved
import type { TestingLibraryMatchers } from '@types/testing-library__jest-dom/matchers';

declare module '@jest/expect' {
  export interface Matchers<R = void, T = {}> extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
}
