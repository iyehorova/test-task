import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useRouter, useSearchParams } from 'next/navigation';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { RootState } from '@/app/lib/store';
import ordersSlice from '@/app/lib/features/ordersSlice';
import modalSlice from '@/app/lib/features/modalSlice';
import messageSlice from '@/app/lib/features/messageSlice';
import productsSlice from '@/app/lib/features/productsSlice';
import productsFilterSlice from '@/app/lib/features/productsFilterSlice';
import { OrdersList } from '../OrdersList';
import { mockOrdersExtend } from '@/MockData/mockOrdersExtend';

jest.useFakeTimers();
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => ({
    get: jest.fn(() => null),
  })),
  useRouter: jest.fn(() => ({
    query: {},
    replace: jest.fn(),
  })),
}));

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

jest.mock('../../../hooks/useSetSearchParams', () => ({
  useSetSearchParams: jest.fn(),
}));

const createTestStore = (preloadedState?: RootState) =>
  configureStore({
    reducer: {
      orders: ordersSlice,
      products: productsSlice,
      filteredProducts: productsFilterSlice,
      modal: modalSlice,
      message: messageSlice,
    },
    preloadedState,
  });

describe('OrdersList Component', () => {
  let store: ReturnType<typeof createTestStore>;
  const searchParamsMock = useSearchParams as jest.Mock;
  const routerMock = useRouter as jest.Mock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [false, () => null]);

    jest.clearAllMocks();

    searchParamsMock.mockReturnValue({
      get: jest.fn().mockReturnValue(null),
    });

    routerMock.mockReturnValue({
      query: {},
      push: jest.fn(),
    });

    (useMediaQuery as jest.Mock).mockReturnValue(false);
    store = createTestStore();
  });

  // //////////////////
  it('1. renders the component correctly when there are no search params', () => {
    render(
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <OrdersList orders={mockOrdersExtend} />
        </Suspense>
      </Provider>,
    );
    expect(screen.getByText(/Office Equipment/i)).toBeInTheDocument();
  });

  // //////////////////
  it('2. displays detailed order view when searchParams contains an order ID', async () => {
    routerMock.mockReturnValue({
      query: { id: '1' },
      push: jest.fn(),
    });
    const searchParamsMock = useSearchParams as jest.Mock;

    const { rerender } = render(
      <Provider store={store}>
        <OrdersList orders={mockOrdersExtend} />
      </Provider>,
    );

    await act(async () => {
      searchParamsMock.mockReturnValueOnce({
        get: jest.fn().mockReturnValue('1'),
      });

      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => [true, () => null]);

      rerender(
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <OrdersList orders={mockOrdersExtend} />
          </Suspense>
        </Provider>,
      );
    });

    expect(screen.getByText(/Logitech/i)).toBeInTheDocument();
    expect(screen.getByText(/Mouse/i)).toBeInTheDocument();
  });

  // //////////////////
  it('3. toggles display mode based on searchParams and display mode', async () => {
    const searchParamsMock = useSearchParams as jest.Mock;

    const { rerender } = render(
      <Provider store={store}>
        <OrdersList orders={mockOrdersExtend} />
      </Provider>,
    );

    await act(async () => {
      searchParamsMock.mockReturnValueOnce({
        get: jest.fn().mockReturnValue('1'),
      });
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => [true, () => null]);
      rerender(
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <OrdersList orders={mockOrdersExtend} />
          </Suspense>
        </Provider>,
      );
    });
    expect(screen.getByText(/Logitech/i)).toBeInTheDocument();

    await act(async () => {
      searchParamsMock.mockReturnValueOnce({
        get: jest.fn().mockReturnValue('1'),
      });
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => [false, () => null]);
      rerender(
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <OrdersList orders={mockOrdersExtend} />
          </Suspense>
        </Provider>,
      );
    });
    expect(screen.queryByText(/Logitech/i)).not.toBeInTheDocument();

    await act(async () => {
      searchParamsMock.mockReturnValueOnce({
        get: jest.fn().mockReturnValue(null),
      });
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => [true, () => null]);
      rerender(
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <OrdersList orders={mockOrdersExtend} />
          </Suspense>
        </Provider>,
      );
    });
    expect(screen.queryByText(/Logitech/i)).not.toBeInTheDocument();

    await act(async () => {
      searchParamsMock.mockReturnValueOnce({
        get: jest.fn().mockReturnValue(null),
      });
      jest
        .spyOn(React, 'useState')
        .mockImplementationOnce(() => [false, () => null]);
      rerender(
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <OrdersList orders={mockOrdersExtend} />
          </Suspense>
        </Provider>,
      );
    });

    expect(screen.queryByText(/Logitech G502 HERO/i)).not.toBeInTheDocument();
  });

  // //////////////////
  it('4. renders a layout for small screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    render(
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <OrdersList orders={mockOrdersExtend} />
        </Suspense>
      </Provider>,
    );
    expect(screen.queryByText(/Orders/i)).not.toBeInTheDocument();
  });

  // //////////////////
  it('5. renders a fallback when there are no orders', () => {
    render(
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <OrdersList orders={[]} />
        </Suspense>
      </Provider>,
    );
    expect(
      screen.getByText(/Cool... All orders have been deleted./i),
    ).toBeInTheDocument();
  });
});
