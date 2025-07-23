// i18n configuration required by next-intl plugin
import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'zh-CN'] as const;

export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  switch (locale) {
    case 'zh-CN':
      return {
        locale: locale ?? 'zh-CN',
        messages: (await import('./i18n/messages/zh-CN.json')).default,
      };
    default:
      return {
        locale: locale ?? 'en',
        messages: (await import('./i18n/messages/en.json')).default,
      };
  }
}); 