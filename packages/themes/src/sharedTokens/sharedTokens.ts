import { Theme } from '../types/theme';
import { Omit } from '../types/utils';

/**
 * Shared Theme Base
 *
 * `shared` is not a theme itself, more a core set of values used as a
 * foundational layer for each theme.
 *
 * As colors change per brand, we're only interested in typing the shared color
 * palettes here.
 */

type OmitBrand = Omit<Theme, 'brand'>;
type OmitColorScheme = Omit<OmitBrand, 'colorScheme'>;

type Shared = Omit<OmitColorScheme, 'color'>;

const borderStyle = 'solid';
const borderWidth = 1;

const space = 16;

const sharedTokens: Shared = {
  base: {
    space,
    fontSize: 16,
    lineHeight: 20,
  },
  borderStyle,
  borderWidth,
  border: `${borderWidth}px ${borderStyle}`,
  boxShadow:
    '0px 1.2px 3.6px rgba(0, 0, 0, 0.108), 0px 6.4px 14.4px rgba(0, 0, 0, 0.132)',
  breakpoint: {
    small: 500,
    medium: 800,
    large: 1080,
    xlarge: 1200,
  },
  fontFace: undefined,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  fontSize: {
    body: 14,
  },
  fontWeight: {
    normal: 400,
    semibold: 500,
  },
  maxWidth: {
    default: 1024,
    large: 1440,
  },
  opacity: {
    disabled: 0.35,
  },
  radius: {
    small: space * 0.25,
    default: space * 0.5,
    largest: 100,
  },
  space: {
    xsmall: space * 0.25,
    small: space * 0.5,
    default: space,
    medium: space * 1.5,
    large: space * 2,
    xlarge: space * 2.5,
  },
  transitionDuration: {
    slow: 0.4,
    default: 0.2,
  },
  zIndex: {
    carouselControl: 5,
    dialog: 10000,
    toggle: 1,
  },
};

export default sharedTokens;
