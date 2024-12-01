import { Locales } from '../types/Locales';

export const formatDate = (data: Date, locale: Locales): string[] => {
  const formattedDate = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(data);

  return formattedDate.replace(/,/g, '').split(' ');
};
