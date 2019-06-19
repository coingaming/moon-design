import rem from 'polished/lib/helpers/rem';
import {
  base,
  Spacing as SpacingTokens,
  spacing as spacingTokens,
} from '@heathmont/sportsbet-tokens';

type SpacingSize = keyof SpacingTokens | 0;
type SpacingUnit = string;

const spacing = (size: SpacingSize = 'default', unit?: SpacingUnit) => {
  if (size === 0) {
    return 0;
  }

  return unit === 'px'
    ? `${spacingTokens[size]}px`
    : rem(spacingTokens[size], base.spacing) || 0;
};

/* emotion-disable usage due to https://github.com/emotion-js/emotion/issues/1178 */
const rhythm = (size: SpacingSize = 'default', unit?: SpacingUnit) => ({
  marginTop: spacing(size, unit),
  '&:first-child /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */': {
    marginTop: 0,
  },
});

export { spacing };
