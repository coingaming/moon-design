import { rem } from '@heathmont/moon-utils';
import type ButtonProps from '../../private/types/ButtonProps';

const xLargePadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return {
      padding: `${rem(16)} ${rem(24)} ${rem(16)} ${rem(16)}`,
    };
  }
  if (icon === 'right' || iconRight) {
    return {
      padding: `${rem(16)} ${rem(16)} ${rem(16)} ${rem(24)}`,
    };
  }
  if (icon === 'only' || iconOnly) {
    return {
      padding: rem(16),
    };
  }
  return {
    padding: `${rem(16)} ${rem(24)}`,
  };
};

export default xLargePadding;
