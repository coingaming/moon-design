import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import type SizeProps from '../types/SizeProps';

const setIconSize = (size?: SizeProps) => {
  if (size === Size.XSMALL) {
    return rem(16);
  }
  if (size === Size.TWOXLARGE) {
    return rem(32);
  }
  return rem(24);
};

export default setIconSize;
