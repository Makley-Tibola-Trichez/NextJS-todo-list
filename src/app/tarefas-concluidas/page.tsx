'use client';
import { Spinner } from '@nextui-org/react';
import { Suspense, lazy } from 'react';
import { Backdrop } from '~/components/backdrop/backdrop';
import { useAddEditTaskContext } from '~/context/add-edit-task.context/add-edit-task.context';
import { useTasksStoreContext } from '~/context/tasks-store.context/tasks-store.context';
import { TaskData } from '~/types/task.types';

const TaskItem = lazy(() => import('../../components/task-item/task-item'));

export default function Home() {
  const { tasks, updateTask } = useTasksStoreContext();

  const { onOpen: onEdit } = useAddEditTaskContext();
  const _doneTasks = Array.from(tasks.values()).filter(({ done }) => done);
  const handleUpdateTask = (task: TaskData) => {
    updateTask({ ...task, done: false });
  };

  return (
    <main className="flex justify-center items-center flex-col gap-4 ">
      <div className="flex gap-4 flex-col py-8 min-w-[50%]">
        <Suspense
          fallback={
            <Backdrop>
              <Spinner size="lg" />
            </Backdrop>
          }
        >
          {_doneTasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              onEdit={onEdit}
              onChangeTaskStatus={handleUpdateTask}
            />
          ))}
        </Suspense>
      </div>
    </main>
  );
}
