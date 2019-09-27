import { CSSObject } from '@emotion/core';
import margin from 'polished/lib/shorthands/margin';
import padding from 'polished/lib/shorthands/padding';
import {
  container as containerTokens,
  Container as ContainerTokens,
  spacing as spacingTokens,
  Spacing as SpacingTokens,
} from '@heathmont/sportsbet-tokens';

import { rem } from '../../helpers/rem';

type ContainerSize = keyof ContainerTokens | number;
type PaddingSize = keyof SpacingTokens | number;

const sizeValue = (size: ContainerSize | PaddingSize, sizeTokens: any) => {
  if (typeof size === 'number') {
    return rem(size);
  }

  return typeof size === 'string' && size in sizeTokens
    ? rem(sizeTokens[size])
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
