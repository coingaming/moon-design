import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
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
}: ButtonProps) => {
  if (size === Size.XSMALL) {
    return [
      xSmallPadding({ icon, iconLeft, iconRight, iconOnly }),
      {
        gap: rem(4),
        fontSize: rem(12),
        lineHeight: rem(16),
      },
    ];
  }
  if (size === Size.SMALL) {
    return [
      smallPadding({ icon, iconLeft, iconRight, iconOnly }),
      {
        gap: rem(4),
        fontSize: rem(14),
        lineHeight: rem(24),
      },
    ];
  }
  if (size === Size.MEDIUM) {
    return [
      mediumPadding({ icon, iconLeft, iconRight, iconOnly }),
      {
        gap: rem(8),
        fontSize: rem(14),
        lineHeight: rem(24),
      },
    ];
  }
  if (size === Size.LARGE) {
    return [
      largePadding({ icon, iconLeft, iconRight, iconOnly }),
      {
        gap: rem(12),
        fontSize: rem(16),
        lineHeight: rem(24),
      },
    ];
  }
  if (size === Size.XLARGE) {
    return [
      xLargePadding({ icon, iconLeft, iconRight, iconOnly }),
      {
        gap: rem(16),
        fontSize: rem(16),
        lineHeight: rem(24),
      },
    ];
  }
  return null;
};

export default buttonSizes;
