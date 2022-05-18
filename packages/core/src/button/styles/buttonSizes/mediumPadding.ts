import { rem } from '@heathmont/moon-utils';
import type ButtonProps from '../../private/types/ButtonProps';

const mediumPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return {
      paddingTop: `${rem(8)}`,
      paddingInlineEnd: `${rem(16)}`,
      paddingBottom: `${rem(8)}`,
      paddingInlineStart: `${rem(8)}`,
    };
  }
  if (icon === 'right' || iconRight) {
    return {
      paddingTop: `${rem(8)}`,
      paddingInlineEnd: `${rem(8)}`,
      paddingBottom: `${rem(8)}`,
      paddingInlineStart: `${rem(16)}`,
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
