import { Locales } from '../types/Locales';
import { formatTopMenuDate } from './formatTopMenuDate';
import { formatTopMenuTime } from './formatTopMenuTime';

export const getDateAndTime = (locale: Locales): [string, string[]] => {
  const date = new Date();
  const formattedDate = formatTopMenuDate(date, locale);
  const formattedTime = formatTopMenuTime(date);

  return [formattedDate, formattedTime];
};
