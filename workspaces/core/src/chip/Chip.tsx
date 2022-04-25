import React from 'react';
import classNames from '../private/utils/classnames';

type ChipProps = {
  isActive?: boolean;
  iconOnly?: JSX.Element | boolean;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  size?: string;
  iconSize?: number;
  isStroke?: boolean;
};

const determinePadding = (
  size?: string,
  iconLeft?: JSX.Element | boolean,
  iconRight?: JSX.Element | boolean,
  iconOnly?: JSX.Element | boolean
) => {
  if (size === 'small') {
    if (iconOnly) {
      return 'py-1 ps-1 pe-1';
    }
    if (iconLeft) {
      return 'py-1 ps-1 pe-2';
    }
    if (iconRight) {
      return 'py-1 ps-2 pe-1';
    }
    return 'py-1 ps-2 pe-2';
  }

  if (iconOnly) {
    return 'py-2 ps-2 pe-2';
  }
  if (iconLeft) {
    return `py-2 ps-2 pe-3`;
  }
  if (iconRight) {
    return `py-2 ps-3 pe-2`;
  }
  return `py-2 ps-3 pe-3`;
};

const Chip: React.FC<ChipProps> = ({
  children,
  isActive,
  size = 'medium',
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
          'z-0 overflow-hidden flex flex-row items-center text-sm relative rounded-interactive cursor-pointer ease-in-out duration-75',
          iconOnly ? 'center' : 'space-between',
          size == 'small' ? 'h-8 gap-1' : 'h-10 gap-2',
          determinePadding(size, iconLeft, iconRight, iconOnly),
          isActive ? 'bg-piccolo/[.12] text-piccolo' : 'bg-gohan text-popo',
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
