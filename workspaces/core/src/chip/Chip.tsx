import React from 'react';
import classNames from '../private/utils/classnames';
import setPadding from './private/utils/setPadding';
import type ChipProps from './private/types/ChipProps';

const Chip: React.FC<ChipProps> = ({
  children,
  isActive,
  size = 'md',
  iconLeft,
  iconRight,
  iconOnly,
  isStroke,
  ...rest
}) => {
  return (
    <>
      <button
        className={classNames(
          'z-0 overflow-hidden flex flex-row items-center text-moon-14 relative rounded-moon-i-sm cursor-pointer transition duration-200',
          iconOnly ? 'center' : 'space-between',
          size == 'sm' ? 'h-8 gap-1' : 'h-10 gap-2',
          setPadding(size, iconLeft, iconRight, iconOnly),
          isActive ? 'bg-piccolo/[.12] text-piccolo' : 'bg-gohan text-bulma',
          isStroke && 'hover:shadow-interactive',
          isActive && isStroke && 'shadow-interactive',
          'hover:bg-piccolo/[.12] hover:text-piccolo'
        )}
        {...rest}
      >
        {iconLeft}
        {children}
        {iconOnly}
        {iconRight}
      </button>
    </>
  );
};

export default Chip;
