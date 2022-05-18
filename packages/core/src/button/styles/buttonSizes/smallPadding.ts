import { rem } from '@heathmont/moon-utils';
import type ButtonProps from '../../private/types/ButtonProps';

const smallPadding = ({ icon, iconLeft, iconRight, iconOnly }: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return {
      padding: `${rem(4)} ${rem(12)} ${rem(4)} ${rem(4)}`,
    };
  }
  if (icon === 'right' || iconRight) {
    return {
      padding: `${rem(4)} ${rem(4)} ${rem(4)} ${rem(12)}`,
    };
  }
  if (icon === 'only' || iconOnly) {
    return {
      padding: rem(4),
    };
  }
  return {
    padding: `${rem(4)} ${rem(12)}`,
  };
};

export default smallPadding;
