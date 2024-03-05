'use client';
import { CircularProgress } from '@nextui-org/react';
import { Suspense, lazy } from 'react';
import { useTasksStoreContext } from '~/context/tasksStoreContext';
import { TaskData } from '~/types/task.types';

const TaskItem = lazy(() => import('../../components/taskItem/taskItem'));

export default function Home() {
  const { tasks, updateTask } = useTasksStoreContext();

  const _doneTasks = Array.from(tasks.values()).filter(({ done }) => done);
  const handleUpdateTask = (task: TaskData) => {
    updateTask({ ...task, done: false });
  };
  return (
    <main className="flex justify-center items-center flex-col gap-4 ">
      <div className="flex gap-4 flex-col py-8 min-w-[50%]">
        <Suspense
          fallback={
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          }
        >
          {_doneTasks.map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              onChangeTaskStatus={handleUpdateTask}
            />
          ))}
        </Suspense>
      </div>
    </main>
  );
}
