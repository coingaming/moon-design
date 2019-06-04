import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { spacing } from '@heathmont/sportsbet-utils';

type ButtonSizes = 'xsmall' | 'small' | 'medium' | 'large';

/**
 * buttonSizes
 *
 * Styles that extend `buttonBase` to change the button's cosmetic appearance.
 * Accessed via `buttonSizes[key]`.
 */
const xsmall: CSSObject = {
  fontSize: rem(12),
  lineHeight: rem(15),
  padding: `${spacing('small')} ${spacing('medium')}`,
};

const small: CSSObject = {
  fontSize: rem(14),
  lineHeight: rem(17),
  padding: `${rem(12)} ${spacing('large')}`,
};

const medium: CSSObject = {
  fontSize: rem(14),
  lineHeight: rem(17),
  padding: `${rem(12)} ${spacing('large')}`,
};

const large: CSSObject = {
  fontSize: rem(14),
  lineHeight: rem(17),
  padding: `${rem(12)} ${spacing('large')}`,
};

const buttonSizes = {
  xsmall,
  small,
  medium,
  large,
};

export { buttonSizes, ButtonSizes };
