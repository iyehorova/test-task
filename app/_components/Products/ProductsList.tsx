'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { ProductExtend } from '@/app/types/Product';
import { SearchParams } from '@/app/types/SearchParams';
import { selectProducts } from '@/app/lib/features/productsSlice';
import { clearFilter, setFilter } from '@/app/lib/features/productsFilterSlice';
import { useSyncDataWithRedux } from '@/app/hooks/useSyncDataWithRedux';
import { filterProducts } from '@/app/helpers/filterProducts';
import { ProductItem } from './ProductItem';
import { ItemsStyles } from '../UI/ItemsStyle';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { Pages } from '@/app/types/Pages';
import { BlurIn } from '../Transitions/BlurIn';
import { useTranslation } from 'react-i18next';

type Props = {
  products: ProductExtend[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  const dispatch = useDispatch();
  const visibleProducts = useSyncDataWithRedux<ProductExtend>(
    products,
    selectProducts,
  );
  const setSearchParams = useSetSearchParams(Pages.products);

  const searchParams = useSearchParams();
  const filter = searchParams.get(SearchParams.filter);

  const filteredProducts = filter
    ? filterProducts(visibleProducts, filter)
    : visibleProducts;

  useEffect(() => {
    dispatch(filter ? setFilter(filteredProducts) : clearFilter());

    if (filter && !filteredProducts.length) {
      setSearchParams(SearchParams.filter, null);
    }
  }, [filter, filteredProducts]);

  const { t } = useTranslation('products');

  if (!visibleProducts.length) {
    return (
      <div className="mt-5 text-muted mx-3">
        <p>{t('no-products')}</p>
        <p>
          <Image
            src="/icons/stars-icon.svg"
            alt="waiting cat"
            width={100}
            height={20}
          />
        </p>
      </div>
    );
  }

  return (
    <BlurIn className="container-fluid">
      {filteredProducts.map(product => (
        <ItemsStyles key={product.id}>
          <ProductItem product={product} />
        </ItemsStyles>
      ))}
    </BlurIn>
  );
};
