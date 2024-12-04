import { ProductExtend } from '@/app/types/Product';
import { formatProductDate } from '../../helpers/formatProductDate';
import { DeleteButton } from '../UI/DeleteButton';
import { withProductDeleteButton } from './WithProductDeleteButton';
import { formatShortDate } from '@/app/helpers/formatShortDate';

type Props = {
  product: ProductExtend;
};
export const ProductItem: React.FC<Props> = ({ product }) => {
  const guaranteeStart = formatProductDate(product.guarantee.start);
  const guaranteeStartShort = formatShortDate(product.guarantee.start);
  const guaranteeEnd = formatProductDate(product.guarantee.end);
  const guaranteeEndShort = formatShortDate(product.guarantee.end);
  const ProductDeleteButton = withProductDeleteButton(DeleteButton);

  return (
    <div className="row align-items-center text-primary">
      <span className="col-7 col-sm-3 d-flex flex-column">
        <span className="text-decoration-underline">{product.title}</span>
        <span className="fs-8 text-light">{product.serialNumber}</span>
      </span>
      <span className="col-5 col-sm-2 fs-7">{product.type.toLowerCase()}</span>

      <span className="col-12 d-sm-none border border-muted"></span>

      <span className="col-4 col-sm-2 col-lg-2 d-flex flex-column align-items-center">
        <span className="d-flex justify-content-between w-100">
          <span className="fs-8 text-light">from</span>{' '}
          <span className="d-none d-lg-block fs-7">{guaranteeStart}</span>
          <span className="d-lg-none fs-7">{guaranteeStartShort}</span>
        </span>
        <span className="d-flex justify-content-between w-100">
          <span className="fs-8 text-light">to</span>{' '}
          <span className="d-none d-lg-block fs-7">{guaranteeEnd}</span>
          <span className="d-lg-none fs-7">{guaranteeEndShort}</span>
        </span>
      </span>

      <span className="col-4 col-sm-2 d-flex flex-column align-items-center">
        <span>
          <span className="usd fs-8 text-light d-flex column-gap-2 align-items-baseline">
            {product.price[0].value}
          </span>
          <span className="uah fs-7 d-flex column-gap-2 align-items-baseline">
            {product.price[1].value}
          </span>
        </span>
      </span>

      <span className="col-3 col-sm-2 text-break">
        {product.orderInfo.title}
      </span>
      <span className="col-1">
        <ProductDeleteButton id={product.id} />
      </span>
    </div>
  );
};
