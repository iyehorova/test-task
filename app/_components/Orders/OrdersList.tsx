'use client';

import { useSyncDataWithRedux } from '@/app/hooks/useSyncDataWithRedux';
import { selectOrders } from '@/app/lib/features/ordersSlice';
import { OrderExtend } from '@/app/types/Order';
import { ItemsStyles } from '../UI/ItemsStyle';
import { OrderItem } from './OrderItem';

type Props = {
  orders: OrderExtend[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  const visibleOrders = useSyncDataWithRedux<OrderExtend>(orders, selectOrders);

  return (
    <div className="container-fluid">
      {visibleOrders.map(order => (
        <ItemsStyles key={order.id}>
          <OrderItem order={order} />
        </ItemsStyles>
      ))}
    </div>
  );
};
