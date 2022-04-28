import { rem } from '@heathmont/moon-utils';
import Size from '../../private/enums/Size';
import LabelProps from '../private/types/LabelProps';

const setLetterSpacing = ({ size, isUppercase }: LabelProps) => {
  if (isUppercase) {
    return size === Size.TWOXSMALL ? rem(0.5) : rem(1);
  }
  return;
};

export default setLetterSpacing;
