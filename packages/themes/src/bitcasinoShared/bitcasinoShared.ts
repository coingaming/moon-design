import { avertaStd } from '@heathmont/sportsbet-fonts';

import { Theme } from '../types/theme';
import { Omit } from '../types/utils';
import {
  ColorPiccolo,
  ColorGoten,
  ColorShared,
  ColorHit,
} from '../types/color';
import shared from '../shared/shared';

/**
 * Sportsbet Shared Theme Base
 *
 * Similarly to `shared`, `sportsbet-shared` is not a theme itself, more a core
 * set of values used as a foundational layer for each *sportsbet* theme.
 */
type OmitColorScheme = Omit<Theme, 'colorScheme'>;
type BitcasinoShared = Omit<OmitColorScheme, 'color'> & {
  color: ColorPiccolo & ColorHit & ColorGoten & ColorShared;
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

const bitcasinoShared: BitcasinoShared = {
  ...sharedTheme,
  brand: 'Bitcasino.io',
  color: {
    ...color,
    piccolo: {
      120: '#F54100',
      100: '#FF4F0F',
      80: '#FA642E',
    },
    hit: {
      120: '#0679E5',
      100: '#1286F3',
      80: '#2F92EE',
    },
    goten: {
      100: '#FFFFFF',
    },
  },
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
};

export default bitcasinoShared;
