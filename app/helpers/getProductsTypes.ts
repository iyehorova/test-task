import { ProductExtend } from "../types/Product";

export const getProductsTypes = (products: ProductExtend[]): string[] => { 
  return products.reduce<string[]>((acc, product) => { 
    const type = product.type.toLowerCase();
    if (!acc.includes(type)) { 
      acc.push(type);
    }
    return acc;
  }, [])
}