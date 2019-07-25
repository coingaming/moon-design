import { CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';

export const focusReset: CSSObject = {
  '&:focus': {
    outline: 'none',
  },
  '&::-moz-focus-inner': {
    border: 0,
  },
};

export const focus = (color: string = colors.brand) =>
  <CSSObject>{
    ...focusReset,
    '&:focus': {
      boxShadow: `0 0 ${rem(2)} ${rem(2)} ${color}`,
    },
  };
