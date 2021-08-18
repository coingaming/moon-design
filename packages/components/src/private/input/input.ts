import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

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
  rounded?: boolean;
};

export const Input = styled.input<InputProps>(({ theme }) => [
  {
    width: '100%',
    maxWidth: '100%',
    padding: `${rem(inputSpacingY(theme))} ${rem(inputSpacingX(theme))}`,
    appearance: 'none',
    font: 'inherit',
    fontSize: rem(inputFontSize),
    lineHeight: rem(inputLineHeight),
    color: inputColors('text')(theme),
    backgroundColor: inputColors('background')(theme),
    border: inputBorder(theme),
    borderRadius: rem(theme.radius.small),
    transition: `border-color ${inputAnimationSpeed(theme)} ease`,
    WebkitAppearance: 'none',
    '&::placeholder': {
      color: inputColors('placeholder')(theme),
      opacity: 1,
    },
    '&:hover:not(:focus):not([disabled])': {
      borderColor: inputColors('borderHover')(theme),
    },
    // date inputs will be marked as invalid by default
    '&:not(:placeholder-shown):not([type="date"]):invalid': {
      borderColor: theme.color.chiChi[100],
    },
    '&:invalid, :-moz-ui-invalid': {
      boxShadow: 'none', // Firefox Override
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  ({ withIcon }) =>
    withIcon && {
      paddingRight: rem(inputIconOffset(theme)),
      backgroundPosition: `right ${rem(inputIconPosition(theme))} center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: rem(inputIconSize),
    },
  ({ error }) =>
    error && {
      borderColor: theme.color.chiChi[100],
    },
  ({ rounded }) =>
    rounded && {
      borderRadius: rem(theme.radius.largest),
    },
]);
