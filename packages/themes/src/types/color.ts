import { CSSObject } from 'styled-components';

export type ColorValue = CSSObject['color'];

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
  piccolo: ColorPalette;
};

export type ColorHit = {
  /**
   * Hit (Secondary)
   *
   * Usage: secondary button colors.
   */
  hit: ColorPalette;
};

export type ColorGoku = {
  /**
   * Goku
   *
   * Usage: main background colors.
   */
  goku: ColorPalette;
};

export type ColorGohan = {
  /**
   * Gohan
   *
   * Usage: secondary background colors.
   */
  gohan: ColorPalette;
};

export type ColorBeerus = {
  /**
   * Beerus
   *
   * Usage: border colors.
   */
  beerus: ColorPalette;
};

export type ColorGoten = {
  /**
   * Goten
   *
   * Usage: button text, promotion card text & some cases body or headline text.
   */
  goten: ColorPalette;
};

export type ColorBulma = {
  /**
   * Bulma
   *
   * Usage: main body text.
   */
  bulma: ColorPalette;
};

export type ColorTrunks = {
  /**
   * Trunks
   *
   * Usage: secondary body text.
   */
  trunks: ColorPalette;
};

export type ColorThemed = ColorPiccolo &
  ColorHit &
  ColorGoku &
  ColorGohan &
  ColorBeerus &
  ColorGoten &
  ColorBulma &
  ColorTrunks;

/* ColorShared
  ============================================ */

export type ColorShared = {
  /**
   * Krillin
   *
   * Usage: warning colors.
   */
  krillin: ColorPalette;
  /**
   * Chi-chi
   *
   * Usage: error colors.
   */
  chiChi: ColorPalette;
  /**
   * Roshi
   *
   * Usage: success colors.
   */
  roshi: ColorPalette;
  /* Various Shared Palettes */
  dodoria: ColorPalette;
  cell: ColorPalette;
  raditz: ColorPalette;
  whis: ColorPalette;
  frieza: ColorPalette;
  nappa: ColorPalette;
  erasa: ColorPalette;
};
