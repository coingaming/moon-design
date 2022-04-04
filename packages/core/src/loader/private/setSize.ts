import { rem } from '@heathmont/moon-utils';
import { Size } from './Size';

const setSize = (size?: Size) => {
  switch (size) {
    case 'twoxsmall':
      return {
        size: rem(16),
        border: rem(2),
      };
    case 'xsmall':
      return {
        size: rem(24),
        border: rem(2),
      };
    case 'small':
      return {
        size: rem(32),
        border: rem(2),
      };
    case 'medium':
      return {
        size: rem(40),
        border: rem(4),
      };
    case 'large':
      return {
        size: rem(48),
        border: rem(4),
      };
    default:
      return;
  }
};

export default setSize;
