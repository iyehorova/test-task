import { OrdersList } from '@/app/_components/Orders';
import { ReduxDataInit } from '../../_components/ReduxDataInit';
import { getOrders } from '../../api/getOrders';
import { OrderExtend } from '../../types/Order';
import { OrdersHeader } from '@/app/_components/Orders/OrdersHeader';

export default async function Orders() {
  const orders = await getOrders();
  return (
    <ReduxDataInit<OrderExtend> data={orders}>
      <main className="pt-5">
        <article>
          <OrdersHeader amount={orders.length} />
          <OrdersList orders={orders} />
        </article>
      </main>
    </ReduxDataInit>
  );
}
