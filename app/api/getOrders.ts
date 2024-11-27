import { ORDERS_PATH, PRODUCTS_PATH } from "../constants";
import { Order, OrderExtend } from "../types/Order";
import { fetchData } from "./fetchData";

export async function getOrders(): Promise<OrderExtend[]> { 
  const promisesMap = [fetchData(ORDERS_PATH), fetchData(PRODUCTS_PATH)];
  const [orders, products] = await Promise.all(promisesMap);

  return orders.map((orderItem: Order) => { 
    return {
      ...orderItem,
      products: products.filter(({ order }: {order: number}) => order === orderItem.id)
    }
  })
  
}