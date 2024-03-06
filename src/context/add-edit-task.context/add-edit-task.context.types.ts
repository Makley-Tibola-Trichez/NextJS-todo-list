import { ModalAddEditTaskForm } from '~/context/add-edit-task.context/modal-add-edit-task/modal-add-edit-task.types';
import { TaskData } from '~/types/task.types';

export type AddEditTaskState = {
  defaultValues?: TaskData;
  id?: string;
};
export type AddEditTaskContextValues = {
  onOpen(id: string, defaultValues?: TaskData): void;
  onOpen(): void;
};
