import Image from 'next/image';
import clsx from 'clsx';

import { prepareOrdersData } from '@/app/helpers/prepareOrdersData';
import { Locales } from '@/app/types/Locales';
import { OrderExtend } from '@/app/types/Order';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { SearchParams } from '@/app/types/SearchParams';

type Props = {
  order: OrderExtend;
  paramsId: number;
};

export const OrderItemShortSize: React.FC<Props> = ({ order, paramsId }) => {
  const setSearchParams = useSetSearchParams('orders');
  const locale = Locales.en;
  const [dateShort, dateLong] = prepareOrdersData(order, locale);
  const { id, products } = order;

  const handleProductsDisplay = () => {
    setSearchParams(SearchParams.id, id === paramsId ? null : id);
  };

  return (
    <div
      role="button"
      className={clsx(
        'border border-muted mb-2 hover-shadow rounded bg-white',
        'd-flex justify-content-between flex-grow-1',
        { 'arrow-button shadow-bottom': id === paramsId },
      )}
      onClick={handleProductsDisplay}
    >
      <div className="row align-items-center py-2 px-3 text-primary row-button d-flex">
        <span className="col-6 d-flex column-gap-2 align-items-center">
          <span
            className={`rounded-circle border border-muted p-2 icon d-none
          d-lg-flex align-items-center justify-content-center`}
          >
            <Image
              src="/icons/list-icon.svg"
              alt="list"
              width={15}
              height={15}
            />
          </span>

          <span>
            {products.length} <span className=" fs-7 text-light">Products</span>
          </span>
        </span>

        <span className="col-6 d-flex flex-column align-items-center">
          <span>
            <span className="fs-8 d-block text-light">{dateShort}</span>
            <span className="fs-7">{dateLong}</span>
          </span>
        </span>
      </div>
    </div>
  );
};
