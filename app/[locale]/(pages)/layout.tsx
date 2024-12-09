import TranslationsProvider from '@/app/_components/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { TopMenu } from '../../_components/TopMenu';
import { NavigationMenu } from '../../_components/NavigationMenu';
import { ModalWindow } from '../../_components/ModalWindow';
import { Message } from '../../_components/Message';
import { Suspense } from 'react';

const i18nNamespaces = ['common'];

export default async function PagesLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="row vh-100">
        <div className="container-fluid position-relative z-3 shadow-bottom">
          <Suspense fallback={<div>Loading...</div>}>
            <TopMenu />
          </Suspense>
        </div>

        <div className="col-md-2 mr-5 position-relative h-sm-100 shadow-right">
          <Suspense fallback={<div>Loading...</div>}>
            <NavigationMenu />
          </Suspense>
        </div>

        <div className="col-md-10 bg-body-tertiary min-vh-100 position-relative">
          <div className="container-fluid">{children}</div>
          <ModalWindow />
        </div>

        <Message />
      </div>
    </TranslationsProvider>
  );
}
