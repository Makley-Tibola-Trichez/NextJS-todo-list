'use client';
import { NextUIProvider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { PageNavbar } from '~/app/page-navbar';
import './globals.css';
import { TasksStoreProvider } from '~/context/tasks-store.context/tasks-store.context';
import { AddEditTaskProvider } from '~/context/add-edit-task.context/add-edit-task.context';

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
            <AddEditTaskProvider>
              <PageNavbar />
              {children}
            </AddEditTaskProvider>
          </TasksStoreProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
