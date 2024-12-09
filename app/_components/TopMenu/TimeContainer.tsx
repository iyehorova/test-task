'use client';

import { CurrentDate } from './CurrentDate';
import { CurrentTime } from './CurrentTime';
import { useGetCurrentDateAndTime } from '@/app/hooks/useGetCurrentDateAndTime';
import { useGetLocale } from '@/app/hooks/useGetLocale';

export const TimeContainer = () => {
  const locale = useGetLocale();
  const [date, time, columnVisible] = useGetCurrentDateAndTime(locale);
  return (
    <>
      <CurrentDate date={date} />
      <CurrentTime time={time} columnVisible={columnVisible} />
    </>
  );
};
