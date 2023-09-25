import React, { forwardRef } from 'react';
import type InsetNativeSelectProps from './private/types/InsetNativeSelectProps';
import type WithChildren from './private/types/WithChildren';
import useFormContext from '../form/private/utils/useFormContext';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';

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
          'block relative w-full max-w-full rounded-moon-i-sm',
          disabled && 'opacity-60 cursor-not-allowed',
          readOnly && 'cursor-not-allowed',
          className && className
        )}
      >
        <select
          ref={ref}
          disabled={disabled || readOnly}
          className={mergeClassnames(
            'block w-full max-w-full py-0 px-4 m-0 appearance-none text-moon-16 text-bulma',
            'transition-shadow box-border relative bg-gohan shadow-input',
            'hover:shadow-input-hov focus:shadow-input-focus focus:outline-none',
            error &&
              'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
            'h-14 rounded-moon-i-sm rtl:[&:not([disabled])]:hover:rounded-moon-i-sm',
            'rtl:[&:not([disabled])]:focus:rounded-moon-i-sm rtl:invalid:rounded-moon-i-sm',
            'ltr:[&:not([disabled])]:hover:rounded-moon-i-sm',
            'ltr:[&:not([disabled])]:focus:rounded-moon-i-sm ltr:invalid:rounded-moon-i-sm',
            'before:box-border after:box-border placeholder:text-trunks placeholder:opacity-100',
            'placeholder:transition-opacity placeholder:delay-75 invalid:shadow-input-err',
            'invalid:hover:shadow-input-err invalid:focus:shadow-input-err pt-[1.125rem]',
            (disabled || readOnly) && 'cursor-not-allowed hover:shadow-input'
          )}
          {...rest}
        >
          {children}
        </select>
        <label
          className={mergeClassnames(
            'absolute text-trunks transition-all ease-in-out duration-200 start-4',
            'text-moon-12 top-3 pointer-events-none'
          )}
        >
          {label}
        </label>
        <ControlsChevronDownSmall
          className={mergeClassnames(
            'absolute top-1/2 end-3 -translate-y-1/2 z-5 pointer-events-none',
            'text-trunks flex-shrink-0 transition-transform',
            size === 'sm' ? 'text-moon-16' : 'text-moon-24'
          )}
        />
      </span>
    );
  }
);

export default InsetNativeSelect;
