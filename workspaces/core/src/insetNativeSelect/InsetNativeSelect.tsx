import React, { ReactNode, forwardRef } from 'react';
import { useFormContext, useFormItemContext } from '../form/Form';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';

type WithChildren<T = {}> = T & { children?: ReactNode };

export interface InsetNativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  label: React.ReactNode | string;
  readOnly?: boolean;
}

const InsetNativeSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<InsetNativeSelectProps>
>(
  (
    {
      children,
      className,
      label,
      size: selectSize,
      error: selectError,
      disabled: selectDisabled,
      readOnly,
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
          'block relative w-full max-w-full rounded-moon-i-sm bg-gohan',
          disabled && 'opacity-30 cursor-not-allowed',
          readOnly && 'cursor-not-allowed',
          className && className
        )}
      >
        <select
          ref={ref}
          disabled={disabled || readOnly}
          className={mergeClassnames(
            'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2]',
            'bg-transparent shadow-input hover:shadow-input-hov',
            'focus:shadow-input-focus focus:outline-none',
            error &&
              'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
            'h-14 rounded-moon-i-sm',
            'rtl:[&:not([disabled])]:hover:rounded-moon-i-sm rtl:[&:not([disabled])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm',
            'ltr:[&:not([disabled])]:hover:rounded-moon-i-sm ltr:[&:not([disabled])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm',
            'before:box-border after:box-border',
            'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
            'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
            'pt-[1.125rem]',
            (disabled || readOnly) && 'cursor-not-allowed hover:shadow-input'
          )}
          {...rest}
        >
          {children}
        </select>
        <label
          className={mergeClassnames(
            'absolute text-trunks z-[1] transition-all ease-in-out duration-200 rtl:right-4 ltr:left-4',
            'text-[0.75rem] leading-3 top-3'
          )}
        >
          {label}
        </label>
        <ControlsChevronDownSmall
          className={mergeClassnames(
            'absolute top-1/2 ltr:right-3 rtl:left-3 -translate-y-1/2 z-5 pointer-events-none',
            'text-trunks flex-shrink-0 transition-transform',
            size === 'sm' ? 'text-moon-16' : 'text-moon-24'
          )}
        />
      </span>
    );
  }
);

export default InsetNativeSelect;
