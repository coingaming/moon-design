import React, { ReactNode, forwardRef } from 'react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import { useFormContext, useFormItemContext } from '../../form/Form';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getSizeStyles from './getSizeStyles';

type WithChildren<T = {}> = T & { children?: ReactNode };

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
}
const Select = forwardRef<HTMLSelectElement, WithChildren<SelectProps>>(
  (
    {
      children,
      className,
      size: selectSize,
      error: selectError,
      disabled: selectDisabled,
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
    const size = selectSize || formItemSize || formSize;
    const disabled = selectDisabled || formItemDisabled;
    const error = selectError || formItemError;

    return (
      <span
        className={mergeClassnames(
          'block relative w-full',
          disabled && 'opacity-30 cursor-not-allowed',
          className && className
        )}
      >
        <select
          ref={ref}
          disabled={disabled}
          className={mergeClassnames(
            'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2] cursor-pointer',
            'bg-gohan shadow-input hover:shadow-input-hov',
            'focus:shadow-input-focus focus:outline-none',
            error &&
              'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
            'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
            getSizeStyles(size as string),
            'before:box-border after:box-border',
            'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75'
          )}
          {...rest}
        >
          {children}
        </select>
        <ControlsChevronDownSmall
          className={mergeClassnames(
            'absolute top-1/2 ltr:right-3 rtl:left-3 -translate-y-1/2 z-5',
            'text-trunks flex-shrink-0 transition-transform',
            size === 'sm' ? 'text-moon-16' : 'text-moon-24'
          )}
        />
      </span>
    );
  }
);

export default Select;
