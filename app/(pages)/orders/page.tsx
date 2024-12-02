import { OrdersHeader } from '@/app/_components/Orders/OrdersHeader';
import { PageStyle } from '@/app/_components/Pages/PageStyle';
import { OrdersList } from '@/app/_components/Orders';
import { ReduxDataInit } from '../../_components/ReduxDataInit';
import { getOrders } from '../../api/getOrders';
import { OrderExtend } from '../../types/Order';

export default async function Orders() {
  const orders = await getOrders();
  return (
    <ReduxDataInit<OrderExtend> data={orders}>
      <PageStyle>
        <OrdersHeader amount={orders.length} />
        <OrdersList orders={orders} />
      </PageStyle>
    </ReduxDataInit>
  );
}
