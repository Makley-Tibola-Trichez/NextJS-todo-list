'use client';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NavbarLink,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAddEditTaskContext } from '~/context/add-edit-task.context/add-edit-task.context';

export function PageNavbar() {
  const pathname = usePathname();
  const { onOpen } = useAddEditTaskContext();
  return (
    <>
      <Navbar>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={pathname === '/'}>
            <NavbarLink as={Link} color="foreground" href="/">
              Tarefas pendentes
            </NavbarLink>
          </NavbarItem>
          <NavbarItem isActive={pathname === '/tarefas-concluidas'}>
            <NavbarLink as={Link} href="/tarefas-concluidas" color="foreground">
              Tarefas concluídas
            </NavbarLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button variant="shadow" color="primary" onClick={onOpen}>
              Nova tarefa
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
