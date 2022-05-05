import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import type SizeProps from '../types/SizeProps';

const setWrapperSize = (size?: SizeProps) => {
  if (size === Size.XSMALL) {
    return {
      height: rem(24),
      width: rem(24),
      fontSize: rem(10),
      lineHeight: rem(16),
      letterSpacing: rem(0.5),
    };
  }
  if (size === Size.SMALL) {
    return {
      height: rem(32),
      width: rem(32),
      fontSize: rem(12),
      lineHeight: rem(16),
    };
  }
  if (size === Size.MEDIUM) {
    return {
      height: rem(40),
      width: rem(40),
      fontSize: rem(14),
      lineHeight: rem(24),
    };
  }
  if (size === Size.LARGE) {
    return {
      height: rem(48),
      width: rem(48),
      fontSize: rem(16),
      lineHeight: rem(24),
    };
  }
  if (size === Size.XLARGE) {
    return {
      height: rem(56),
      width: rem(56),
      fontSize: rem(16),
      lineHeight: rem(24),
    };
  }
  return {
    height: rem(64),
    width: rem(64),
    fontSize: rem(20),
    lineHeight: rem(32),
  };
};

export default setWrapperSize;
