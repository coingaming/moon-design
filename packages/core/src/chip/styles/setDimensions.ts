import { rem } from '@heathmont/moon-utils';
import Size from '../../private/enums/Size';
import type SizeProps from '../private/types/SizeProps';

const setDimensions = (size?: SizeProps) => {
  if (size === Size.SMALL) {
    return {
      height: rem(32),
    };
  }
  return {
    height: rem(40),
  };
};

export default setDimensions;
