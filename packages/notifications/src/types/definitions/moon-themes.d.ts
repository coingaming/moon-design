declare module '@heathmont/moon-themes' {
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

  export type ColorProps = ColorNames | string;

  export const useTheme: any;

  interface SupportingColor {
    100?: ColorValue;
    10?: ColorValue;
  }

  interface SingletonColor {
    100: ColorValue;
  }

  export interface ColorShared {
    krillin: SupportingColor; // Warning colors
    chiChi: SupportingColor; // Error colors
    roshi: SupportingColor; // Success colors
    dodoria: SupportingColor;
    cell: SupportingColor;
    raditz: SupportingColor;
    whis: SupportingColor;
    frieza: SupportingColor;
    nappa: SupportingColor;
    popo: SingletonColor; // Black color
  }

  export const supportColors: ColorShared;
}
