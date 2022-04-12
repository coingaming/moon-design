import { rem } from '@heathmont/moon-utils';
import type { TextSize } from '../../text/Text';

const getTextSize = (size: TextSize) =>
  ({
    9: {
      fontSize: rem(9),
      lineHeight: rem(16),
    },
    10: {
      fontSize: rem(10),
      lineHeight: rem(16),
    },
    12: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
    14: {
      fontSize: rem(14),
      lineHeight: rem(24),
    },
    16: {
      fontSize: rem(16),
      lineHeight: rem(24),
    },
    18: {
      fontSize: rem(18),
      lineHeight: rem(24),
    },
    20: {
      fontSize: rem(20),
      lineHeight: rem(32),
    },
    24: {
      fontSize: rem(24),
      lineHeight: rem(32),
    },
    32: {
      fontSize: rem(32),
      lineHeight: rem(40),
      letterSpacing: rem(-0.5),
    },
    48: {
      fontSize: rem(48),
      lineHeight: rem(56),
      letterSpacing: rem(-1),
    },
    56: {
      fontSize: rem(56),
      lineHeight: rem(64),
      letterSpacing: rem(-1.5),
    },
    64: {
      fontSize: rem(64),
      lineHeight: rem(72),
      letterSpacing: rem(-2),
    },
    72: {
      fontSize: rem(72),
      lineHeight: rem(76),
      letterSpacing: rem(-2.5),
    },
  }[size]);

export default getTextSize;
