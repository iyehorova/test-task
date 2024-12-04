import { useAppDispatch } from '@/app/lib/hooks';
import { deleteProduct } from '@/app/lib/features/productsSlice';

type WithProductDeleteButton = {
  id: number;
};

type ComponentProps = {
  onDelete: () => void;
};

export const withProductDeleteButton = (
  Component: React.ComponentType<ComponentProps>,
) => {
  const WrappedComponent = ({ id }: WithProductDeleteButton) => {
    const dispatch = useAppDispatch();
    const deleteCurrentProduct = () => {
      dispatch(deleteProduct(id));
    };

    return <Component onDelete={deleteCurrentProduct} />;
  };

  return WrappedComponent;
};
