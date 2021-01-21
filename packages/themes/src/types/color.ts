import { CSSObject } from 'styled-components';

export type ColorValue = CSSObject['color'];

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

type SupportingColor = {
  100?: ColorValue;
  10?: ColorValue;
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
export type ColorProps = ColorValue;

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
  | 'nappa.10';

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

export type ColorShared = {
  krillin: SupportingColor; // Warning colors
  chiChi: SupportingColor; // Error colors
  roshi: SupportingColor; // Success colors
  dodoria: SupportingColor;
  cell: SupportingColor;
  raditz: SupportingColor;
  whis: SupportingColor;
  frieza: SupportingColor;
  nappa: SupportingColor;
};

export default ColorThemed;
