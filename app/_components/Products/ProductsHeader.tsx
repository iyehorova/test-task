'use client';
import { Suspense, useEffect, useState } from 'react';

import { ProductExtend } from '@/app/types/Product';
import { Pages } from '@/app/types/Pages';
import { useAppSelector } from '@/app/lib/hooks';
import { selectFilteredProducts } from '@/app/lib/features/productsFilterSlice';
import { capitalizeWord } from '@/app/utils/capitalizeWord';
import { getProductsTypes } from '@/app/helpers/getProductsTypes';
import { SelectProducts } from './SelectProducts';
import { PageTitle } from '../PageTitle';

import { PageHeaderStyles } from '../UI/PageHeaderStyles';
import { selectProducts } from '@/app/lib/features/productsSlice';

type Props = {
  products: ProductExtend[];
};

export const ProductsHeader: React.FC<Props> = ({ products }) => {
  const [amount, setAmount] = useState(products.length);
  const filteredAmount = useAppSelector(selectFilteredProducts).length;
  const savedAmount = useAppSelector(selectProducts).length;

  useEffect(() => {
    setAmount(() => {
      if (filteredAmount) {
        return filteredAmount;
      }
      if (savedAmount) {
        return savedAmount;
      }

      return products.length;
    });
  }, [filteredAmount, products, savedAmount]);

  const pageTitle = capitalizeWord(Pages.products);
  const productsTypes = getProductsTypes(products);

  return (
    <PageHeaderStyles>
      <PageTitle amount={amount} title={pageTitle} />

      <Suspense fallback={<div>Loading...</div>}>
        <SelectProducts types={productsTypes} />
      </Suspense>
    </PageHeaderStyles>
  );
};
