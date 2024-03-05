import { Textarea as NextUITextarea } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';
import { Alert } from '../alert/alert';
import { TextareaProps } from './textarea.types';

export function Textarea({ rules, ...props }: TextareaProps) {
  const _form = useFormContext();

  if (!_form) {
    throw new Error('Textarea must be used with react-hook-form');
  }

  return (
    <Controller
      name={props.name}
      control={_form.control}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <>
            <NextUITextarea {...props} {...field} />
            {fieldState.error && <Alert>{fieldState.error.message}</Alert>}
          </>
        );
      }}
    />
  );
}
