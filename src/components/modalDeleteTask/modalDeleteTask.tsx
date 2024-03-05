import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';

import { ModalDeleteTaskProps } from './modalDeleteTask.types';
import { useTasksStoreContext } from '~/context/tasksStoreContext';

export default function ModalDeleteTask({
  UseDisclosureReturn,
  id,
  task,
}: ModalDeleteTaskProps) {
  const { isOpen, onOpenChange, onClose } = UseDisclosureReturn;

  const { removeTask } = useTasksStoreContext();

  const _handleClick = () => {
    onClose();

    removeTask(id);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Adicionar tarefa
            </ModalHeader>
            <ModalBody>
              <>
                Tem certeza que deseja deletar a tarefa <b>{task.title}?</b>
              </>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={_handleClick}>
                Excluir
              </Button>
              <Button variant="light" onPress={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
