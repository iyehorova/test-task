'use client';
import Image from 'next/image';

export const AddButton = () => {
  const handleAddOrder = () => {
    console.log('add order');
  };

  return (
    <Image
      alt="add order"
      src="/icons/add-icon.svg"
      width={30}
      height={30}
      className="border border-3 border-green rounded-circle icon-button icon-button-dark"
      onClick={handleAddOrder}
    />
  );
};
