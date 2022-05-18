import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import SwitchSize from '../types/SwitchSize';

const setLabelHeight = (size?: SwitchSize, button?: boolean) => {
  if (button) {
    if (size === Size.MEDIUM) {
      return rem(40);
    }
    return rem(48);
  }
  if (size === Size.TWOXSMALL) {
    return rem(16);
  }
  if (size === Size.XSMALL) {
    return rem(24);
  }
  return rem(32);
};

export default setLabelHeight;
