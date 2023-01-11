import React, { forwardRef } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import type Props from './private/types/Props';

const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled,
      ariaLabel,
      id,
      label,
      checked,
      readOnly,
      onChange,
      ...inputProps
    },
    ref
  ) => (
    <span className="flex">
      <label
        htmlFor={id}
        className={mergeClassnames(
          'flex flex-row flex-start items-center cursor-pointer group',
          disabled && 'opacity-30 cursor-not-allowed select-none',
          readOnly && 'cursor-not-allowed select-none'
        )}
      >
        <span className="block h-4 w-4 relative me-3">
          <input
            type="radio"
            ref={ref}
            id={id}
            key={id}
            disabled={disabled}
            checked={checked}
            aria-label={ariaLabel}
            {...inputProps}
            className="block appearance-none h-4 w-4  rounded-full cursor-pointer focus:outline-none shadow-[0_0_0_1px_inset] peer shadow-trunks checked:shadow-piccolo"
            onClick={(e) => {
              if (disabled || readOnly) {
                e.preventDefault();
                e.stopPropagation();
                return;
              }
              if (inputProps.onClick) inputProps.onClick(e);
            }}
            onChange={onChange ? onChange : (e) => {}}
          />
          <span className="h-2 w-2 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-piccolo scale-0 transition-transform peer-checked:scale-100" />
          <span
            className={mergeClassnames(
              'w-6 h-6 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-colors',
              !disabled &&
                !readOnly &&
                'group-hover:bg-trunks/[.12] group-hover:peer-checked:bg-piccolo/[.12]'
            )}
          />
        </span>
        {label && <span className="text-bulma text-moon-14">{label}</span>}
      </label>
    </span>
  )
);

export default RadioButton;
