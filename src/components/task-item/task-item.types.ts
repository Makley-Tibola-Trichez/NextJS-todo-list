import { TaskData } from '~/types/task.types';

export type TaskItemProps = {
  task: TaskData;
  onChangeTaskStatus?: (task: TaskData) => void;
  onEdit(id: string, task: TaskData): void;
};
