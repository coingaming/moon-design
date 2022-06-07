import React, { forwardRef, useState } from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';
import inlineSvg from '../private/utils/inlineSvg/inlineSvg';
import type CheckboxProps from './private/types/CheckboxProps';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      disabled,
      readOnly,
      ariaLabel,
      label,
      id,
      checked,
      onChange,
      ...inputProps
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);
    const [isHover, setIsHover] = useState(false);
    //TODO: Investigate how to pass icon color from the theme
    const markIcon = inlineSvg(
      <GenericCheckAlternative style={{ color: '#ffffff' }} />
    );
    return (
      <div
        className="inline-block"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <label
          htmlFor={id}
          className={classNames(
            'flex items-center text-moon-14 text-bulma cursor-pointer ',
            disabled && 'opacity-30 cursor-not-allowed select-none',
            readOnly && 'cursor-not-allowed select-none'
          )}
        >
          <span className={classNames('flex me-3 relative')}>
            <span
              className={classNames(
                'w-6 h-6 rounded-moon-i-xs transition duration-200 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-[background-color]',
                isChecked ? 'hover:bg-piccolo/[.12]' : 'hover:bg-trunks/[.12]',
                !disabled &&
                  !readOnly &&
                  isHover &&
                  isChecked &&
                  'bg-piccolo/[.12]',
                !disabled &&
                  !readOnly &&
                  isHover &&
                  !isChecked &&
                  'bg-trunks/[.12]'
              )}
            />
            <input
              id={id}
              disabled={disabled}
              readOnly={readOnly}
              aria-label={ariaLabel}
              ref={ref}
              checked={isChecked}
              className={classNames(
                'appearance-none h-4 w-4 rounded-moon-i-xs focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-start cursor-pointer',
                isChecked
                  ? 'bg-piccolo shadow-none'
                  : 'shadow-[0_0_0_1px_inset] shadow-trunks',
                disabled && 'opacity-30 cursor-not-allowed select-none',
                readOnly && 'cursor-not-allowed select-none'
              )}
              {...inputProps}
              style={{ backgroundImage: isChecked ? markIcon : '' }}
              type="checkbox"
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
          </span>
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
