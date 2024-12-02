'use client';

import { useAppSelector } from '@/app/lib/hooks';
import { useEffect, useState } from 'react';
import { RootState } from '../lib/store';
type Props<T> = {
  amount: number;
  select: (state: RootState) => T[];
  title: string;
};

export const PageTitle = <T extends object>({
  amount,
  select,
  title,
}: Props<T>) => {
  const [currentAmount, setCurrentAmount] = useState(amount);
  const savedAmount = useAppSelector(select).length;

  useEffect(() => {
    setCurrentAmount(savedAmount);
  }, [savedAmount]);
  return (
    <>
      <h1 className="fs-3 fw-semibold">{title}</h1>
      <span> / </span>
      <span>{currentAmount}</span>
    </>
  );
};
