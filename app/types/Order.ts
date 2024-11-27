import { Product } from "./Product"

export interface Order { 
  id: number,
  title: string,
  date: string,
  description: string,
}

export interface OrderExtend extends Order { 
  products: Product[]
}