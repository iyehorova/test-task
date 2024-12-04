'use client';
import { ProductExtend } from '@/app/types/Product';
import { PageHeaderStyles } from '../UI/PageHeaderStyles';
import { PageTitle } from '../PageTitle';
import { selectProducts } from '@/app/lib/features/productsSlice';
import { Pages } from '@/app/types/Pages';
import { capitalizeWord } from '@/app/utils/capitalizeWord';

type Props = {
  amount: number;
};

export const ProductsHeader: React.FC<Props> = ({ amount }) => {
  const pageTitle = capitalizeWord(Pages.products);
   return (
    <PageHeaderStyles>
      <PageTitle<ProductExtend>
        amount={amount}
        select={selectProducts}
        title={pageTitle}
      />
    </PageHeaderStyles>
  );
};
