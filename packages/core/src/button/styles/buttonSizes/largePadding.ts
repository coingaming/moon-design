import { rem } from '@heathmont/moon-utils';
import type ButtonProps from '../../private/types/ButtonProps';

const largePadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return {
      padding: `${rem(12)} ${rem(16)} ${rem(12)} ${rem(12)}`,
    };
  }
  if (icon === 'right' || iconRight) {
    return {
      padding: `${rem(12)} ${rem(12)} ${rem(12)} ${rem(16)}`,
    };
  }
  if (icon === 'only' || iconOnly) {
    return {
      padding: rem(12),
    };
  }
  return {
    padding: `${rem(12)} ${rem(16)}`,
  };
};

export default largePadding;
