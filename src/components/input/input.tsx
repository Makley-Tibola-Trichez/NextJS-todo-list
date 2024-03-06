import {
  InputProps as NextUIInputProps,
  Input as NextUIInput,
} from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';
import { Alert } from '../alert/alert';
import { SetRequired } from '~/types/util.types';
import { ErrorMessages } from '~/lib/error-messages';

type InputProps = SetRequired<NextUIInputProps, 'name'> & {
  rules?: ErrorMessages;
};

export function Input({ rules, ...props }: InputProps) {
  const _form = useFormContext();

  if (!_form) {
    throw new Error('Input must be used with react-hook-form');
  }

  return (
    <Controller
      name={props.name}
      rules={rules}
      control={_form.control}
      render={({ field, fieldState }) => {
        return (
          <>
            <NextUIInput {...props} {...field} />
            {fieldState.error && <Alert>{fieldState.error.message}</Alert>}
          </>
        );
      }}
    />
  );
}
