import { useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';

import { OrderExtend } from '@/app/types/Order';
import { Pages } from '@/app/types/Pages';
import { OrderProductItem } from './OrderProductItem';
import { AddButton } from '../AddButton';

type Props = {
  order: OrderExtend;
  isSmallScreen: boolean;
};

export const OrderProductList: React.FC<Props> = ({ order, isSmallScreen }) => {
  const { id, title, products } = order;
  const router = useRouter();
  const handleReturnToOrders = () => {
    router.replace(`/${Pages.orders}`);
  };

  return (
    <div
      className={clsx(
        'border border-muted flex-grow-1 py-4 px-md-3 px-lg-5 bg-white rounded',
        { 'border-0 bg-none': isSmallScreen },
      )}
    >
      <div className="d-flex column-gap-3 align-items-center mb-3">
        {isSmallScreen && (
          <span
            className=" icon-button icon-button-light"
            onClick={handleReturnToOrders}
          >
            <Image
              src="/icons/arrow-back-icon.svg"
              alt="return to list orders"
              title="return to list orders"
              width={30}
              height={30}
            />
          </span>
        )}
        <h2 className="fs-5 fw-semibold">{title}</h2>
      </div>

      <div>
        <div className="d-flex column-gap-3 align-items-center mb-3 icon-button-dark">
          <AddButton width={15} height={15} classes="border-0" />
          <span className="text-success">Add product</span>
        </div>

        <ul
          className={clsx('list-group', { 'list-group-disc': !isSmallScreen })}
        >
          {products.map(product => (
            <OrderProductItem orderId={id} product={product} key={uuid()} />
          ))}
        </ul>
      </div>
    </div>
  );
};
