'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '../lib/hooks';
import { OrderExtend } from '../types/Order';
import { initializeOrders } from '../lib/features/ordersSlice';
import { ProductExtend } from '../types/Product';
import { initializeProducts } from '../lib/features/productsSlice';
import { isOrderData } from '../helpers/typeGuards/isOrderData';
import { isProductData } from '../helpers/typeGuards/isProductData';

type Props<T> = {
  data: T[];
  children: React.ReactNode;
};

export const ReduxDataInit = <T extends OrderExtend | ProductExtend>({
  data,
  children,
}: Props<T>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOrderData(data)) {
      dispatch(initializeOrders(data));
    } else if (isProductData(data)) {
      dispatch(initializeProducts(data));
    }
  }, []);

  return <>{children}</>;
};
