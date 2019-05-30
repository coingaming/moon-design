import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import {
  inputBorder,
  inputColors,
  inputSpacing,
  inputIconSize,
  inputIconOffset,
  inputIconPosition,
  inputAnimationSpeed,
} from './settings';

type InputProps = {
  withIcon?: boolean;
  error?: boolean;
};

export const Input = styled.input<InputProps>(props => [
  {
    width: '100%',
    maxWidth: '100%',
    padding: rem(inputSpacing),
    appearance: 'none',
    font: 'inherit',
    color: inputColors.text,
    backgroundColor: inputColors.background,
    border: inputBorder,
    borderRadius: border.radius.small,
    transition: `border-color ${inputAnimationSpeed} ease`,
    WebkitAppearance: 'none',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '&:not(:focus):not(:placeholder-shown):invalid': {
      borderColor: colors.error,
    },
    '&:invalid, :-moz-ui-invalid': {
      boxShadow: 'none', // Firefox Override
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
