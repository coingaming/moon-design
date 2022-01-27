import mainColors from '../v2/colors/mainColors';
import buttonVariantTokens from './buttonVariantTokens';
import type { ColorShared, ColorValue } from '../supportColors/supportColors';
import type { MainColors } from '../v2/colors/mainColors';
import type { SupportiveColors } from '../v2/colors/supportiveColors';

/**
 * Shared Theme Base
 *
 * `shared` is not a theme itself, more a core set of values used as a
 * foundational layer for each theme.
 *
 * As colors change per brand, we're only interested in typing the shared color
 * palettes here.
 */

// type OmitBrand = Omit<Theme, 'brand'>;
// type OmitColorScheme = Omit<OmitBrand, 'colorScheme'>;

// type Shared = Omit<OmitColorScheme, 'color'>;

const borderStyle = 'solid';
const borderWidth = 1;
const borderWidthDefault = 1;
const borderWidthInteractive = 2;
const space = 16;
const transitionDuration = 0.2;
const transitionTimingFunction = 'ease-in-out';
const baseFontSize = 16;
const baseLineHeight = 24;
const fontWeightNormal = 400;
const fontWeightSemibold = 500;

const rem = (value: number) => `${value / baseFontSize}rem`;

export type ZIndex = {
  carouselControl: number;
  selectOptions: number;
  dialog: number;
  toggle: number;
};

export type TransitionDuration = {
  slow: number;
  default: number;
};

export type Transition = {
  slow: string;
  default: string;
};

export type SpaceProps = keyof Space;

/**
 * @TODO Revisit to allow for 4px intervals, proposed:
 * xxsmall:  base.space * 0.25,
 * xsmall:   base.space * 0.5,
 * small:    base.space * 0.75,
 * default:  base.space,
 * medium:   base.space * 1.25,
 * large:    base.space * 1.5,
 * xlarge:   base.space * 2,
 * xxlarge:  base.space * 2.25
 * xxxlarge: base.space * 2.5,
 */
export type Space = {
  xsmall: number /* px */;
  small: number /* px */;
  default: number /* px */;
  medium: number /* px */;
  large: number /* px */;
  xlarge: number /* px */;
};

export type Radius = {
  small: number;
  default: number;
  largest: number;
};

export type Opacity = {
  disabled: number;
};

export type MaxWidth = {
  default: number /* px */;
  large: number /* px */;
};

export type FontFamily = string;

export type FontSize = {
  body: number;
};

export type FontWeight = {
  normal: number;
  semibold: number;
};

export type Breakpoint = {
  small: number /* in `px` */;
  medium: number /* in `px` */;
  large: number /* in `px` */;
  xlarge: number /* in `px` */;
};

export type BoxShadow = string;

export type BorderWidth = number;

export type BorderStyle = string;

export type Border = string;

type InteractiveColor = {
  120?: ColorValue;
  100?: ColorValue;
  80?: ColorValue;
};

type BackgroundColor = {
  100?: ColorValue;
  80?: ColorValue;
  40?: ColorValue;
  10?: ColorValue;
};

// For text & borders
type SingletonColor = {
  100?: ColorValue;
};

export type ColorPalette = {
  120?: ColorValue;
  100?: ColorValue;
  80?: ColorValue;
  60?: ColorValue;
  40?: ColorValue;
  20?: ColorValue;
  10?: ColorValue;
};

export type Color = ColorBase & ColorThemed & ColorShared;

export type ColorNew = MainColors & SupportiveColors;

export type ColorNames =
  | 'piccolo.120'
  | 'piccolo.100'
  | 'piccolo.80'
  | 'hit.120'
  | 'hit.100'
  | 'hit.80'
  | 'goku.100'
  | 'goku.80'
  | 'goku.40'
  | 'goku.10'
  | 'gohan.100'
  | 'gohan.80'
  | 'gohan.40'
  | 'gohan.10'
  | 'beerus.100'
  | 'goten.100'
  | 'bulma.100'
  | 'trunks.100'
  | 'krillin.100'
  | 'krillin.10'
  | 'chiChi.100'
  | 'chiChi.10'
  | 'roshi.100'
  | 'roshi.10'
  | 'dodoria.100'
  | 'dodoria.10'
  | 'cell.100'
  | 'cell.10'
  | 'raditz.100'
  | 'raditz.10'
  | 'whis.100'
  | 'whis.10'
  | 'frieza.100'
  | 'frieza.10'
  | 'nappa.100'
  | 'nappa.10'
  | 'popo.100';

/**
 * Color Props
 *
 * Access colors via dot notation where supported.
 *
 * Usage: `key.variant`
 * e.g. `piccolo.100`
 *
 * TODO: Type dot notation.
 */
export type ColorProps = ColorNames | string;

export type ColorBase = {
  text: ColorValue;
  background: ColorValue;
};

/* Color Themed
  ============================================ */

