import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import type SizeProps from '../types/SizeProps';

const setSize = (size?: SizeProps) => {
  switch (size) {
    case Size.TWOXSMALL:
      return {
        size: rem(16),
        border: rem(2),
      };
    case Size.XSMALL:
      return {
        size: rem(24),
        border: rem(2),
      };
    case Size.SMALL:
      return {
        size: rem(32),
        border: rem(2),
      };
    case Size.MEDIUM:
      return {
        size: rem(40),
        border: rem(4),
      };
    case Size.LARGE:
      return {
        size: rem(48),
        border: rem(4),
      };
    default:
      return;
  }
};

export default setSize;
