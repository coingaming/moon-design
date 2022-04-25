import React, { forwardRef, useState } from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons';
import { inlineSvg } from '@heathmont/moon-utils';
import classNames from '../private/utils/classnames';

export interface CheckboxProps {
  id: string;
  label?: JSX.Element | string;
  ariaLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { disabled, readOnly, ariaLabel, label, id, checked, ...inputProps },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    //TODO: Investigate how to pass icon color from the theme
    const markIcon = inlineSvg(
      <GenericCheckAlternative style={{ color: '#ffffff' }} />
    );

    console.log('checked', checked);
    return (
      <div className="inline-block">
        <label
          htmlFor={id}
          className={classNames(
            'flex items-center text-sm text-bulma-100 cursor-pointer ',
            disabled && 'opacity-25 cursor-not-allowed select-none',
            readOnly && 'cursor-not-allowed select-none'
          )}
        >
          <input
            id={id}
            disabled={disabled}
            readOnly={readOnly}
            aria-label={ariaLabel}
            ref={ref}
            checked={isChecked}
            className={classNames(
              'appearance-none h-4 w-4 me-2 rounded focus:outline-none transition duration-75 align-top bg-no-repeat bg-center bg-contain float-start cursor-pointer',
              isChecked
                ? 'bg-piccolo shadow-none'
                : 'shadow-[0_0_0_1px_inset] shadow-trunks',
              disabled && 'opacity-25 cursor-not-allowed select-none',
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
          />
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
