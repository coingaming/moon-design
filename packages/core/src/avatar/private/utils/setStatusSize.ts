import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import type SizeProps from '../types/SizeProps';

const setStatusSize = (size?: SizeProps) => {
  if (size === Size.XSMALL) {
    return {
      width: rem(8),
      height: rem(8),
      borderWidth: rem(1),
    };
  }
  if (size === Size.SMALL || size === Size.MEDIUM) {
    return {
      width: rem(12),
      height: rem(12),
      borderWidth: rem(2),
    };
  }
  return {
    width: rem(16),
    height: rem(16),
    borderWidth: rem(2),
  };
};

export default setStatusSize;
