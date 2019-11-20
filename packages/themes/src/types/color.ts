import { CSSObject } from 'styled-components';

type ColorValue = CSSObject['color'];

export type ColorPalette = {
  100: ColorValue;
  80: ColorValue;
  60: ColorValue;
  40: ColorValue;
  20: ColorValue;
  10: ColorValue;
};

export type Color = ColorBase & ColorThemed & ColorShared;

export type ColorBase = {
  text: ColorValue;
  background: ColorValue;
};

export type ColorThemed = {
  /**
   * Picollo (Primary)
   *
   * Usage: primary button colors.
   */
  piccolo: ColorPalette;
  /**
   * Hit (Secondary)
   *
   * Usage: secondary button colors.
   */
  hit: ColorPalette;
  /**
   * Dende (Tertiary) | Optional
   *
   * Usage: tertiary button colors.
   */
  dende?: ColorPalette;
  /**
   * Popo
   *
   * Usage: link colors.
   */
  popo: ColorPalette;
  /**
   * Goku
   *
   * Usage: main background colors.
   */
  goku: ColorPalette;
  /**
   * Gohan
   *
   * Usage: secondary background colors.
   */
  gohan: ColorPalette;
  /**
   * Goten
   *
   * Usage: button text, promotion card text & some cases body or headline text.
   */
  goten: ColorPalette;
  /**
   * Bulma
   *
   * Usage: main body text.
   */
  bulma: ColorPalette;
  /**
   * Trunks
   *
   * Usage: secondary body text.
   */
  trunks: ColorPalette;
};

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
