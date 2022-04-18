import { rem } from '@heathmont/moon-utils';
import type { CaptionSize } from '../../caption/Caption';

const getCaptionSize = (size: CaptionSize) =>
  ({
    9: {
      fontSize: rem(9),
      lineHeight: rem(16),
      letterSpacing: rem(1),
    },
    10: {
      fontSize: rem(10),
      lineHeight: rem(16),
      letterSpacing: rem(0.5),
    },
  }[size]);

export default getCaptionSize;
