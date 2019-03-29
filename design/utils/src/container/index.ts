import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import margin from 'polished/lib/shorthands/margin';
import {
  base,
  container as containerTokens,
  Container as ContainerTokens,
} from '@heathmont/sportsbet-tokens';
import { spacing } from '../spacing';

type ContainerSize = keyof ContainerTokens | number;

const container: (size?: ContainerSize) => CSSObject = (size = 'default') => {
  const containerSize = (size: ContainerSize) => {
    if (typeof size === 'number') {
      return rem(size, base.fontSize);
    }

    return typeof size === 'string' && size in containerTokens
      ? rem(containerTokens[size], base.fontSize)
      : 'none';
  };

  return {
    maxWidth: containerSize(size),
    padding: 0,
    ...margin(null, 'auto'),
  };
};

export { container };
