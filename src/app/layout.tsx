'use client';
import { NextUIProvider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { PageNavbar } from '~/app/pageNavbar';
import './globals.css';
import { TasksStoreProvider } from '~/context/tasksStoreContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <TasksStoreProvider>
            <PageNavbar />
            {children}
          </TasksStoreProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
