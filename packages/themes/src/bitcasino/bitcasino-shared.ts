import { avertaStd } from '@heathmont/sportsbet-fonts';

import { Theme } from '../types/theme';
import { Omit } from '../types/utils';
import {
  ColorPiccolo,
  ColorPopo,
  ColorGoten,
  ColorShared,
  ColorHit,
} from '../types/color';
import { shared } from '../shared/shared';

/**
 * Sportsbet Shared Theme Base
 *
 * Similarly to `shared`, `sportsbet-shared` is not a theme itself, more a core
 * set of values used as a foundational layer for each *sportsbet* theme.
 */
type OmitColorScheme = Omit<Theme, 'colorScheme'>;
type BitcasinoShared = Omit<OmitColorScheme, 'color'> & {
  color: ColorPiccolo & ColorPopo & ColorHit & ColorGoten & ColorShared;
};

const {
  color,
  /* Keys we don't need */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  fontFace,
  fontFamily,
  fontSize,
  fontWeight,
  /* eslint-enable */
  ...sharedTheme
} = shared;

const blues = {
  100: '#1084F2',
  80: '#1084F2',
  60: '#2997FF',
  40: '#41A2FF',
  20: '#58AEFF',
  10: '#88C5FF',
};

export const bitcasinoShared: BitcasinoShared = {
  ...sharedTheme,
  brand: 'Bitcasino.io',
  color: {
    ...color,
    piccolo: {
      100: '#FF5111',
      80: '#FF5111',
      60: '#FF7441',
      40: '#FF895F',
      20: '#FFA382',
      10: '#FFBEA6',
    },
    hit: blues,
    popo: blues,
    goten: {
      100: '#FFFFFF',
      80: '#F3F5F6',
      60: '#EDEFF1',
      40: '#E7EAEC',
      20: '#DBE0E3',
      10: '#CFD5DA',
    },
  },
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
};
