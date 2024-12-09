import TranslationsProvider from '@/app/_components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { Suspense } from 'react';
import { ProductExtend } from '@/app/types/Product';
import { getProducts } from '@/app/api/getProducts';
import { ProductsList } from '@/app/_components/Products/ProductsList';
import { PageStyle } from '@/app/_components/UI/PageStyle';
import { ProductsHeader } from '@/app/_components/Products/ProductsHeader';
import { ReduxDataInit } from '@/app/_components/ReduxDataInit';
import { Locales } from '@/app/types/Locales';

import { switchLangProductsData } from '@/app/helpers/switchLangData';

const i18nNamespaces = ['products', 'test'];
export default async function Products({
  params,
}: {
  params: Promise<{ locale: Locales }>;
}) {
  const { locale } = await params;
  const products = await getProducts(...switchLangProductsData(locale));
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <ReduxDataInit<ProductExtend> data={products}>
        <PageStyle>
          <ProductsHeader products={products} />

          <Suspense fallback={<div>Loading...</div>}>
            <ProductsList products={products} />
          </Suspense>
        </PageStyle>
      </ReduxDataInit>
    </TranslationsProvider>
  );
}
