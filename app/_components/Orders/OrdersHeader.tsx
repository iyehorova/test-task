'use client';
import { selectOrders } from '@/app/lib/features/ordersSlice';
import { useAppSelector } from '@/app/lib/hooks';
import { useEffect, useState } from 'react';
import { AddButton } from './AddButton';

type Props = {
  amount: number;
};

export const OrdersHeader: React.FC<Props> = ({ amount }) => {
  const [amountOrders, setAmountOrders] = useState(amount);
  const savedAmount = useAppSelector(selectOrders).length;

  useEffect(() => {
    setAmountOrders(savedAmount);
  }, [savedAmount]);

  return (
    <header
      className={`d-flex column-gap-3 align-items-center
      mb-5 container-fluid fs-3 fw-semibold`}
    >
      <AddButton />
      <h1 className="fs-3 fw-semibold">Orders</h1>
      <span> / </span>
      <span>{amountOrders}</span>
    </header>
  );
};
