import { ErrorMessages } from '~/lib/error-messages';
import { SetRequired } from '~/types/util.types';
import { SwitchProps as NextUISwitchProps } from '@nextui-org/react';

export type SwitchProps = SetRequired<NextUISwitchProps, 'name'> & {
  rules?: ErrorMessages;
};
