'use client';

import { useEffect, useState } from 'react';
import { useSyncDataWithRedux } from '@/app/hooks/useSyncDataWithRedux';
import { selectOrders } from '@/app/lib/features/ordersSlice';
import { OrderExtend } from '@/app/types/Order';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { OrderItemShortSize } from './OrderItemShortSize';
import { OrderProductList } from './ProductsForOrders/OrderProductList';
import { OrderItemFullSize } from './OrderItemFullSize';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

type Props = {
  orders: OrderExtend[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  const [displayMode, setDisplayMode] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });
  const visibleOrders = useSyncDataWithRedux<OrderExtend>(orders, selectOrders);

  const searchParams = useSearchParams();
  const paramsId = Number(searchParams.get('id'));

  useEffect(() => {
    if (paramsId && !displayMode) {
      setDisplayMode(true);
    }
    if (!paramsId && displayMode) {
      setDisplayMode(false);
    }
  }, [paramsId, displayMode]);

  const selectedOrder = paramsId
    ? visibleOrders.find(({ id }) => id === paramsId)
    : null;

  if (displayMode && selectedOrder) {
    return (
      <div className="container-fluid  d-flex column-gap-3">
        {!isSmallScreen && (
          <div className="col-md-5">
            {visibleOrders.map(order => (
              <OrderItemShortSize
                order={order}
                paramsId={paramsId}
                key={order.id}
              />
            ))}
          </div>
        )}

        <div className={clsx("col-md-7", {"col-12 col-md-12": isSmallScreen})}>
          <OrderProductList
            order={selectedOrder}
            isSmallScreen={isSmallScreen}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {visibleOrders.map(order => (
        <OrderItemFullSize order={order} key={order.id} />
      ))}
    </div>
  );
};
