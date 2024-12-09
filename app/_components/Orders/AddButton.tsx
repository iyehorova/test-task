'use client';
import clsx from 'clsx';
import Image from 'next/image';

type Props = {
  width?: number;
  height?: number;
  classes?: string;
};

export const AddButton: React.FC<Props> = ({
  width = 30,
  height = 30,
  classes = '',
}) => {
  return (
    <Image
      alt="add order"
      src="/icons/add-icon.svg"
      width={width}
      height={height}
      className={clsx(
        'border border-3 border-green rounded-circle icon-button',
        classes,
      )}
    />
  );
};
