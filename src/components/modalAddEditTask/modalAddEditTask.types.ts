import { useDisclosure } from "@nextui-org/react";

export type ModalAddEditTaskProps = {
  id?: string;
  UseDisclosureReturn: ReturnType<typeof useDisclosure>;
};
