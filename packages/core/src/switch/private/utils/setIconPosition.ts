import { rem } from '@heathmont/moon-utils';
import Size from '../../../private/enums/Size';
import SwitchSize from '../types/SwitchSize';

const setIconPosition = (size?: SwitchSize) =>
  size === Size.TWOXSMALL ? rem(4) : rem(8);

export default setIconPosition;
