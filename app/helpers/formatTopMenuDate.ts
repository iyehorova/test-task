import { Locales } from '../types/Locales';
import { capitalizeWord } from '../utilities/capitalizeWord';
import { formatDate } from '../utilities/formatDate';

export const formatTopMenuDate = (
  currentDate: Date,
  locale: Locales,
): string => {
  const dateParts = formatDate(currentDate, locale);

  let day, month, date, year;

  switch (locale) {
    case Locales.en: {
      [day, month, date, year] = dateParts;
      break;
    }
    case Locales.uk: {
      [day, date, month, year] = dateParts;
      day = capitalizeWord(day);
      month = capitalizeWord(month);
      break;
    }
    default:
      return "There isn't such locale";
  }
  return `${day} ${date} ${month} ${year}`;
};
