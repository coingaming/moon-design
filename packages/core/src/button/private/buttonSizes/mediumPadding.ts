import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const mediumPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return {
      padding: `${rem(8)} ${rem(16)} ${rem(8)} ${rem(8)}`,
    };
  }
  if (icon === 'right' || iconRight) {
    return {
      padding: `${rem(8)} ${rem(8)} ${rem(8)} ${rem(16)}`,
    };
  }
  if (icon === 'only' || iconOnly) {
    return {
      padding: rem(8),
    };
  }
  return {
    padding: `${rem(8)} ${rem(16)}`,
  };
};

export default mediumPadding;
