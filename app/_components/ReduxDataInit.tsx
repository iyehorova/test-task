'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { OrderExtend } from '../types/Order';
import { initializeOrders, selectOrders } from '../lib/features/ordersSlice';
import { ProductExtend } from '../types/Product';
import {
  initializeProducts,
  selectProducts,
} from '../lib/features/productsSlice';
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
  const products = useAppSelector(selectProducts);
  const orders = useAppSelector(selectOrders);

  useEffect(() => {
    if (isOrderData(data) && !orders) {
      dispatch(initializeOrders(data));
    } else if (isProductData(data) && !products) {
      dispatch(initializeProducts(data));
    }
  }, []);

  return <>{children}</>;
};
