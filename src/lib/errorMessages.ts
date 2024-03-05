import { FieldValue, Validate } from 'react-hook-form';

type _FormError = [string, Validate<any, FieldValue<any>>];

export class ErrorMessages {
  constructor(...args: [string, Validate<any, FieldValue<any>>][]) {
    const _validators: Record<string, Validate<any, FieldValue<any>>> = {};
    args.forEach((arg) => {
      const [funcName, func] = arg;
      _validators[funcName] = func;
    });

    return { validate: _validators };
  }

  static required(): _FormError {
    return [
      'required',
      (value) => {
        if (!value) return 'Obrigatório';
      },
    ];
  }

  static minLength(value: number): _FormError {
    return [
      'minLength',
      (v: string) => {
        if (v.length < value) {
          return `Mínimo de ${value} caracteres`;
        }
      },
    ];
  }

  static maxLength(value: number): _FormError {
    return [
      'maxLength',
      (v: string) => {
        if (v.length > value) {
          return `Máximo de ${value} caracteres`;
        }
      },
    ];
  }
}
