import { v4 as uuid } from 'uuid';
import { OrderExtend } from '@/app/types/Order';
import { OrderProductItem } from './OrderProductItem';
import { AddButton } from './AddButton';

type Props = {
  order: OrderExtend;
};
export const OrderProductList: React.FC<Props> = ({ order }) => {
  const { id, title, products } = order;
  return (
    <div className="border border-muted flex-grow-1 py-4 px-5 bg-white">
      <h2 className="fs-5 fw-semibold mb-3">{title}</h2>

      <div>
        <div className="d-flex column-gap-3 align-items-center mb-3 icon-button-dark">
          <AddButton width={15} height={15} classes="border-0" />
          <span className="text-success">Add product</span>
        </div>

        <ul className="list-group list-group-disc">
          {products.map(product => (
            <OrderProductItem orderId={id} product={product} key={uuid()} />
          ))}
        </ul>
      </div>
    </div>
  );
};
