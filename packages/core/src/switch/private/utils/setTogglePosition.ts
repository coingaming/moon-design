import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import SwitchSize from '../types/SwitchSize';

const setTogglePosition = (size?: SwitchSize) =>
  size === Size.TWOXSMALL ? rem(2) : rem(4);

export default setTogglePosition;
