'use client';

import { deleteOrder } from '@/app/lib/features/ordersSlice';
import { useAppDispatch } from '@/app/lib/hooks';

type WithOrderDeleteButton = {
  id: number;
};

type ComponentProps = {
  onDelete: () => void;
};

export const withOrderDeleteButton = (
  Component: React.ComponentType<ComponentProps>,
) => {
  const WrappedComponent = ({ id }: WithOrderDeleteButton) => {
    const dispatch = useAppDispatch();
    const deleteCurrentOrder = () => {
      dispatch(deleteOrder(id));
    };

    return <Component onDelete={deleteCurrentOrder} />;
  };

  return WrappedComponent;
};
