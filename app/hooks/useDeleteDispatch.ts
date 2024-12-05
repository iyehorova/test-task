import { DataForDelete, DeleteItems } from '../types/DataForDelete';
import { deleteOrder, deleteOrderProduct } from '../lib/features/ordersSlice';
import { deleteProduct } from '../lib/features/productsSlice';
import { useAppDispatch } from '../lib/hooks';

export const useDeleteDispatch = () => {
  const dispatch = useAppDispatch();

  return (deleteInfo: DataForDelete) => {
    const key = Object.keys(deleteInfo)[0];

    switch (key) {
      case DeleteItems.order:
        dispatch(deleteOrder(deleteInfo[key] as number));
        break;
      case DeleteItems.product:
        dispatch(deleteProduct(deleteInfo[key] as number));
        break;
      case DeleteItems.productInOrder:
        dispatch(deleteOrderProduct(deleteInfo[key] as [number, number]));
        break;
    }
  };
};
