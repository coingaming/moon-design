import React, { forwardRef } from 'react';
import type InputProps from './private/types/InputProps';
import getMaxDate from './private/utils/getMaxDate';
import getSizeStyles from './private/utils/getSizeStyles';
import useFormContext from '../form/private/utils/useFormContext';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size: inputSize,
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
        max={getMaxDate(type)}
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-4 m-0 appearance-none text-moon-16 text-bulma transition-shadow box-border relative z-[2]',
          'bg-goku shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          'focus-visible::shadow-input-focus focus-visible::outline-none',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
          getSizeStyles(size),
          'before:box-border after:box-border',
          'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
          'read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input read-only:focus:shadow-input read-only:focus-visible:shadow-input',
          type === 'number' && 'input-number-clear',
          type === 'date' && 'input-d',
          type === 'date' && isRtl && 'input-d-rtl',
          type === 'time' && 'input-t',
          type === 'time' && isRtl && 'input-t-rtl',
          type === 'datetime-local' && 'input-d',
          type === 'datetime-local' && isRtl && 'input-dt-local-rtl',
          size === 'lg' && 'input-lg-dt-shared',
          'input-dt-shared',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err invalid:focus-visible:shadow-input-err',
          disabled && 'opacity-60 cursor-not-allowed',
          className && className
        )}
        {...rest}
      />
    );
  }
);

export default Input;
