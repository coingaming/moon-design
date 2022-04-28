import React, { forwardRef, useState, useEffect } from 'react';
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

interface AnimationProps {
  checked?: boolean;
}

const Animation: React.FC<AnimationProps> = ({ checked }) => {
  const [prevChecked, setPrevChecked] = useState(checked);
  console.log('checked', checked);
  console.log('prevChecked', prevChecked);
  useEffect(() => {
    if (checked !== prevChecked) {
      setTimeout(() => {
        setPrevChecked(checked);
      }, 500);
    }
  }, [checked]);

  return (
    <span
      className={classNames(
        'w-8 h-8 rounded-full transition duration-200 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-0 opacity-30',
        prevChecked !== checked
          ? 'animate-[explode_0.7s_cubic-bezier(0.7,0.7,0.7,1)_1]'
          : '',
        checked ? 'bg-piccolo/[.12]' : 'bg-bulma/[.12]'
      )}
    />
  );
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { disabled, readOnly, ariaLabel, label, id, checked, ...inputProps },
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
            'flex items-center text-sm text-bulma-100 cursor-pointer ',
            disabled && 'opacity-25 cursor-not-allowed select-none',
            readOnly && 'cursor-not-allowed select-none'
          )}
        >
          <span className={classNames('me-2 relative block')}>
            <span
              className={classNames(
                'w-6 h-6 rounded-interactive transition duration-200 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-[background-color]',
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
                'appearance-none h-4 w-4 rounded-interactive focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-start cursor-pointer',
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
          </span>
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
