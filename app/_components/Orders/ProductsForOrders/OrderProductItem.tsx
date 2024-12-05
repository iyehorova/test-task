import { Product } from '@/app/types/Product';
import { DeleteButton } from '../../UI/DeleteButton';
import { DeleteItems } from '@/app/types/DataForDelete';

type Props = {
  orderId: number;
  product: Product;
};

export const OrderProductItem: React.FC<Props> = ({ orderId, product }) => {
  const { id, title, serialNumber, type } = product;

  return (
    <li className="row list-group-item border mb-1 border-muted hover-shadow rounded d-flex align-items-center">
      <span className="col-7 d-flex flex-column">
        <span>{title}</span>
        <span className="fs-8 text-muted">{serialNumber}</span>
      </span>

      <span className="col-3 text-break">{type}</span>
      
      <span className="col-1 text-end ml-auto">
        <DeleteButton
          deleteInfo={{ [DeleteItems.productInOrder]: [orderId, id] }}
          item={product}
        />
      </span>
    </li>
  );
};
