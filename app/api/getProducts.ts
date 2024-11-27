import { ORDERS_PATH, PRODUCTS_PATH } from "../constants";
import { Product, ProductExtend } from "../types/Product";
import { fetchData } from "./fetchData";

export async function getProducts(): Promise<ProductExtend[]> { 
  const promisesMap = [fetchData(PRODUCTS_PATH), fetchData(ORDERS_PATH)];
  const [products, orders] = await Promise.all(promisesMap);
  return products.map((productItem: Product) => { 
    return {
      ...productItem,
      orderInfo: orders.find(({ id }: { id: number }) => id === productItem.order)
    }
  })
}