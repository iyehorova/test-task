import { useEffect, useState } from 'react';
import { Locales } from '../types/Locales';
import { getDateAndTime } from '../helpers/getDateAndTime';

export const useGetCurrentDateAndTime = (
  locale: Locales,
): [string, string[], boolean] => {
  const [date, setDate] = useState(() => getDateAndTime(locale)[0]);
  const [time, setTime] = useState(() => getDateAndTime(locale)[1]);
  const [columnVisible, setColumnVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const [formattedDate, formattedTime] = getDateAndTime(locale);
      setDate(formattedDate);
      setTime(formattedTime);
      setColumnVisible(prevState => !prevState);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [date, time, columnVisible];
};
