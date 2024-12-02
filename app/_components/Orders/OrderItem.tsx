import Image from 'next/image';
import { Locales } from '@/app/types/Locales';
import { OrderExtend } from '@/app/types/Order';
import { formatOrderDate } from '@/app/helpers/formatOrderDate';
import { formatShortDate } from '@/app/helpers/formatShortOrderDate';
import { getOrdersPrice } from '@/app/helpers/getOrdersPrice';
import { DeleteButton } from './DeleteButton';


type Props = {
  order: OrderExtend;
};

export const OrderItem: React.FC<Props> = ({ order }) => {
  const locale = Locales.en;
  const dateShort = formatShortDate(order.date)
  const dateLong = formatOrderDate(order.date, locale);
  const { usd, uah } = getOrdersPrice(order.products);

  return (
    <div className="row align-items-center text-primary">
      <span className="col-sm-6 col-md-5 text-decoration-underline">
        {order.title}
      </span>

      <span className="col-1 col-lg-2 d-flex column-gap-2 align-items-center">
        <span
          className={`rounded-circle border border-muted p-2 icon d-none
          d-lg-flex align-items-center justify-content-center`}
        >
          <Image src="/icons/list-icon.svg" alt="list" width={15} height={15} />
        </span>

        <span>
          {order.products.length}{' '}
          <span className="d-lg-none text-light fs-7">pc.</span>
          <span className="d-none d-lg-block fs-7 text-light">Products</span>
        </span>
      </span>

      <span className="col-4 col-md-3 col-lg-2">
        <span className='fs-8 d-block text-light'>{ dateShort}</span>
        <span className='fs-7'>{ dateLong}</span>
      </span>

      <span className="col-5 col-sm-2 d-flex flex-column  align-items-center">
        <span>
          <span className="fs-8 usd d-flex text-light column-gap-2">{usd}</span>
          <span className="fs-7 uah d-flex column-gap-2">{uah}</span>
        </span>
      </span>

      <DeleteButton orderId={order.id} />
    </div>
  );
};
