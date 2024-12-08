import Image from 'next/image';

import { OrderExtend } from '@/app/types/Order';
import { Locales } from '@/app/types/Locales';
import { Pages } from '@/app/types/Pages';
import { SearchParams } from '@/app/types/SearchParams';
import { DeleteItems } from '@/app/types/DataForDelete';
import { prepareOrdersData } from '@/app/helpers/prepareOrdersData';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { DeleteButton } from '../UI/DeleteButton';
import { ItemsStyles } from '../UI/ItemsStyle';

type Props = {
  order: OrderExtend;
};

export const OrderItemFullSize: React.FC<Props> = ({ order }) => {
  const locale = Locales.en;
  const [dateShort, dateLong, usd, uah] = prepareOrdersData(order, locale);
  const { id, title, products } = order;

  const setSearchParams = useSetSearchParams(Pages.orders);

  const handleProductsDisplay = () => {
    setSearchParams(SearchParams.id, id);
  };

  return (
    <ItemsStyles>
      <div
        role='button'
        className="row align-items-center text-primary row-button"
        onClick={handleProductsDisplay}
      >
        <span className="col-12 col-sm-4 col-md-5 text-decoration-underline">
          {title}
        </span>
        <span className="col-12 d-sm-none border border-muted"></span>

        <span className="col-1 col-lg-2 d-flex column-gap-2 align-items-center">
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
            {products.length}{' '}
            <span className="d-lg-none text-light fs-7">pc.</span>
            <span className="d-none d-lg-block fs-7 text-light">Products</span>
          </span>
        </span>

        <span className="col-4 col-md-3 col-lg-2  d-flex flex-column align-items-center">
          <span>
            <span className="fs-8 d-block text-light">{dateShort}</span>
            <span className="fs-7">{dateLong}</span>
          </span>
        </span>

        <span className="col-5 col-sm-2 d-flex flex-column align-items-center">
          <span>
            <span className="fs-8 usd d-flex text-light column-gap-2 align-items-baseline">
              {usd}
            </span>

            <span className="fs-7 uah d-flex column-gap-2 align-items-baseline">
              {uah}
            </span>
          </span>
        </span>

        <DeleteButton deleteInfo={{ [DeleteItems.order]: id }} item={order} />
      </div>
    </ItemsStyles>
  );
};
