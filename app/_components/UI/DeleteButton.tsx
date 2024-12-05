import { useAppDispatch } from '@/app/lib/hooks';
import { openModal } from '@/app/lib/features/modalSlice';
import { DataForDelete } from '@/app/types/DataForDelete';
import { Item } from '@/app/types/Item';
import { TrashIcon } from './TrashIcon';

type Props = {
  deleteInfo: DataForDelete;
  item: Item;
};

export const DeleteButton: React.FC<Props> = ({ deleteInfo, item }) => {
  const dispatch = useAppDispatch();
  const handleDelete = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    dispatch(openModal([deleteInfo, item]));
  };

  return (
    <span
      className="col-1 col-sm-1 ml-auto icon-button icon-button-light icon-muted"
      onClick={handleDelete}
    >
      <TrashIcon width={15} height={15} />
    </span>
  );
};
