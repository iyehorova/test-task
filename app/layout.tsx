import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { TopMenu } from './_components/TopMenu';
import { NavigationMenu } from './_components/NavigationMenu';
import StoreProvider from './StoreProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Orders & products',
  description: 'Keep track of goods simply',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <TopMenu />
          <NavigationMenu />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
