import React, { forwardRef } from 'react';
import { useFormContext, useFormItemContext } from '../form/Form';
import mergeClassnames from '../utils/mergeClassnames';
import getSizeStyles from './private/getSizeStyles';

type InputProps = {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  inputSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
  isRtl?: boolean;
  disabled?: boolean;
  id?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      inputSize,
      error: inputError,
      disabled: inputDisabled,
      isRtl,
      id,
      ...rest
    },
    ref
  ) => {
    const { size: formSize } = useFormContext('Input');
    const {
      size: formItemSize,
      disabled: formItemDisabled,
      error: formItemError,
    } = useFormItemContext('Input');
    const size = inputSize || formItemSize || formSize;
    const disabled = inputDisabled || formItemDisabled;
    const error = inputError || formItemError;

    return (
      <input
        ref={ref}
        type={type}
        id={id}
        disabled={disabled}
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2]',
          'bg-gohan shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
          getSizeStyles(size as string),
          'before:box-border after:box-border',
          'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
          'read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input read-only:focus:shadow-input',
          type === 'number' && 'input-number-clear',
          type === 'date' && 'input-d',
          type === 'date' && isRtl && 'input-d-rtl',
          type === 'time' && 'input-t',
          type === 'time' && isRtl && 'input-t-rtl',
          type === 'datetime-local' && 'input-d',
          type === 'datetime-local' && isRtl && 'input-dt-local-rtl',
          size === 'lg' && 'input-lg-dt-shared',
          'input-dt-shared',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
          disabled && 'opacity-30 cursor-not-allowed',
          className && className
        )}
        {...rest}
      />
    );
  }
);

export default Input;
