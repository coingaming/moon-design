import { rem } from '@heathmont/moon-utils';
import Size from '../../private/enums/Size';
import LabelProps from '../private/types/LabelProps';

const setFontSize = ({ size, isUppercase }: LabelProps) => {
  if (isUppercase) {
    return size === Size.TWOXSMALL ? rem(9) : rem(10);
  }
  return size === Size.TWOXSMALL ? rem(10) : rem(12);
};

export default setFontSize;
