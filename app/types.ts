import type { NextPage } from 'next';
import type { ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getPageLayout?: (page: ReactNode) => ReactNode;
};
