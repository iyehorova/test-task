import { deleteOrder } from '@/app/lib/features/ordersSlice';
import { useAppDispatch } from '@/app/lib/hooks';
import Image from 'next/image';

type Props = {
  orderId: number;
};
export const DeleteButton: React.FC<Props> = ({ orderId }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <span className="col-1 col-sm-1">
      <Image
        src="/icons/trash-icon.svg"
        alt="Delete order"
        width={15}
        height={15}
        onClick={handleDelete}
        className='icon-button icon-button-light'
      />
    </span>
  );
};
