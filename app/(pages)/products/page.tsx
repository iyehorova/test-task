import { ProductsHeader } from '@/app/_components/Products/ProductsHeader';
import { ReduxDataInit } from '../../_components/ReduxDataInit';
import { getProducts } from '../../api/getProducts';
import { ProductExtend } from '../../types/Product';
import { PageStyle } from '@/app/_components/UI/PageStyle';
import { ProductsList } from '@/app/_components/Products/ProductsList';

export default async function Products() {
  const products = await getProducts();
  return (
    <ReduxDataInit<ProductExtend> data={products}>
      <PageStyle>
        <ProductsHeader amount={products.length} />
        <ProductsList products={products} />
      </PageStyle>
    </ReduxDataInit>
  );
}
