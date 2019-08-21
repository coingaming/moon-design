import rem from 'polished/lib/helpers/rem';
import {
  base,
  Spacing as SpacingTokens,
  spacing as spacingTokens,
} from '@heathmont/sportsbet-tokens';

export type SpacingSize = keyof SpacingTokens | 0;
export type SpacingUnit = string;

const spacing = (size: SpacingSize = 'default', unit?: SpacingUnit) => {
  if (size === 0) {
    return 0;
  }

  return unit === 'px'
    ? `${spacingTokens[size]}px`
    : rem(spacingTokens[size], base.spacing) || 0;
};

export { spacing };
