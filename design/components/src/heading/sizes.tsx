import rem from 'polished/lib/helpers/rem';
import { CSSObject } from '@emotion/core';
import { typography } from '@heathmont/sportsbet-tokens';

type HeadingSizes =
  | 'alpha'
  | 'bravo'
  | 'charlie'
  | 'delta'
  | 'echo'
  | 'foxtrot';

const alpha: CSSObject = {
  fontWeight: typography.fontWeight.semibold,
  fontSize: rem(55),
  lineHeight: rem(68),
};

const bravo: CSSObject = {
  fontWeight: typography.fontWeight.semibold,
  fontSize: rem(48),
  lineHeight: rem(59),
};

const charlie: CSSObject = {
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(42),
  lineHeight: rem(52),
};

const delta: CSSObject = {
  fontWeight: typography.fontWeight.semibold,
  fontSize: rem(42),
  lineHeight: rem(52),
};

const echo: CSSObject = {
  fontWeight: typography.fontWeight.bold,
  fontSize: rem(35),
  lineHeight: rem(43),
};

const foxtrot: CSSObject = {
  fontWeight: typography.fontWeight.bold,
  fontSize: rem(33),
  lineHeight: rem(41),
};

const headingSizes = {
  alpha,
  bravo,
  charlie,
  delta,
  echo,
  foxtrot,
};

export { headingSizes, HeadingSizes };
