import React, { ReactNode, useState, useCallback } from 'react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getSizeStyles from './getSizeStyles';

type WithChildren<T = {}> = T & { children?: ReactNode };

type SelectProps = {
  className?: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};
const Select: React.FC<WithChildren<SelectProps>> = ({
  children,
  className,
  error,
  size,
  disabled,
}) => {
  const [open, toggle] = useState<boolean>(false);
  return (
    <div
      className={mergeClassnames(
        'relative w-full',
        disabled && 'opacity-30 cursor-not-allowed'
      )}
      onClick={useCallback(() => toggle(!open), [open])}
    >
      <select
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2] cursor-pointer',
          'bg-gohan shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
          getSizeStyles(size as string),
          'before:box-border after:box-border',
          'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
          'active:shadow-input-err',
          className && className
        )}
      >
        {children}
      </select>
      <ControlsChevronDownSmall
        className={mergeClassnames(
          'absolute top-1/2 right-3 -translate-y-1/2 z-5',
          'text-trunks flex-shrink-0 transition-transform',
          size === 'sm' ? 'text-moon-16' : 'text-moon-24',
          open && 'rotate-[-180deg]'
        )}
      />
    </div>
  );
};

export default Select;
