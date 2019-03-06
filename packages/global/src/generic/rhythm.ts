import { css } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { spacing as spacingTokens } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

export const rhythm = css({
  /**
   * Apply default spacing to the bottom of all block-level elements for
   * consistent vertical rhythm.
   */
  [`h1, h2, h3, h4, h5, h6, hgroup,
    ul, ol, dl,
    blockquote, p, address, table,
    fieldset, figure,
    pre`]: {
    marginBottom: spacing(),
  },
  /**
   * Indent all lists by default (with arbitrary extra pixels for alignment)
   */
  'ul, ol, dd': {
    marginLeft: rem(spacingTokens.default + 2),
  },
});
