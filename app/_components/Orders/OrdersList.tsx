'use client';

import { selectOrders } from '@/app/lib/features/ordersSlice';
import { useAppSelector } from '@/app/lib/hooks';
import { OrderExtend } from '@/app/types/Order';
import { useEffect, useState } from 'react';
import { ItemsStyles } from '../ItemsStyle';
import { OrderItem } from './OrderItem';

type Props = {
  orders: OrderExtend[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  const [visibleOrders, setVisibleOrders] = useState(orders);

  const savedOrders = useAppSelector(selectOrders);

  useEffect(() => {
    setVisibleOrders(savedOrders);
  }, [savedOrders]);

  return (
    <div className='container-fluid'>
      {visibleOrders.map(order => (
        <ItemsStyles key={order.id} >
          <OrderItem order={order}/>
        </ItemsStyles>
      ))}
    </div>
  );
};
