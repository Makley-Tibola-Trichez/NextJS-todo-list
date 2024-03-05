'use client';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NavbarLink,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ModalAddEditTask from '~/components/modalAddEditTask/modalAddEditTask';

export function PageNavbar() {
  const pathname = usePathname();
  const disclosure = useDisclosure();
  return (
    <>
      <ModalAddEditTask UseDisclosureReturn={disclosure} />
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
            <Button
              variant="shadow"
              color="primary"
              onClick={disclosure.onOpen}
            >
              Nova tarefa
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
