import { CSSObject } from 'styled-components';
import { shared } from '@heathmont/moon-themes';

import rem from '../rem/rem';

export const focusReset: CSSObject = {
  '&:focus': {
    outline: 'none',
  },
  '&::-moz-focus-inner': {
    border: 0,
  },
};

export const focus = (color: string | undefined = shared.color.whis[100]) => ({
  ...focusReset,
  '&:focus': {
    outline: 'none' /* Duplicate `:focus` doesn't spread nice */,
    boxShadow: `0 0 ${rem(2)} ${rem(2)} ${color}`,
  },
});

export default focus;
