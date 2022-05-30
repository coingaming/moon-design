import classNames from '../../../private/utils/classnames';
import lgPadding from './lgPadding';
import mdPadding from './mdPadding';
import smPadding from './smPadding';
import xlPadding from './xlPadding';
import xsPadding from './xsPadding';
import type ButtonProps from '../types/ButtonProps';

const buttonSizes = ({
  size,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps): string => {
  if (size === 'xs') {
    return classNames(
      xsPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-1 text-moon-12 rounded-moon-i-xs'
    );
  }
  if (size === 'sm') {
    return classNames(
      smPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-1 text-moon-14 rounded-moon-i-sm'
    );
  }
  if (size === 'lg') {
    return classNames(
      lgPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-moon-16 rounded-moon-i-sm'
    );
  }
  if (size === 'xl') {
    return classNames(
      xlPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-moon-16 rounded-moon-i-md'
    );
  }
  return classNames(
    mdPadding({ icon, iconLeft, iconRight, iconOnly }),
    'gap-2 text-moon-14 rounded-moon-i-sm'
  );
};

export default buttonSizes;
