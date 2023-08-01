import type { Metadata } from 'next'
import { Nunito } from 'next/font/google';

import Navbar from '@/components/navbar/navbar';
import ClientOnly from '@/components/client-only';
import RegisterModal from '@/components/modals/register-modal';
import SearchModal from '@/components/modals/search-modal';
import LoginModal from '@/components/modals/login-modal';
import RentModal from '@/components/modals/rent-modal';
import getCurrentUser from '@/actions/get-current-user';
import ToasterProvider from '@/providers/toaster-provider';

import './globals.css'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({ 
  subsets: ['latin'] 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
