import { TextAreaProps as NextUiTextareaProps } from '@nextui-org/react';
import { ErrorMessages } from '~/lib/error-messages';
import { SetRequired } from '~/types/util.types';

export type TextareaProps = SetRequired<NextUiTextareaProps, 'name'> & {
  rules?: ErrorMessages;
};
