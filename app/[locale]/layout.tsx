import i18nConfig from '@/i18nConfig';

import { dir } from 'i18next';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import StoreProvider from './StoreProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { notFound } from 'next/navigation';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Orders & products',
  description: 'Keep track of goods simply',
};
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }
  return (
    <StoreProvider>
      <html lang={locale} dir={dir(locale)}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
