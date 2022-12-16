import React, { forwardRef, useEffect, useState } from 'react';
import mergeClassnames from '../utils/mergeClassnames';
import type Props from './private/types/Props';

const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled,
      ariaLabel,
      id,
      label,
      readOnly,
      onChange,
      checked,
      color = 'border-piccolo',
      className,
      value = '',
      ...inputProps
    },
    ref
  ) => (
    <label
      htmlFor={id}
      className={mergeClassnames(
        'flex gap-2 items-center cursor-pointer transition-opacity',
        disabled && 'opacity-30 cursor-not-allowed select-none',
        readOnly && 'cursor-not-allowed select-none'
      )}
    >
      <span className="flex h-6 w-6 items-center justify-center relative">
        <input
          type="radio"
          ref={ref}
          id={id}
          key={id}
          checked={checked}
          aria-label={ariaLabel}
          aria-readonly={readOnly}
          aria-checked={checked}
          value={value}
          {...inputProps}
          className={mergeClassnames(
            'block appearance-none h-4 w-4 rounded-full focus:outline-4 focus:outline-piccolo/20 border border-trunks transition-colors',
            className,
            checked && color
          )}
          onClick={(e) => {
            if (disabled || readOnly) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            if (inputProps.onClick) inputProps.onClick(e);
          }}
          onChange={onChange ? onChange : () => {}}
        />
        <span
          className={mergeClassnames(
            'h-2 w-2 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border-4 scale-0 transition-transform',
            color,
            checked && 'scale-100'
          )}
        />
      </span>
      {label && <span className="text-bulma text-moon-14">{label}</span>}
    </label>
  )
);

export default RadioButton;
