import React, { forwardRef } from 'react';
import type ChipProps from './private/types/ChipProps';
import getPadding from './private/utils/getPadding';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      children,
      isActive,
      size = 'md',
      iconLeft,
      iconRight,
      iconOnly,
      isStroke,
      variant = 'default',
      className,
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      {...rest}
      className={mergeClassnames(
        'z-0 overflow-hidden flex flex-row items-center justify-center text-moon-14 relative',
        'rounded-moon-i-sm cursor-pointer transition duration-200 hover:bg-jiren',
        'hover:text-piccolo user-select-none',
        iconOnly ? 'center' : 'space-between',
        size === 'sm' ? 'h-8 gap-1' : 'h-10 gap-2',
        getPadding({ size, iconLeft, iconRight, iconOnly }),
        variant === 'ghost' ? '' : 'bg-goku',
        isActive ? 'bg-jiren text-piccolo' : 'text-bulma',
        isStroke && 'hover:shadow-interactive',
        isActive && isStroke && 'shadow-interactive',
        className
      )}
      type="button"
    >
      {iconLeft}
      {children}
      {iconOnly}
      {iconRight}
    </button>
  )
);

export default Chip;
