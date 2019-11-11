import { CSSObject } from 'styled-components';
import { opacity } from '@heathmont/sportsbet-tokens';

const defaultDisabled = {
  cursor: 'not-allowed',
  opacity: opacity.disabled,
};

export const disabled = (styles: CSSObject = defaultDisabled) => {
  return {
    '&:disabled, &[disabled]': {
      ...styles,
    },
  };
};
