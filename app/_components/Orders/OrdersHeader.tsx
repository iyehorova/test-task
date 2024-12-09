'use client';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Pages } from '@/app/types/Pages';
import { capitalizeWord } from '@/app/utils/capitalizeWord';
import { PageTitle } from '../PageTitle';
import { AddButton } from './AddButton';

import { PageHeaderStyles } from '../UI/PageHeaderStyles';
import { useAppSelector } from '@/app/lib/hooks';
import { selectOrdersAmount } from '@/app/lib/features/ordersSlice';
import { useSearchParams } from 'next/navigation';
import { SearchParams } from '@/app/types/SearchParams';
import { useTranslation } from 'react-i18next';

type Props = {
  amount: number;
};

export const OrdersHeader: React.FC<Props> = ({ amount }) => {
  const [ordersAmount, setOrdersAmount] = useState(amount);
  const searchParams = useSearchParams();
  const id = searchParams.get(SearchParams.id);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });
  const savedAmount = useAppSelector(selectOrdersAmount);
  const pageTitle = capitalizeWord(Pages.orders);
  const { t } = useTranslation('orders');

  useEffect(() => {
    setOrdersAmount(savedAmount);
  }, [savedAmount]);

  if (isSmallScreen && id) {
    return null;
  }

  return (
    <PageHeaderStyles>
      <AddButton classes="icon-button-dark" />
      <PageTitle amount={ordersAmount} title={t(pageTitle)} />
    </PageHeaderStyles>
  );
};
