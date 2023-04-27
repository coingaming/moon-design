import React, { forwardRef, useEffect, useState } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsMinus from '../private/icons/ControlsMinus';
import GenericCheckAlternative from '../private/icons/GenericCheckAlternative';
import type CheckboxProps from './private/types/CheckboxProps';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      disabled,
      readOnly,
      ariaLabel,
      label,
      id,
      checked = false,
      onChange,
      bgColor = 'bg-piccolo',
      className,
      indeterminate,
      ...inputProps
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);
    useEffect(() => {
      if (typeof checked !== undefined && checked !== isChecked)
        setIsChecked(!!checked);
    }, [checked]);
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
          aria-checked={indeterminate ? 'mixed' : isChecked}
          checked={isChecked}
          onClick={(e) => {
            if (disabled || readOnly) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            if (inputProps.onClick) inputProps.onClick(e);
            setIsChecked(e?.currentTarget?.checked);
          }}
          onChange={onChange ? onChange : (e) => {}}
        />
        <span
          className={mergeClassnames(
            'absolute top-1 ltr:left-1 rtl:right-1 flex w-4 h-4 items-center justify-center shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-s-xs shadow-trunks peer-checked:shadow-none text-goten',
            (isChecked || indeterminate) && bgColor,
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
                isChecked ? 'opacity-100' : 'opacity-0'
              )}
            />
          )}
        </span>
        {label}
      </label>
    );
  }
);

export default Checkbox;
