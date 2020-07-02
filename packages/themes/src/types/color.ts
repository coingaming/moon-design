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

type SustenanceColor = {
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
  krillin: SustenanceColor; // Warning colors
  chiChi: SustenanceColor; // Error colors
  roshi: SustenanceColor; // Success colors
  dodoria: SustenanceColor;
  cell: SustenanceColor;
  raditz: SustenanceColor;
  whis: SustenanceColor;
  frieza: SustenanceColor;
  nappa: SustenanceColor;
};
