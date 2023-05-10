import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';

const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'xl':
      return 'rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
    case 'lg':
      return 'rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm';
    case 'sm':
      return 'rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs rtl:invalid:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs ltr:invalid:rounded-moon-i-xs';
    default:
      return 'rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:[&:not([readonly])]:hover:rounded-moon-i-xs rtl:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs rtl:invalid:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:hover:rounded-moon-i-xs ltr:[&:not([disabled])]:[&:not([readonly])]:focus:rounded-moon-i-xs ltr:invalid:rounded-moon-i-xs';
  }
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  isRtl?: boolean;
  disabled?: boolean;
  id?: string;
}

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
    const size = inputSize;
    const disabled = inputDisabled;
    const error = inputError;

    return (
      <input
        ref={ref}
        type={type}
        id={id}
        disabled={disabled}
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-1 m-0 appearance-none text-bulma transition-shadow box-border relative z-[2]',
          'bg-transparent hover:bg-heles',
          'focus:shadow-input-cell-focus focus:outline-none focus:bg-heles',
          'focus-visible::shadow-input-cell-focus focus-visible::outline-none focus-visible::bg-heles',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
          getSizeStyles(size as string),
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
          disabled && 'opacity-30 cursor-not-allowed',
          className && className
        )}
        {...rest}
      />
    );
  }
);

export default Input;
