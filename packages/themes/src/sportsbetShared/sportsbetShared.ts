import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import { Omit } from '../types/utils';
import { ColorGoten, ColorTrunks, ColorShared } from '../types/color';
import shared from '../shared/shared';

/**
 * Sportsbet Shared Theme Base
 *
 * Similarly to `shared`, `sportsbet-shared` is not a theme itself, more a core
 * set of values used as a foundational layer for each *sportsbet* theme.
 */

type OmitColorScheme = Omit<Theme, 'colorScheme'>;
type SportsbetShared = Omit<OmitColorScheme, 'color'> & {
  color: ColorGoten & ColorTrunks & ColorShared;
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

const sportsbetShared: SportsbetShared = {
  ...sharedTheme,
  brand: 'Sportsbet.io',
  color: {
    ...color,
    goten: {
      100: '#FFFFFF',
      80: '#F3F5F6',
      60: '#EDEFF1',
      40: '#E7EAEC',
      20: '#DBE0E3',
      10: '#CFD5DA',
    },
    trunks: {
      100: '#8697A2',
      80: '#92A1AB',
      60: '#98A7B0',
      40: '#9EACB5',
      20: '#A4B1B9',
      10: '#AAB6BE',
    },
  },
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
};

export default sportsbetShared;
