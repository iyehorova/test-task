import { Product } from '../types/Product';
type ProductPrice = {
  usd: number;
  uah: number;
};

export const getOrdersPrice = (orderProducts: Product[]): ProductPrice => {
  return orderProducts.reduce(
    (acc, product) => {
      acc.usd += product.price[0].value;
      acc.uah += product.price[1].value;
      return acc;
    },
    { usd: 0, uah: 0 },
  );
};
