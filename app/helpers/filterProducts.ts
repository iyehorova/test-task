import { ProductExtend } from "../types/Product";

export const filterProducts = (products: ProductExtend[], filterType: string) => { 
  return products.filter(({type }) => type.toLowerCase() === filterType )
}