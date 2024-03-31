import { createI18n } from '@inlang/paraglide-js-adapter-next';

import type { AvailableLanguageTag } from '@/i18n/paraglide/runtime';

export const { middleware, Link, useRouter, usePathname, redirect, permanentRedirect } =
  createI18n<AvailableLanguageTag>();
