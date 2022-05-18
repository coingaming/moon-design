import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import SizeProps from '../SizeProps';

const setHeight = (isContentInside?: boolean, size?: SizeProps) => {
  if (isContentInside) {
    return rem(24);
  } else {
    switch (size) {
      case Size.LARGE:
        return rem(48);
      case Size.MEDIUM:
        return rem(40);
      case Size.SMALL:
        return rem(32);
      default:
        return rem(56);
    }
  }
};

export default setHeight;
