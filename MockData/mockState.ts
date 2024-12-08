import { Item } from '@/app/types/Item';
import { mockOrdersExtend } from './mockOrdersExtend';
import { DataForDelete } from '@/app/types/DataForDelete';
import { mockProductsExtend } from './mockProductsExtend';
import { ProductExtend } from '@/app/types/Product';

export const mockState = {
  orders: {
    orders: mockOrdersExtend,
  },
  products: {
    products: mockProductsExtend,
  },
  filteredProducts: {
    products: [] as ProductExtend[],
  },
  modal: {
    displayModal: false,
    dataForDelete: {} as DataForDelete,
    item: {} as Item,
  },
  message: {
    isDisplay: false,
  },
};
