import { ReduxDataInit } from '../_components/ReduxDataInit';
import { getOrders } from '../api/getOrders';
import { OrderExtend } from '../types/Order';
import './page.module.css';

export default async function Orders() {
  const orders = await getOrders();
  return (
    <ReduxDataInit<OrderExtend> data={orders}>
      <main className="page">
        <article>
          <h1>Orders</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '100%' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 200px 300px 500px',
                fontWeight: 'bold'
              }}
            >
              <span>id</span>
              <span>title</span>
              <span>description</span>
              <span>product amount</span>
            </div>
            {orders.map(order => (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 200px 300px 500px',
                }}
                key={order.id}
              >
                <span>{order.id}</span>
                <span>{order.title}</span>
                <span>{order.description}</span>
                <span>{order.products.length}</span>
              </div>
            ))}
          </div>
        </article>
      </main>
    </ReduxDataInit>
  );
}
