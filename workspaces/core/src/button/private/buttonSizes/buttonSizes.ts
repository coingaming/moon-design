import Size from '../../../private/enums/Size';
import classNames from '../../../private/utils/classnames';
import largePadding from './largePadding';
import mediumPadding from './mediumPadding';
import smallPadding from './smallPadding';
import xLargePadding from './xLargePadding';
import xSmallPadding from './xSmallPadding';
import type { ButtonProps } from '../../Button';

const buttonSizes = ({
  size,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps): string => {
  if (size === Size.XS) {
    return classNames(
      xSmallPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-1 text-xs rounded-moon-i-xs'
    );
  }
  if (size === Size.SM) {
    return classNames(
      smallPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-1 text-sm rounded-moon-i-sm'
    );
  }
  if (size === Size.MD) {
    return classNames(
      mediumPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-sm rounded-moon-i-sm'
    );
  }
  if (size === Size.LG) {
    return classNames(
      largePadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-base rounded-moon-i-sm'
    );
  }
  if (size === Size.XL) {
    return classNames(
      xLargePadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-base rounded-moon-i-md'
    );
  }
  return '';
};

export default buttonSizes;