export type ColorPiccolo = {
  /**
   * Picollo (Primary)
   *
   * Usage: primary button colors.
   */
  piccolo: InteractiveColor;
};

export type ColorHit = {
  /**
   * Hit (Secondary)
   *
   * Usage: secondary button colors.
   */
  hit: InteractiveColor;
};

export type ColorGoku = {
  /**
   * Goku
   *
   * Usage: main background colors.
   */
  goku: BackgroundColor;
};

export type ColorGohan = {
  /**
   * Gohan
   *
   * Usage: secondary background colors.
   */
  gohan: BackgroundColor;
};

export type ColorBeerus = {
  /**
   * Beerus
   *
   * Usage: border colors.
   */
  beerus: SingletonColor;
};

export type ColorGoten = {
  /**
   * Goten
   *
   * Usage: button text, promotion card text & some cases body or headline text.
   */
  goten: SingletonColor;
};

export type ColorBulma = {
  /**
   * Bulma
   *
   * Usage: main body text.
   */
  bulma: SingletonColor;
};

export type ColorTrunks = {
  /**
   * Trunks
   *
   * Usage: secondary body text.
   */
  trunks: SingletonColor;
};

export type ColorThemed = ColorPiccolo &
  ColorHit &
  ColorGoku &
  ColorGohan &
  ColorBeerus &
  ColorGoten &
  ColorBulma &
  ColorTrunks;

/* Various Shared Palettes */

export interface Base {
  /**
   * ⚠️ Immutable
   *
   * Base FontSize and Base Space are immutable theme settings, in other words
   * the remain the same in **all** themes and *must not* be changed under any
   * circumstances.
   *
   * These settings are crucial for calculating values such as `rem` without
   * having to over-use theme hooks/context calls.
   *
   * If you need to adjust the body font-size, consider using the theme-specific
   * setting `fontSize.body`.
   *
   * If you need to adjust the space, make use of the `space` theme config.
   */
  readonly space: 16;
  readonly fontSize: 16;
  /**
   * ✅ Customisable
   *
   * Although the base.fontSize cannot be modified, the line-height can be
   * adjusted to suit your font-face use-case.
   */
  readonly lineHeight: number;
}

export type Brand =
  | 'Sportsbet.io'
  | 'Betadda'
  | 'Bitcasino.io'
  | 'Comms'
  | 'Slots.io'
  | 'LuckySlots'
  | 'BombayClub'
  | 'Livecasino.io'
  | 'Hub88'
  | 'Aposta10'
  | 'BTCXE'
  | 'MissionsTool'
  | 'Moneyball'
  | 'MoonDesign'
  | 'ShangriLa.io'
  | 'Empire.io'
  | 'Tajcasino';

export type ColorScheme = 'light' | 'dark';

export type BorderRadius = {
  none: number;
  twoxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  twoxlarge: string;
  full: string;
  interactive: string;
};

export type BreakpointNew = {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  twoxlarge: string;
};

export type BorderNew = {
  default: {
    width: string;
    style: string;
    join: string;
  };
  interactive: {
    width: string;
    style: string;
    join: string;
  };
};

export type SpaceNew = {
  threexsmall: string;
  twoxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  twoxlarge: string;
  threexlarge: string;
};

export type ZIndexNew = {
  carouselControl: number;
  dialog: number;
  toggle: number;
};

export type BoxShadowNew = {
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};

export type Font = {
  face: undefined; // Not sure if correct
  family: string;
  size: string;
  weight: {
    normal: number;
    semibold: number;
  };
  lineHeight: string;
};

export type Button = {
  primary: any;
  secondary: any;
  tertiary: any;
};

export type TextLink = {
  fontWeight: number;
  color: {
    default: ColorValue;
    hover: ColorValue;
    visited: ColorValue;
  };
};

export type Hover = {
  primary: string;
  secondary: string;
};

export type Size = {
  twoxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  twoxlarge: string;
};

export interface SharedTheme {
  base: Base;
  border: Border;
  borderWidth: BorderWidth;
  borderStyle: BorderStyle;
  boxShadow: BoxShadow; // legacy
  breakpoint: Breakpoint;
  fontFace?: any;
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  maxWidth: MaxWidth;
  opacity: Opacity;
  radius: Radius;
  space: Space;
  transitionDuration: TransitionDuration;
  transition: Transition;
  zIndex: ZIndex;
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  newTokens: {
    borderRadius: BorderRadius;
    breakpoint: BreakpointNew;
    border: BorderNew;
    space: SpaceNew;
    transitionDuration: string;
    transitionTimingFunction: string;
    transition: Transition;
    zIndex: ZIndexNew;
    boxShadow: BoxShadowNew;
    font: Font;
    opacity: number;
    button: Button; // Not sure if correct
    textLink: TextLink;
    hover: Hover;
    focus: string;
    transform: string;
    size: Size;
  };
}

export type Theme = SharedTheme & {
  brand: Brand;
  colorScheme: ColorScheme;
  color: Color;
  colorNew: ColorNew;
};

