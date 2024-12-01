'use client';

import { CurrentDate } from './CurrentDate';
import { CurrentTime } from './CurrentTime';
import { Locales } from '@/app/types/Locales';
import { useGetCurrentDateAndTime } from '@/app/hooks/useGetCurrentDateAndTime';

export const MainTime = () => {
  const locale = Locales.en;
  const [date, time, columnVisible] = useGetCurrentDateAndTime(locale);

  return (
    <div className='col-2 d-flex flex-row column-gap-2'>
      <CurrentDate date={date} />
      <CurrentTime time={time} columnVisible={columnVisible} />
    </div>
  );
};
