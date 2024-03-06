import { Spinner, useDisclosure } from '@nextui-org/react';
import React, {
  Suspense,
  createContext,
  lazy,
  useContext,
  useState,
} from 'react';
import { Backdrop } from '~/components/backdrop/backdrop';
import { TaskData } from '~/types/task.types';
import {
  AddEditTaskContextValues,
  AddEditTaskState,
} from './add-edit-task.context.types';

const ModalAddEditTask = lazy(
  () =>
    import(
      '~/context/add-edit-task.context/modal-add-edit-task/modal-add-edit-task'
    )
);

const AddEditTaskContext = createContext(
  null as unknown as AddEditTaskContextValues
);

export function AddEditTaskProvider({ children }: React.PropsWithChildren) {
  const disclosure = useDisclosure();

  const [_addEditTask, _setAddEditTask] = useState<AddEditTaskState>({});

  function onOpen(id?: string, defaultValues?: TaskData) {
    _setAddEditTask({ id, defaultValues });

    disclosure.onOpen();
  }

  return (
    <AddEditTaskContext.Provider value={{ onOpen }}>
      <Suspense
        fallback={
          <Backdrop>
            <Spinner size="lg" />
          </Backdrop>
        }
      >
        <ModalAddEditTask UseDisclosureReturn={disclosure} {..._addEditTask} />
      </Suspense>
      {children}
    </AddEditTaskContext.Provider>
  );
}

export function useAddEditTaskContext() {
  const _context = useContext(AddEditTaskContext);

  if (_context === null) {
    throw new Error(
      'useAddEditTaskContext must be used within a AddEditTaskProvider'
    );
  }

  return _context;
}
