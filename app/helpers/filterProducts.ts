import { ProductExtend } from '../types/Product';

export const filterProducts = (
  products: ProductExtend[],
  filterType: string | null,
) => {
  if (!filterType) {
    return [];
  }

  return products.filter(({ type }) => type.toLowerCase() === filterType);
};
