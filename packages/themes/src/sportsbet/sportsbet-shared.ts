import { avertaStd } from '@heathmont/sportsbet-fonts';

import { Theme } from '../types/theme';
import { Omit } from '../types/utils';
import {
  ColorPiccolo,
  ColorPopo,
  ColorDende,
  ColorGoten,
  ColorTrunks,
  ColorShared,
} from '../types/color';
import { shared } from '../shared/shared';

/**
 * Sportsbet Shared Theme Base
 *
 * Similarly to `shared`, `sportsbet-shared` is not a theme itself, more a core
 * set of values used as a foundational layer for each *sportsbet* theme.
 */

type OmitColorScheme = Omit<Theme, 'colorScheme'>;
type SportsbetShared = Omit<OmitColorScheme, 'color'> & {
  color: ColorPiccolo &
    ColorPopo &
    ColorDende &
    ColorGoten &
    ColorTrunks &
    ColorShared;
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

const greens = {
  100: '#0CD664',
  80: '#50E190',
  60: '#66E59E',
  40: '#85EAB2',
  20: '#9EEFC1',
  10: '#B6F3D0',
};

export const sportsbetShared: SportsbetShared = {
  ...sharedTheme,
  brand: 'Sportsbet.io',
  color: {
    ...color,
    piccolo: greens,
    popo: greens,
    dende: {
      100: '#DBE0E3',
      80: '#DFE3E6',
      60: '#E2E6E9',
      40: '#E6E9EB',
      20: '#E9ECEE',
      10: '#EDEFF1',
    },
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
