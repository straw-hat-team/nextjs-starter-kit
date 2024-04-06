import { createContext } from 'react';

function useZitadel() {
  return {};
}

type ZitadelContextType = ReturnType<typeof useZitadel>;

const ZitadelContext = createContext<ZitadelContextType | undefined>(undefined);

export function useZitadelContext() {
  const context = ZitadelContext;
  if (context === undefined) {
    throw new Error('useZitadelContext must be used within a ZitadelProvider');
  }
  return context;
}
export function ZitadelProvider(props: { children: React.ReactNode }) {
  const value = useZitadel();
  return <ZitadelContext.Provider value={value}>{props.children}</ZitadelContext.Provider>;
}

export function auth() {
  'use server';
  return {};
}

export function currentUser() {
  'use server';
  return {};
}
