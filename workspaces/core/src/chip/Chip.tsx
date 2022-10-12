import React from 'react';
import classNames from '../private/utils/classnames';
import setPadding from './private/utils/setPadding';
import type ChipProps from './private/types/ChipProps';

type Props<C extends React.ElementType> = React.PropsWithChildren<
  ChipProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ChipProps<C>>;

const Chip = <C extends React.ElementType = 'button'>({
  children,
  isActive,
  size = 'md',
  iconLeft,
  iconRight,
  iconOnly,
  isStroke,
  variant = 'default',
  as,
  ...rest
}: Props<C>) => {
  const Component = as || 'button';
  return (
    <Component
      className={classNames(
        'z-0 overflow-hidden flex flex-row items-center text-moon-14 relative rounded-moon-i-sm cursor-pointer transition duration-200',
        iconOnly ? 'center' : 'space-between',
        size === 'sm' ? 'h-8 gap-1' : 'h-10 gap-2',
        setPadding(size, iconLeft, iconRight, iconOnly),
        variant === 'ghost' ? '' : 'bg-gohan',
        isActive ? 'bg-piccolo/[.12] text-piccolo' : 'text-bulma',
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
    </Component>
  );
};

export default Chip;
