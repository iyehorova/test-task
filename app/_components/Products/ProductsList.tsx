'use client';
import { ProductExtend } from '@/app/types/Product';
import { ProductItem } from './ProductItem';
import { ItemsStyles } from '../UI/ItemsStyle';
import { useSyncDataWithRedux } from '@/app/hooks/useSyncDataWithRedux';
import { selectProducts } from '@/app/lib/features/productsSlice';

type Props = {
  products: ProductExtend[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  const visibleProducts = useSyncDataWithRedux<ProductExtend>(
    products,
    selectProducts,
  );
  return (
    <div className="container-fluid">
      {visibleProducts.map(product => (
        <ItemsStyles key={product.id}>
          <ProductItem product={product} />
        </ItemsStyles>
      ))}
    </div>
  );
};
