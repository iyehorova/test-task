'use client';
import React from 'react';
import { AddButton } from './AddButton';
import { Pages } from '@/app/types/Pages';
import { selectOrders } from '@/app/lib/features/ordersSlice';
import { PageHeaderStyles } from '../UI/PageHeaderStyles';
import { PageTitle } from '../PageTitle';
import { OrderExtend } from '@/app/types/Order';
import { capitalizeWord } from '@/app/utils/capitalizeWord';

type Props = {
  amount: number;
};

export const OrdersHeader: React.FC<Props> = ({ amount }) => {
  const pageTitle = capitalizeWord(Pages.orders);
  return (
    <PageHeaderStyles>
      <AddButton classes="icon-button-dark" />
      <PageTitle<OrderExtend>
        amount={amount}
        select={selectOrders}
        title={pageTitle}
      />
    </PageHeaderStyles>
  );
};
