import React, { forwardRef, useEffect, useState } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsMinus from '../private/icons/ControlsMinus';
import GenericCheckAlternative from '../private/icons/GenericCheckAlternative';
import type CheckboxProps from './private/types/CheckboxProps';

// function isIndeterminate(
//   checked?: boolean | 'indeterminate'
// ): checked is 'indeterminate' {
//   return checked === 'indeterminate';
// }

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
      isIndeterminate,
      ...inputProps
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);
    useEffect(() => {
      if (typeof checked !== undefined && checked !== isChecked) {
        console.log('before isChecked', isChecked);
        setIsChecked(!checked);
      }
    }, [checked, isIndeterminate]);

    console.log('isIndeterminate', isIndeterminate);
    console.log('checked', checked);
    console.log('past isChecked', isChecked);
    // useEffect(() => {
    //   const input = ref?.current!;
    //   input.indeterminate = isIndeterminate(isChecked);
    // }, [ref]);
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
          aria-checked={isIndeterminate ? 'mixed' : isChecked}
          checked={isIndeterminate && isIndeterminate ? false : isChecked}
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
            (isChecked || isIndeterminate) && bgColor,
            className && className
          )}
          aria-hidden="true"
        >
          {isIndeterminate ? (
            <ControlsMinus
              className={mergeClassnames(
                'transition-opacity opacity-100'
                // isChecked ? 'opacity-100' : 'opacity-0'
              )}
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
