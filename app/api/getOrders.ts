import { Order, OrderExtend } from '../types/Order';
import { fetchData } from './fetchData';

export async function getOrders(
  orders_path: string,
  products_path: string,
): Promise<OrderExtend[]> {
  const promisesMap = [fetchData(orders_path), fetchData(products_path)];
  const [orders, products] = await Promise.all(promisesMap);

  return orders.map((orderItem: Order) => {
    return {
      ...orderItem,
      products: products.filter(
        ({ order }: { order: number }) => order === orderItem.id,
      ),
    };
  });
}
