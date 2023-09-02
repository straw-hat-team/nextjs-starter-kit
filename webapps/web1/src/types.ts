import type { ReactNode } from 'react';

export type LayoutProps<T = any> = {
  children: ReactNode;
  types: ReactNode;
  params: T;
};
