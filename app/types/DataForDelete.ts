type IdOrder = number;
type IdProduct = number;
type Id = number;

export enum DeleteItems {
  order = 'order',
  product = 'product',
  productInOrder = 'productInOrder',
}

type DataForDeleteValues = {
  [DeleteItems.order]: Id;
  [DeleteItems.product]: Id;
  [DeleteItems.productInOrder]: [IdOrder, IdProduct];
};

export type DataForDelete = {
  [K in DeleteItems]?: DataForDeleteValues[K];
};
