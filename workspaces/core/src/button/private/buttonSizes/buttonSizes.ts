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
  if (size === Size.XSMALL) {
    return classNames(
      xSmallPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-1 text-xs rounded-moon-xs'
    );
  }
  if (size === Size.SMALL) {
    return classNames(
      smallPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-1 text-sm rounded-moon-sm'
    );
  }
  if (size === Size.MEDIUM) {
    return classNames(
      mediumPadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-sm rounded-moon-sm'
    );
  }
  if (size === Size.LARGE) {
    return classNames(
      largePadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-base rounded-moon-sm'
    );
  }
  if (size === Size.XLARGE) {
    return classNames(
      xLargePadding({ icon, iconLeft, iconRight, iconOnly }),
      'gap-2 text-base rounded-moon-md'
    );
  }
  return '';
};

export default buttonSizes;
