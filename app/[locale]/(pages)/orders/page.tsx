import TranslationsProvider from '@/app/_components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { Suspense } from 'react';
import { OrderExtend } from '@/app/types/Order';
import { getOrders } from '@/app/api/getOrders';
import { OrdersHeader } from '@/app/_components/Orders/OrdersHeader';
import { PageStyle } from '@/app/_components/UI/PageStyle';
import { OrdersList } from '@/app/_components/Orders/OrdersList';

import { ReduxDataInit } from '@/app/_components/ReduxDataInit';
import { Locales } from '@/app/types/Locales';

import { switchLangOrdersData } from '@/app/helpers/switchLangData';

const i18nNamespaces = ['orders', 'test'];

export default async function Orders({
  params,
}: {
  params: Promise<{ locale: Locales }>;
}) {
  const { locale } = await params;
  const orders = await getOrders(...switchLangOrdersData(locale));
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <ReduxDataInit<OrderExtend> data={orders}>
        <PageStyle>
          <Suspense fallback={<div>{t('loading')}</div>}>
            <OrdersHeader amount={orders.length} />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <OrdersList orders={orders} />
          </Suspense>
        </PageStyle>
      </ReduxDataInit>
    </TranslationsProvider>
  );
}
