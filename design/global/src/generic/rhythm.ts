import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { spacing as spacingTokens } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

export const rhythm: CSSObject = {
  /**
   * Apply default spacing to the bottom of all block-level elements for
   * consistent vertical rhythm.
   */
  [`ul, ol, dl, p`]: {
    marginTop: spacing(),
  },
  /**
   * Indent all lists by default (with arbitrary extra pixels for alignment)
   */
  'ul, ol, dd': {
    marginLeft: rem(spacingTokens.default + 2),
  },
};
