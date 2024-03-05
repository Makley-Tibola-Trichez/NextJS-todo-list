import { useDisclosure } from "@nextui-org/react";
import { TaskData } from "~/types/task.types";

export type ModalDeleteTaskProps = {
  UseDisclosureReturn: ReturnType<typeof useDisclosure>;
  id: string;
  task: TaskData;
};
