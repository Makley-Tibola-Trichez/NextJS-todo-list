import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import { Check, Pencil, Trash, X } from '@phosphor-icons/react';
import ModalDeleteTask from '../modalDeleteTask/modalDeleteTask';
import { TaskItemProps } from './taskItem.types';

export default function TaskItem({ task, onChangeTaskStatus }: TaskItemProps) {
  const disclosure = useDisclosure();
  return (
    <>
      <ModalDeleteTask
        id={task.id}
        task={task}
        UseDisclosureReturn={disclosure}
      />
      <Card className="flex flex-row">
        <div className="flex justify-center items-center pl-4">
          <Tooltip
            content={
              task.done ? 'Marcar como não concluído' : 'Marcar como concluído'
            }
          >
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              color={task.done ? 'danger' : 'success'}
              onClick={() => onChangeTaskStatus?.(task)}
            >
              {task.done ? <X /> : <Check />}
            </Button>
          </Tooltip>
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader className="flex justify-between">
            <div>{task.title}</div>

            <div className="flex gap-2">
              <Tooltip content="Editar">
                <Button size="sm" color="default" variant="flat" isIconOnly>
                  <Pencil />
                </Button>
              </Tooltip>
              <Tooltip content="Excluir">
                <Button
                  size="sm"
                  color="danger"
                  variant="flat"
                  isIconOnly
                  onClick={disclosure.onOpen}
                >
                  <Trash />
                </Button>
              </Tooltip>
            </div>
          </CardHeader>
          <CardBody>
            <span className="text-sm text-foreground-500">
              {task.description}
            </span>
          </CardBody>
        </div>
      </Card>
    </>
  );
}
