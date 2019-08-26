import { CSSObject } from '@emotion/core';
import { typography } from '@heathmont/sportsbet-tokens';
import { rem } from '@heathmont/sportsbet-utils';

type HeadingSizes = 'alpha' | 'bravo' | 'charlie' | 'delta' | 'echo';

const alpha: CSSObject = {
  fontWeight: typography.fontWeight.bold,
  fontSize: rem(40),
  lineHeight: rem(48),
};

const bravo: CSSObject = {
  fontWeight: typography.fontWeight.bold,
  fontSize: rem(32),
  lineHeight: rem(40),
};

const charlie: CSSObject = {
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(24),
  lineHeight: rem(32),
};

const delta: CSSObject = {
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(20),
  lineHeight: rem(32),
};

const echo: CSSObject = {
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(16),
  lineHeight: rem(24),
};

const headingSizes = {
  alpha,
  bravo,
  charlie,
  delta,
  echo,
};

export { headingSizes, HeadingSizes };
