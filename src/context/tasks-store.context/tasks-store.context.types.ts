import { TaskData } from "~/types/task.types";

export type TasksStoreContextValues = {
  tasks: Map<string, TaskData>;
  addNewTask(data: TaskData): void;
  removeTask(id: string): void;
  updateTask(data: TaskData): void;
}
