import Image from 'next/image';

type Props = {
  onDelete: () => void;
};
export const DeleteButton: React.FC<Props> = ({ onDelete }) => {
  return (
    <span className="col-1 col-sm-1 ml-auto">
      <Image
        src="/icons/trash-icon.svg"
        alt="Delete order"
        width={15}
        height={15}
        onClick={onDelete}
        className='icon-button icon-button-light'
      />
    </span>
  );
};
