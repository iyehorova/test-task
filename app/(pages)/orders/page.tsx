import { OrdersHeader } from '@/app/_components/Orders/OrdersHeader';
import { PageStyle } from '@/app/_components/UI/PageStyle';
import { OrdersList } from '@/app/_components/Orders/OrdersList';
import { ReduxDataInit } from '../../_components/ReduxDataInit';
import { getOrders } from '../../api/getOrders';
import { OrderExtend } from '../../types/Order';
import { Suspense } from 'react';

export default async function Orders() {
  const orders = await getOrders();
  return (
    <ReduxDataInit<OrderExtend> data={orders}>
      <PageStyle>
        <OrdersHeader amount={orders.length} />
        <Suspense fallback={<div>Loading...</div>}>
          <OrdersList orders={orders} />
        </Suspense>
      </PageStyle>
    </ReduxDataInit>
  );
}
