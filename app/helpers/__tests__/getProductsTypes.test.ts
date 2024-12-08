import { ProductExtend } from '../../types/Product';
import { mockProductsExtend } from '@/MockData/mockProductsExtend';
import { getProductsTypes } from '../getProductsTypes';

describe('getProductsTypes', () => {
  it('returns an empty array when input is an empty array', () => {
    const products: ProductExtend[] = [];
    const result = getProductsTypes(products);
    expect(result).toEqual([]);
  });

  it('returns unique types in lowercase', () => {
    const products: ProductExtend[] = mockProductsExtend;
    const result = getProductsTypes(products);
    expect(result).toEqual(['mouse', 'keyboard']);
  });
});
