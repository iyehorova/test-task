import { ProductsHeader } from '@/app/_components/Products/ProductsHeader';
import { ReduxDataInit } from '../../_components/ReduxDataInit';
import { getProducts } from '../../api/getProducts';
import { ProductExtend } from '../../types/Product';
import { PageStyle } from '@/app/_components/Pages/PageStyle';

export default async function Products() {
  const products = await getProducts();
  return (
    <ReduxDataInit<ProductExtend> data={products}>
      <PageStyle>
        <ProductsHeader amount={products.length} />
        <div style={{ display: 'grid', gridTemplateColumns: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '50px 200px 300px 500px',
              fontWeight: 'bold',
            }}
          >
            <span>id</span>
            <span>serialNumber</span>
            <span>title</span>
            <span>order title</span>
          </div>
          {products.map(product => (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 200px 300px 500px',
              }}
              key={product.id}
            >
              <span>{product.id}</span>
              <span>{product.serialNumber}</span>
              <span>{product.title}</span>
              <span>{product.orderInfo.title}</span>
            </div>
          ))}
        </div>
      </PageStyle>
    </ReduxDataInit>
  );
}
