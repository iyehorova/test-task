import Image from 'next/image';
import { ProductExtend } from '@/app/types/Product';
import { DeleteButton } from '../UI/DeleteButton';
import { DeleteItems } from '@/app/types/DataForDelete';
import { prepareGuaranteeDates } from '@/app/helpers/prepareGuaranteeDates';

type Props = {
  product: ProductExtend;
};

export const ProductItem: React.FC<Props> = ({ product }) => {
  const { id, title, serialNumber, type, guarantee, price, orderInfo } =
    product;

  const {
    guaranteeStart,
    guaranteeStartShort,
    guaranteeEnd,
    guaranteeEndShort,
  } = prepareGuaranteeDates(guarantee);

  return (
    <div className="row align-items-center text-primary">
      <span className="col-2 col-md-1">
        <Image src="/img/monitor.png" alt={title} width={50} height={35} />
      </span>

      <span className="col-6 col-md-2 d-flex flex-column">
        <span className="text-decoration-underline">{title}</span>
        <span className="fs-8 text-light">{serialNumber}</span>
      </span>

      <span className="col-4 col-md-2 fs-7">{type.toLowerCase()}</span>
      <span className="col-12 d-md-none border border-muted"></span>

      <span className="col-4 col-md-2 d-flex flex-column align-items-center">
        <span className="d-flex justify-content-between w-100">
          <span className="fs-8 text-light">from</span>{' '}
          <span className="d-none d-xl-block fs-7">{guaranteeStart}</span>
          <span className="d-xl-none fs-7">{guaranteeStartShort}</span>
        </span>

        <span className="d-flex justify-content-between w-100">
          <span className="fs-8 text-light">to</span>{' '}
          <span className="d-none d-xl-block fs-7">{guaranteeEnd}</span>
          <span className="d-xl-none fs-7">{guaranteeEndShort}</span>
        </span>
      </span>

      <span className="col-4 col-md-2 d-flex flex-column align-items-center">
        <span>
          <span className="usd fs-8 text-light d-flex column-gap-2 align-items-baseline">
            {price[0].value}
          </span>

          <span className="uah fs-7 d-flex column-gap-2 align-items-baseline">
            {price[1].value}
          </span>
        </span>
      </span>

      <span className="col-3 col-md-2 text-break">{orderInfo.title}</span>

      <span className="col-1">
        <DeleteButton
          deleteInfo={{ [DeleteItems.product]: id }}
          item={product}
        />
      </span>
    </div>
  );
};
