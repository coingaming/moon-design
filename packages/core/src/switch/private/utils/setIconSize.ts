import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import SwitchSize from '../types/SwitchSize';

const setIconSize = (size?: SwitchSize) => {
  if (size === Size.TWOXSMALL) {
    return rem(12);
  }
  if (size === Size.XSMALL) {
    return rem(16);
  }
  return rem(24);
};

export default setIconSize;
