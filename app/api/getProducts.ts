import { Product, ProductExtend } from '../types/Product';
import { fetchData } from './fetchData';

export async function getProducts(
  products_path: string,
  orders_path: string,
): Promise<ProductExtend[]> {
  const promisesMap = [fetchData(products_path), fetchData(orders_path)];
  const [products, orders] = await Promise.all(promisesMap);
  return products.map((productItem: Product) => {
    return {
      ...productItem,
      orderInfo: orders.find(
        ({ id }: { id: number }) => id === productItem.order,
      ),
    };
  });
}
