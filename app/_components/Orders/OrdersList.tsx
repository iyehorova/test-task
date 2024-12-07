'use client';

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

import { SearchParams } from '@/app/types/SearchParams';
import { OrderExtend } from '@/app/types/Order';
import { useSyncDataWithRedux } from '@/app/hooks/useSyncDataWithRedux';
import { selectOrders } from '@/app/lib/features/ordersSlice';
import { OrderItemShortSize } from './OrderItemShortSize';
import { OrderItemFullSize } from './OrderItemFullSize';
import { OrderProductList } from './ProductsForOrders/OrderProductList';
import { BlurFadeInOutLR } from '../Transitions/BlurFadeInOutLR';
import { BlurFadeInOutRL } from '../Transitions/BlurFadeInOutRL';

type Props = {
  orders: OrderExtend[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  const [displayMode, setDisplayMode] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });
  const visibleOrders = useSyncDataWithRedux<OrderExtend>(orders, selectOrders);

  const searchParams = useSearchParams();
  const paramsId = Number(searchParams.get(SearchParams.id));

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

  if (!visibleOrders.length) {
    return (
      <div className="mt-5 text-muted">
        <p>Cool... All orders have been deleted.</p>
        <p>
          <span>Let me know if it is necessary to implement adding orders</span>

          <Image
            src="/icons/cat-icon.svg"
            alt="waiting cat"
            width={50}
            height={30}
          />
        </p>
      </div>
    );
  }

  if (displayMode && selectedOrder) {
    return (
      <div className="container-fluid  d-flex column-gap-3 pe-4">
        {!isSmallScreen && (
          <BlurFadeInOutLR className="col-md-5">
            {visibleOrders.map(order => (
              <OrderItemShortSize
                order={order}
                paramsId={paramsId}
                key={order.id}
              />
            ))}
          </BlurFadeInOutLR>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <BlurFadeInOutLR
            className={clsx('col-md-7', { 'col-12 col-md-12': isSmallScreen })}
          >
            <OrderProductList
              order={selectedOrder}
              isSmallScreen={isSmallScreen}
            />
          </BlurFadeInOutLR>
        </Suspense>
      </div>
    );
  }

  return (
    <BlurFadeInOutRL>
      {visibleOrders.map(order => (
        <OrderItemFullSize order={order} key={order.id} />
      ))}
    </BlurFadeInOutRL>
  );
};
