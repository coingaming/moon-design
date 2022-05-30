import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import SwitchSize from '../types/SwitchSize';

const setLabelWidth = (size?: SwitchSize, button?: boolean) => {
  if (button) {
    if (size === Size.MEDIUM) {
      return rem(106);
    }
    return rem(122);
  }
  if (size === Size.TWOXSMALL) {
    return rem(32);
  }
  if (size === Size.XSMALL) {
    return rem(44);
  }
  return rem(60);
};

export default setLabelWidth;
