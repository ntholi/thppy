import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import AppNav from './core/AppNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THPPY',
  description: 'Technology Based HIV Program for the Youth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <AppNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
