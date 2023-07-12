import React, { forwardRef, useEffect, useState } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsMinus from '../private/icons/ControlsMinus';
import GenericCheckAlternative from '../private/icons/GenericCheckAlternative';
import type CheckboxProps from './private/types/CheckboxProps';

const CheckboxPure = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      disabled,
      readOnly,
      ariaLabel,
      ariaChecked,
      label,
      id,
      checked = false,
      onChange,
      bgColor,
      className,
      indeterminate,
      isPure = true,
      ...inputProps
    },
    ref
  ) => {
    return (
      <label
        htmlFor={id}
        className={mergeClassnames(
          'relative flex items-center gap-2 text-moon-14 text-bulma cursor-pointer',
          disabled && 'opacity-30 cursor-not-allowed select-none',
          readOnly && 'cursor-not-allowed select-none'
        )}
      >
        <input
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          aria-label={ariaLabel}
          ref={ref}
          className="peer appearance-none h-6 w-6 outline-none align-top select-none"
          {...inputProps}
          type="checkbox"
          aria-checked={ariaChecked}
        />
        <span
          className={mergeClassnames(
            'absolute top-1 ltr:left-1 rtl:right-1 flex w-4 h-4 items-center justify-center shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-s-xs shadow-trunks peer-checked:shadow-none text-goten',
            isPure &&
              'peer-checked:bg-piccolo [&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100', //New
            (checked || indeterminate) && bgColor,
            indeterminate && 'shadow-none',
            className && className
          )}
          aria-hidden="true"
        >
          {indeterminate ? (
            <ControlsMinus
              className={mergeClassnames('transition-opacity opacity-100')}
            />
          ) : (
            <GenericCheckAlternative
              className={mergeClassnames(
                'transition-opacity',
                checked ? 'opacity-100' : 'opacity-0'
              )}
            />
          )}
        </span>
        {label}
      </label>
    );
  }
);

export default CheckboxPure;
