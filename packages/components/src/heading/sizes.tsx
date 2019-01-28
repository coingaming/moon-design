import { rem } from 'polished';
import { css } from '@emotion/core';
import { typography } from '@heathmont/sportsbet-tokens';

export type HeadingSizes =
  | 'alpha'
  | 'bravo'
  | 'charlie'
  | 'delta'
  | 'echo'
  | 'foxtrot';

const alpha = css({
  fontWeight: typography.fontWeight.semibold,
  fontSize: rem(55),
  lineHeight: rem(68)
});

const bravo = css({
  fontWeight: typography.fontWeight.semibold,
  fontSize: rem(48),
  lineHeight: rem(59)
});

const charlie = css({
  fontWeight: typography.fontWeight.normal,
  fontSize: rem(42),
  lineHeight: rem(52)
});

const delta = css({
  fontWeight: typography.fontWeight.semibold,
  fontSize: rem(42),
  lineHeight: rem(52)
});

const echo = css({
  fontWeight: typography.fontWeight.bold,
  fontSize: rem(35),
  lineHeight: rem(43)
});

const foxtrot = css({
  fontWeight: typography.fontWeight.bold,
  fontSize: rem(33),
  lineHeight: rem(41)
});

export const headingSizes = {
  alpha,
  bravo,
  charlie,
  delta,
  echo,
  foxtrot
};
