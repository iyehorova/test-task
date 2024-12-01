import { Locales } from '../types/Locales';
import { formatDate } from './formatDate';
import { formatTime } from './formatTime';

export const getDateAndTime = (locale: Locales): [string, string[]] => {
  const date = new Date();
  const formattedDate = formatDate(date, locale);
  const formattedTime = formatTime(date);
  return [formattedDate, formattedTime];
};