const sharedTokens: SharedTheme = {
  base: {
    space,
    fontSize: 16,
    lineHeight: 20,
  },
  borderStyle,
  borderWidth,
  border: `${borderWidth}px ${borderStyle}`,
  boxShadow: '0px 0px 1px 0px #00000066, 0px 8px 24px -6px #00000029',
  shadows: {
    sm: '0px 0px 1px 0px #00000066, 0px 6px 6px -6px #00000029',
    md: '0px 0px 1px 0px #00000066, 0px 12px 12px -6px #00000029',
    lg: '0px 0px 1px 0px #00000066, 0px 8px 24px -6px #00000029',
    xl: '0px 0px 1px 0px #00000033, 0px 0px 32px -8px #0000001F, 0px 32px 32px -8px #00000014',
  },
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
    slow: transitionDuration * 2,
    default: transitionDuration,
  },
  transition: {
    slow: `${transitionDuration * 2}s ease-in-out`,
    default: `${transitionDuration}s ease-in-out`,
  },
  zIndex: {
    carouselControl: 5,
    selectOptions: 10,
    dialog: 10000,
    toggle: 1,
  },
  newTokens: {
    borderRadius: {
      none: 0,
      twoxsmall: rem(2),
      xsmall: rem(4),
      small: rem(6),
      medium: rem(8),
      large: rem(12),
      xlarge: rem(16),
      twoxlarge: rem(24),
      full: rem(9999),
      interactive: rem(9999),
    },
    breakpoint: {
      small: rem(640),
      medium: rem(768),
      large: rem(1024),
      xlarge: rem(1280),
      twoxlarge: rem(1536),
    },
    border: {
      default: {
        width: rem(borderWidthDefault),
        style: borderStyle,
        join: `${rem(borderWidthDefault)} ${borderStyle}`,
      },
      interactive: {
        width: rem(borderWidthInteractive),
        style: borderStyle,
        join: `${rem(borderWidthInteractive)} ${borderStyle}`,
      },
    },
    space: {
      threexsmall: rem(2),
      twoxsmall: rem(4),
      xsmall: rem(8),
      small: rem(16),
      medium: rem(24),
      large: rem(32),
      xlarge: rem(40),
      twoxlarge: rem(48),
      threexlarge: rem(56),
    },
    transitionDuration: `${transitionDuration}s`, // Not sure if needed
    transitionTimingFunction, // Not sure if needed
    transition: {
      slow: `${transitionDuration * 2}s ${transitionTimingFunction}`,
      default: `${transitionDuration}s ${transitionTimingFunction}`,
    },
    zIndex: {
      carouselControl: 5,
      dialog: 10000,
      toggle: 1,
    },
    boxShadow: {
      small: `0 ${rem(6)} ${rem(6)} ${rem(-6)} rgba(0, 0, 0, 0.16), 0 0 ${rem(
        1
      )} rgba(0, 0, 0, 0.4)`,
      medium: `0 ${rem(12)} ${rem(12)} ${rem(
        -6
      )} rgba(0, 0, 0, 0.16), 0 0 ${rem(1)} rgba(0, 0, 0, 0.4)`,
      large: `0 ${rem(8)} ${rem(24)} ${rem(-6)} rgba(0, 0, 0, 0.16), 0 0 ${rem(
        1
      )} rgba(0, 0, 0, 0.4)`,
      xlarge: `0 ${rem(32)} ${rem(32)} ${rem(
        -8
      )} rgba(0, 0, 0, 0.08), 0 0 ${rem(32)} ${rem(
        -8
      )} rgba(0, 0, 0, 0.12), 0 0 ${rem(1)} rgba(0, 0, 0, 0.2)`,
    },
    font: {
      face: undefined, // Not sure if correct
      family:
        'Averta Std, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif', // Not sure if correct
      size: rem(baseFontSize),
      weight: {
        normal: fontWeightNormal,
        semibold: fontWeightSemibold,
      },
      lineHeight: rem(baseLineHeight),
    },
    opacity: 0.32,
    button: {
      primary: buttonVariantTokens.fill,
      secondary: buttonVariantTokens.stroke,
      tertiary: buttonVariantTokens.fillSecondary,
    },
    textLink: {
      fontWeight: fontWeightSemibold,
      color: {
        default: mainColors.piccolo,
        hover: mainColors.hit,
        visited: mainColors.hit,
      },
    },
    hover: {
      primary: `${mainColors.bulma}12`,
      secondary: `${mainColors.piccolo}12`,
    },
    focus: `0 0 0 ${rem(4)} ${mainColors.piccolo}20`,
    transform: 'scale(0.9)',
    size: {
      twoxsmall: rem(16),
      xsmall: rem(24),
      small: rem(32),
      medium: rem(40),
      large: rem(48),
      xlarge: rem(56),
      twoxlarge: rem(64),
    },
  },
};

export default sharedTokens;
