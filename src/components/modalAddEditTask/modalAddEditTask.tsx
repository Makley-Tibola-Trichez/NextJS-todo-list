import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTasksStoreContext } from '~/context/tasksStoreContext';
import { ErrorMessages } from '~/lib/errorMessages';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { ModalAddEditTaskProps } from './modalAddEditTask.types';
import { Switch } from '../switch/switch';

type ModalAddEditTaskForm = {
  title: string;
  description?: string;
  done: boolean;
};

export default function ModalAddEditTask({
  id,
  UseDisclosureReturn,
}: ModalAddEditTaskProps) {
  const { isOpen, onOpenChange } = UseDisclosureReturn;

  let _label = 'Adicionar tarefa';

  if (id) {
    _label = 'Editar tarefa';
  }

  const form = useForm<ModalAddEditTaskForm>();

  const { addNewTask } = useTasksStoreContext();

  const _onSubmit = (submitedData: ModalAddEditTaskForm) => {
    const _id = id ?? crypto.randomUUID();

    const _body = {
      id: _id,
      title: submitedData.title,
      description: submitedData.description ?? null,
      done: Boolean(submitedData.done),
    };

    addNewTask(_body);

    form.reset();
    UseDisclosureReturn.onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(_onSubmit)}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {_label}
                </ModalHeader>
                <ModalBody>
                  <Input
                    name="title"
                    label="Tarefa"
                    rules={
                      new ErrorMessages(
                        ErrorMessages.required(),
                        ErrorMessages.minLength(3)
                      )
                    }
                  />
                  <Textarea name="description" label="Descrição" />
                  <Switch name="done">
                    <span className="text-xs text-foreground">Concluído</span>
                  </Switch>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Fechar
                  </Button>
                  <Button color="primary" type="submit">
                    Salvar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </FormProvider>
    </Modal>
  );
}
