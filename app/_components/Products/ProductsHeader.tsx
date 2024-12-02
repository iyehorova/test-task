'use client';
import { ProductExtend } from '@/app/types/Product';
import { PageHeaderStyles } from '../Pages/PageHeaderStyles';
import { PageTitle } from '../Pages/PageTitle';
import { selectProducts } from '@/app/lib/features/productsSlice';
import { Pages } from '@/app/types/Pages';

type Props = {
  amount: number;
};

export const ProductsHeader: React.FC<Props> = ({ amount }) => {
  return (
    <PageHeaderStyles>
      <PageTitle<ProductExtend>
        amount={amount}
        select={selectProducts}
        title={Pages.products}
      />
    </PageHeaderStyles>
  );
};
