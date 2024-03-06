import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../../../components/input/input';
import { Switch } from '../../../components/switch/switch';
import { Textarea } from '../../../components/textarea/textarea';
import {
  ModalAddEditTaskForm,
  ModalAddEditTaskProps,
} from './modal-add-edit-task.types';
import { useTasksStoreContext } from '~/context/tasks-store.context/tasks-store.context';
import { ErrorMessages } from '~/lib/error-messages';

export default function ModalAddEditTask({
  id,
  defaultValues,
  UseDisclosureReturn,
}: ModalAddEditTaskProps) {
  const { isOpen, onOpenChange } = UseDisclosureReturn;

  let _label = 'Adicionar tarefa';

  if (id) {
    _label = 'Editar tarefa';
  }
  const _form = useForm<ModalAddEditTaskForm>({
    defaultValues: () => {
      return Promise.resolve(defaultValues as ModalAddEditTaskForm);
    },
  });

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

    UseDisclosureReturn.onClose();
  };

  const _onClose = () => {
    UseDisclosureReturn.onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <FormProvider {..._form}>
        <form onSubmit={_form.handleSubmit(_onSubmit)}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">{_label}</ModalHeader>
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
              <Button color="danger" variant="light" onPress={_onClose}>
                Fechar
              </Button>
              <Button color="primary" type="submit">
                Salvar
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </FormProvider>
    </Modal>
  );
}
