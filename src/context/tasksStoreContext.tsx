'use client';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { TaskData } from '~/types/task.types';
import { TasksStoreContextValues } from './tasksStoreContext.types';

// Cast type to tread data as always defined and avoid null checks because if it is null, it will throw an error
const TasksStoreContext = createContext(
  null as unknown as TasksStoreContextValues
);

export const TasksStoreProvider = ({ children }: PropsWithChildren) => {
  const [tasks, _setTasks] = useState<Map<string, TaskData>>(new Map());

  const addNewTask = (data: TaskData) => {
    const newTask = new Map(tasks);
    newTask.set(data.id, data);
    _setTasks(newTask);
  };

  const removeTask = (id: string) => {
    const newTask = new Map(tasks);
    newTask.delete(id);
    _setTasks(newTask);
  };

  const updateTask = addNewTask;

  return (
    <TasksStoreContext.Provider
      value={{
        tasks,
        addNewTask,
        removeTask,
        updateTask,
      }}
    >
      {children}
    </TasksStoreContext.Provider>
  );
};

export const useTasksStoreContext = () => {
  const context = useContext(TasksStoreContext);

  if (context === null) {
    throw new Error(
      'useTasksStoreContext must be used within a TasksStoreProvider'
    );
  }

  return context;
};
