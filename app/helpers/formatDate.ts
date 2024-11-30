import { Locales } from '../types/Locales';
import { capitalizeWord } from '../utilities/capitalizeWord';

export const formatDate = (currentDate: Date, locale: Locales): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };

  const formattedDate = new Intl.DateTimeFormat(locale, options).format(
    currentDate,
  );

  const dateParts = formattedDate.replace(/,/g, '').split(' ');
  console.log(dateParts);

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
