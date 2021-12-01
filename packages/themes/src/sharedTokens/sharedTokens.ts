import type { ColorShared, ColorValue } from '../supportColors/supportColors';

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

const space = 16;

const transitionDuration = 0.2;

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
}

export type Theme = SharedTheme & {
  brand: Brand;
  colorScheme: ColorScheme;
  color: Color;
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
};

export default sharedTokens;
