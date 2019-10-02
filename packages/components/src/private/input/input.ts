import styled from '@emotion/styled';
import { rem } from '@heathmont/sportsbet-utils';
import { colors, border } from '@heathmont/sportsbet-tokens';

import {
  inputBorder,
  inputColors,
  inputFontSize,
  inputSpacingX,
  inputSpacingY,
  inputIconSize,
  inputIconOffset,
  inputIconPosition,
  inputAnimationSpeed,
  inputLineHeight,
} from './settings';

type InputProps = {
  withIcon?: boolean;
  error?: boolean;
};

export const Input = styled.input<InputProps>(props => [
  {
    width: '100%',
    maxWidth: '100%',
    padding: `${rem(inputSpacingY)} ${rem(inputSpacingX)}`,
    appearance: 'none',
    font: 'inherit',
    fontSize: rem(inputFontSize),
    lineHeight: rem(inputLineHeight),
    color: inputColors.text,
    backgroundColor: inputColors.background,
    border: inputBorder,
    borderRadius: border.radius.small,
    transition: `border-color ${inputAnimationSpeed} ease`,
    WebkitAppearance: 'none',
    '&::placeholder': {
      color: inputColors.placeholder,
      opacity: 1,
    },
    '&:hover:not(:focus)': {
      borderColor: inputColors.border.hover,
    },
    '&:not(:placeholder-shown):invalid': {
      borderColor: colors.error,
    },
    '&:invalid, :-moz-ui-invalid': {
      boxShadow: 'none', // Firefox Override
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  props.withIcon && {
    paddingRight: rem(inputIconOffset),
    backgroundPosition: `right ${rem(inputIconPosition)} center`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: rem(inputIconSize),
  },
  props.error && {
    borderColor: colors.error,
  },
]);
