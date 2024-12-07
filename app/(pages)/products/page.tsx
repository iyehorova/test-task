import { Suspense } from 'react';
import { ProductExtend } from '@/app/types/Product';
import { getProducts } from '@/app/api/getProducts';
import { ProductsList } from '@/app/_components/Products/ProductsList';
import { PageStyle } from '@/app/_components/UI/PageStyle';
import { ProductsHeader } from '@/app/_components/Products/ProductsHeader';
import { ReduxDataInit } from '@/app/_components/ReduxDataInit';

export default async function Products() {
  const products = await getProducts();

  return (
    <ReduxDataInit<ProductExtend> data={products}>
      <PageStyle>
        <ProductsHeader products={products} />

        <Suspense fallback={<div>Loading...</div>}>
          <ProductsList products={products} />
        </Suspense>
      </PageStyle>
    </ReduxDataInit>
  );
}
