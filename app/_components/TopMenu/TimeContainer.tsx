'use client';

import { CurrentDate } from './CurrentDate';
import { CurrentTime } from './CurrentTime';
import { Locales } from '@/app/types/Locales';
import { useGetCurrentDateAndTime } from '@/app/hooks/useGetCurrentDateAndTime';

export const TimeContainer = () => {
  const locale = Locales.en;
  const [date, time, columnVisible] = useGetCurrentDateAndTime(locale);

  return (
    <>
      <CurrentDate date={date} />
      <CurrentTime time={time} columnVisible={columnVisible} />
    </>
  );
};
