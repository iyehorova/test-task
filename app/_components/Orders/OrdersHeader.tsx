'use client';
import React from 'react';
import { AddButton } from './AddButton';
import { Pages } from '@/app/types/Pages';
import { selectOrders } from '@/app/lib/features/ordersSlice';
import { PageHeaderStyles } from '../Pages/PageHeaderStyles';
import { PageTitle } from '../Pages/PageTitle';
import { OrderExtend } from '@/app/types/Order';

type Props = {
  amount: number;
};

export const OrdersHeader: React.FC<Props> = ({ amount }) => {
  return (
    <PageHeaderStyles>
      <AddButton />
      <PageTitle<OrderExtend>
        amount={amount}
        select={selectOrders}
        title={Pages.orders}
      />
    </PageHeaderStyles>
  );
};
