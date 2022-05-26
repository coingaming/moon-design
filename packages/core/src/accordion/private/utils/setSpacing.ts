import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import type SizeProps from '../SizeProps';

const setSpacing = (isContentInside?: boolean, size?: SizeProps) => {
  if (isContentInside) {
    switch (size) {
      case Size.LARGE:
        return rem(12);
      case Size.MEDIUM:
        return rem(8);
      case Size.SMALL:
        return rem(4);
      default:
        return rem(16);
    }
  }
  return 0;
};

export default setSpacing;
