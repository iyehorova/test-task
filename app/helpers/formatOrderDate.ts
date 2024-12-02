import { Locales } from '../types/Locales';
import { formatDate } from '../utilities/formatDate';

export const formatOrderDate = (orderDate: string, locale: Locales): string => {
  const definedDate = new Date(orderDate);
  const dateParts = formatDate(definedDate, locale);
  let month, date, year;

  switch (locale) {
    case Locales.en: {
      [, month, date, year] = dateParts;
      break;
    }
    case Locales.uk: {
      [, date, month, year] = dateParts;
      month = month[0].toUpperCase() + month.slice(1);
      break;
    }
    default:
      return "There isn't such locale";
  }

  return `${date}/${month}/${year}`;
};
