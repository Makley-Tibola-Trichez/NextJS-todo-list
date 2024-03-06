import { useDisclosure } from '@nextui-org/react';
import { TaskData } from '~/types/task.types';

export type ModalAddEditTaskProps = {
  id?: string;
  defaultValues?: TaskData;
  UseDisclosureReturn: ReturnType<typeof useDisclosure>;
};

export type ModalAddEditTaskForm = {
  title: string;
  description?: string;
  done: boolean;
};
