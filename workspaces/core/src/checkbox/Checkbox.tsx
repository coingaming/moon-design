import React, { forwardRef, useEffect, useState } from 'react';
import type CheckboxProps from './private/types/CheckboxProps';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsMinus from '../private/icons/ControlsMinus';
import GenericCheckAlternative from '../private/icons/GenericCheckAlternative';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      ariaLabel,
      label,
      bgColor = 'bg-piccolo',
      className,
      indeterminate,
      ...rest
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(rest.checked || false);
    useEffect(() => {
      if (typeof rest.checked !== undefined && rest.checked !== isChecked)
        setIsChecked(!!rest.checked);
    }, [rest.checked]);
    const ariaLabelValue = label
      ? undefined
      : ariaLabel
      ? ariaLabel
      : rest['aria-label']
      ? rest['aria-label']
      : rest.name
      ? rest.name
      : 'Checkbox';
    return (
      <label
        htmlFor={rest.id}
        className={mergeClassnames(
          'relative flex items-center gap-2 text-moon-14 text-bulma cursor-pointer',
          rest.disabled && 'opacity-60 cursor-not-allowed select-none',
          rest.readOnly && 'cursor-not-allowed select-none'
        )}
      >
        <input
          id={rest.id}
          disabled={rest.disabled}
          readOnly={rest.readOnly}
          aria-label={ariaLabelValue}
          ref={ref}
          className="peer appearance-none h-6 w-6 outline-none align-top select-none"
          type="checkbox"
          aria-checked={indeterminate ? 'mixed' : isChecked}
          checked={isChecked}
          onClick={(e) => {
            if (rest.disabled || rest.readOnly) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            if (rest.onClick) rest.onClick(e);
            setIsChecked(e?.currentTarget?.checked);
          }}
          onChange={rest.onChange ? rest.onChange : (e) => {}}
          {...rest}
        />
        <span
          className={mergeClassnames(
            'absolute top-1 start-1 flex w-4 h-4 items-center justify-center shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-s-xs shadow-trunks peer-checked:shadow-none text-goten',
            (isChecked || indeterminate) && bgColor,
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
