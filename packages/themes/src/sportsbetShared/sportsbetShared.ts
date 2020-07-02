import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import { Omit } from '../types/utils';
import shared from '../shared/shared';

/**
 * Sportsbet Shared Theme Base
 *
 * Similarly to `shared`, `sportsbet-shared` is not a theme itself, more a core
 * set of values used as a foundational layer for each *sportsbet* theme.
 */

type OmitColorScheme = Omit<Theme, 'colorScheme'>;
type SportsbetShared = Omit<OmitColorScheme, 'color'>;

const {
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
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
};

export default sportsbetShared;
