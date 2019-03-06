import rem from 'polished/lib/helpers/rem';
import {
  base,
  Spacing as SpacingTokens,
  spacing as spacingTokens,
} from '@heathmont/sportsbet-tokens';

export const spacing = (size: keyof SpacingTokens = 'default', unit?: string) =>
  unit === 'px'
    ? `${spacingTokens[size]}px`
    : rem(spacingTokens[size], base.fontSize) || 0;
