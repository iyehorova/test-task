import { useEffect, useState } from 'react';
import { Locales } from '../types/Locales';
import { formatDate } from '../helpers/formatDate';
import { formatTime } from '../helpers/formatTime';

export const useGetCurrentDateAndTime = (
  locale: Locales,
): [string, string[], boolean] => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(['']);
  const [columnVisible, setColumnVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate, locale);
      const formattedTime = formatTime(currentDate);
      setDate(formattedDate);
      setTime(formattedTime);
      setColumnVisible(prevState => !prevState);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [date, time, columnVisible];
};
