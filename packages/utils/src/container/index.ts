import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import margin from 'polished/lib/shorthands/margin';
import padding from 'polished/lib/shorthands/padding';
import {
  base,
  container as containerTokens,
  Container as ContainerTokens,
  spacing as spacingTokens,
  Spacing as SpacingTokens,
} from '@heathmont/sportsbet-tokens';

type ContainerSize = keyof ContainerTokens | number;
type PaddingSize = keyof SpacingTokens | number;

const sizeValue = (size: ContainerSize | PaddingSize, sizeTokens: any) => {
  if (typeof size === 'number') {
    return rem(size, base.spacing);
  }

  return typeof size === 'string' && size in sizeTokens
    ? rem(sizeTokens[size], base.spacing)
    : 0;
};

const container: (
  size?: ContainerSize,
  spacingSize?: PaddingSize
) => CSSObject = (size = 'default', spacingSize = 'default') => ({
  ...padding(null, sizeValue(spacingSize, spacingTokens)),
  ...margin(null, 'auto'),
  maxWidth: sizeValue(size, containerTokens),
});

export { container };
