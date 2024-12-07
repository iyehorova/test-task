import { Suspense } from 'react';
import { OrderExtend } from '@/app/types/Order';
import { getOrders } from '@/app/api/getOrders';
import { OrdersHeader } from '@/app/_components/Orders/OrdersHeader';
import { PageStyle } from '@/app/_components/UI/PageStyle';
import { OrdersList } from '@/app/_components/Orders/OrdersList';
import { ReduxDataInit } from '@/app/_components/ReduxDataInit';

export default async function Orders() {
  const orders = await getOrders();
  return (
    <ReduxDataInit<OrderExtend> data={orders}>
      <PageStyle>
        <Suspense fallback={<div>Loading...</div>}>
          <OrdersHeader amount={orders.length} />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <OrdersList orders={orders} />
        </Suspense>
      </PageStyle>
    </ReduxDataInit>
  );
}
