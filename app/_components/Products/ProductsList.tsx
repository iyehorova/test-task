'use client';
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

type Props = {
  products: ProductExtend[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  const dispatch = useDispatch();
  const visibleProducts = useSyncDataWithRedux<ProductExtend>(
    products,
    selectProducts,
  );

  const searchParams = useSearchParams();
  const filter = searchParams.get(SearchParams.filter);

  const filteredProducts = filter
    ? filterProducts(visibleProducts, filter)
    : visibleProducts;

  useEffect(() => {
    dispatch(filter ? setFilter(filteredProducts) : clearFilter());
  }, [filter, filteredProducts]);

  return (
    <div className="container-fluid">
      {filteredProducts.map(product => (
        <ItemsStyles key={product.id}>
          <ProductItem product={product} />
        </ItemsStyles>
      ))}
    </div>
  );
};
