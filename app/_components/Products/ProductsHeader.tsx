'use client';
import { Suspense, useEffect, useState } from 'react';

import { ProductExtend } from '@/app/types/Product';
import { Pages } from '@/app/types/Pages';
import { useAppSelector } from '@/app/lib/hooks';
import { selectFilteredProductsAmount } from '@/app/lib/features/productsFilterSlice';
import { capitalizeWord } from '@/app/utils/capitalizeWord';
import { getProductsTypes } from '@/app/helpers/getProductsTypes';
import { FilterProducts } from './FilterProducts';
import { PageTitle } from '../PageTitle';

import { PageHeaderStyles } from '../UI/PageHeaderStyles';
import {
  selectProductsAmount,
  selectProductsTypes,
} from '@/app/lib/features/productsSlice';

type Props = {
  products: ProductExtend[];
};

export const ProductsHeader: React.FC<Props> = ({ products }) => {
  const [amount, setAmount] = useState(products.length);
  const filteredAmount = useAppSelector(selectFilteredProductsAmount);
  const savedAmount = useAppSelector(selectProductsAmount);
  const types = getProductsTypes(products);
  const savedTypes = useAppSelector(selectProductsTypes);

  useEffect(() => {
    setAmount(() => {
      if (filteredAmount) {
        return filteredAmount;
      }

      return savedAmount;
    });
  }, [filteredAmount, products, savedAmount]);

  const pageTitle = capitalizeWord(Pages.products);

  return (
    <PageHeaderStyles>
      <PageTitle amount={amount} title={pageTitle} />

      <Suspense fallback={<div>Loading...</div>}>
        <FilterProducts types={savedTypes ? savedTypes : types} />
      </Suspense>
    </PageHeaderStyles>
  );
};
