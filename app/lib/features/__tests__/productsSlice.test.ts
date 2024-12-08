import productsReducer, {
  initializeProducts,
  deleteProduct,
  selectProducts,
  selectProductsAmount,
  selectProductsTypes,
} from '../productsSlice';
import { RootState } from '../../store';
import { mockProductsExtend } from '@/MockData/mockProductsExtend';
import { mockState } from '@/MockData/mockState';

const mockProducts = mockProductsExtend;

describe('productsSlice', () => {
  it('should return the initial state', () => {
    const state = productsReducer(undefined, initializeProducts(mockProducts));
    expect(state.products).toEqual(mockProducts);
  });

  it('should handle initializeProducts', () => {
    const action = initializeProducts(mockProducts);
    const state = productsReducer(undefined, action);
    expect(state.products).toEqual(mockProducts);
  });

  it('should handle deleteProduct', () => {
    const initialState = { products: mockProducts };
    const action = deleteProduct(1);
    const state = productsReducer(initialState, action);
    expect(state.products).toEqual([mockProducts[1]]);
  });

  it('should handle deleteProduct and return null if products = null', () => {
    const initialState = { products: null };
    const action = deleteProduct(1);
    const state = productsReducer(initialState, action);
    expect(state.products).toBeNull();
  });
});

describe('selectors', () => {
  const state = mockState;

  it('selectProducts should return products', () => {
    expect(selectProducts(state)).toEqual(mockProducts);
  });

  it('selectProductsAmount should return the number of products', () => {
    expect(selectProductsAmount(state)).toBe(2);
  });

  it('selectProductsAmount should return 0 if products = null', () => {
    const state = {
      ...mockState,
      products: {
        products: null,
      },
    };
    expect(selectProductsAmount(state)).toBe(0);
  });

  it('selectProductsTypes should return unique types', () => {
    expect(selectProductsTypes(state)).toEqual(['mouse', 'keyboard']);
  });

  it('should return null when products are null', () => {
    const state = {
      ...mockState,
      products: {
        products: null,
      },
    };

    expect(selectProductsTypes(state as RootState)).toBeNull();
  });
});
