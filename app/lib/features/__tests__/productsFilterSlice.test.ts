import productsFilterReducer, {
  setFilter,
  clearFilter,
  selectFilteredProducts,
  selectFilteredProductsAmount,
} from '../productsFilterSlice';

import { mockProductsExtend } from '@/MockData/mockProductsExtend';
import { mockState } from '@/MockData/mockState';

const mockProducts = mockProductsExtend;

describe('productsFilterSlice', () => {
  it('should return the initial state', () => {
    const state = productsFilterReducer(undefined, setFilter(mockProducts));
    expect(state.products).toEqual(mockProducts);
  });

  it('should handle setFilter', () => {
    const action = setFilter(mockProducts);
    const state = productsFilterReducer(undefined, action);
    expect(state.products).toEqual(mockProducts);
  });

  it('should handle clearFilter', () => {
    const initialState = { products: mockProducts };
    const action = clearFilter();
    const state = productsFilterReducer(initialState, action);
    expect(state.products).toEqual([]);
  });
});

describe('selectors', () => {
  const state = mockState;

  it('selectFilteredProducts should return products', () => {
    expect(selectFilteredProducts(state)).toEqual([]);
  });

  it('selectFilteredProductsAmount should return the number of products', () => {
    expect(selectFilteredProductsAmount(state)).toBe(0);
  });
});
