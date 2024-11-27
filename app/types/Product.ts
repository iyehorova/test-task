import { Order } from "./Order"

export interface Product {
  id: number,
  serialNumber: string,
  isNew: number,
  photo: string,
  title: string,
  type: string,
  specification: string,
  guarantee: Guarantee,
  price: Price[],
  order: number,
  date: string
}

export interface Guarantee {
  start: string,
  end: string,
}

export interface Price {
  value: number,
  symbol: string,
  isDefault: number
}

export interface ProductExtend extends Product { 
  orderInfo: Order
}