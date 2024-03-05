import { Switch as NextUISwitch } from '@nextui-org/react';
import { Controller, useFormContext } from 'react-hook-form';
import { Alert } from '../alert/alert';
import { SwitchProps } from './switch.types';

export function Switch({ rules, children, name, ...props }: SwitchProps) {
  const _form = useFormContext();

  if (!_form) {
    throw new Error('Switch must be used with react-hook-form');
  }

  return (
    <Controller
      rules={rules}
      name={name}
      render={({ field, fieldState }) => (
        <>
          <NextUISwitch {...field} {...props}>
            {children}
          </NextUISwitch>
          {fieldState.error && <Alert>{fieldState.error.message}</Alert>}
        </>
      )}
    />
  );
}
