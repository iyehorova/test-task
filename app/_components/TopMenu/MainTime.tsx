'use client';
import { useEffect, useState } from 'react';
import { CurrentDate } from './CurrentDate';
import { CurrentTime } from './CurrentTime';
import { Locales } from '@/app/types/Locales';
import { formatDate } from '@/app/helpers/formatDate';
import { formatTime } from '@/app/helpers/formatTime';

export const MainTime = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(['']);
  const [columnVisible, setColumnVisible] = useState(true);
  const locale = Locales.en;

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
  return (
    <div className='col-2 d-flex flex-row column-gap-2'>
      <CurrentDate date={date} />
      <CurrentTime time={time} columnVisible={columnVisible} />
    </div>
  );
};
