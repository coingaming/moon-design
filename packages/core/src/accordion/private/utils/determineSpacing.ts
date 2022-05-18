import { rem } from '@heathmont/moon-utils';
import Size from '../Size';

const determineSpacing = (isContentInside?: boolean, size?: Size) => {
  if (isContentInside) {
    switch (size) {
      case 'large':
        return rem(12);
      case 'medium':
        return rem(8);
      case 'small':
        return rem(4);
      default:
        return rem(16);
    }
  }
  return 0;
};

export default determineSpacing;
