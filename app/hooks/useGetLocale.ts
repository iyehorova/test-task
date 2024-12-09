import { usePathname } from 'next/navigation';
import { Locales } from '../types/Locales';

export const useGetLocale = () => {
  const pathName = usePathname() || '/';

  if (pathName === '/') return Locales.en;

  const localeFromPath = pathName.split('/')[1];
  return isValidLocale(localeFromPath)
    ? (localeFromPath as Locales)
    : Locales.en;
};

const isValidLocale = (locale: string): boolean =>
  Object.values(Locales).includes(locale as Locales);
