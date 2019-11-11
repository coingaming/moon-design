import { CSSObject } from 'styled-components';
import { colors } from '@heathmont/sportsbet-tokens';

import { rem } from '../helpers/rem';

export const focusReset: CSSObject = {
  '&:focus': {
    outline: 'none',
  },
  '&::-moz-focus-inner': {
    border: 0,
  },
};

export const focus = (color: string = colors.brand): CSSObject => ({
  ...focusReset,
  '&:focus': {
    outline: 'none' /* Duplicate `:focus` doesn't spread nice */,
    boxShadow: `0 0 ${rem(2)} ${rem(2)} ${color}`,
  },
});
