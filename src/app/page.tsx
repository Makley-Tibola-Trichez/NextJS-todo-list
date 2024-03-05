'use client';
import { CircularProgress } from '@nextui-org/react';
import { Suspense, lazy } from 'react';
import { useTasksStoreContext } from '~/context/tasksStoreContext';
import { TaskData } from '~/types/task.types';
const TaskItem = lazy(() => import('../components/taskItem/taskItem'));

export default function Home() {
  const { tasks, updateTask } = useTasksStoreContext();
  const _undoneTasks = Array.from(tasks.values()).filter(({ done }) => !done);

  const handleUpdateTask = (task: TaskData) => {
    updateTask({ ...task, done: true });
  };

  return (
    <main className="flex justify-center items-center ">
      <div className="flex gap-4 flex-col py-8 min-w-[50%]">
        <Suspense
          fallback={
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          }
        >
          {_undoneTasks.map((task) => (
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
