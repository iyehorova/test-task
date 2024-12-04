'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Pages } from '@/app/types/Pages';
import { capitalizeWord } from '@/app/utils/capitalizeWord';
import { PageTitle } from '../PageTitle';
import { AddButton } from './AddButton';

import { PageHeaderStyles } from '../UI/PageHeaderStyles';

type Props = {
  amount: number;
};

export const OrdersHeader: React.FC<Props> = ({ amount }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });
  const pageTitle = capitalizeWord(Pages.orders);

  if (isSmallScreen) {
    return null;
  }

  return (
    <PageHeaderStyles>
      <AddButton classes="icon-button-dark" />
      <PageTitle amount={amount} title={pageTitle} />
    </PageHeaderStyles>
  );
};
