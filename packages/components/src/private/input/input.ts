import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import {
  inputBorder,
  inputColors,
  inputSpacing,
  inputIconSize,
  inputIconOffset,
  inputAnimationSpeed,
} from './settings';

type InputProps = {
  withIcon?: boolean;
  error?: boolean;
  success?: boolean;
};

export const Input = styled.input((props: InputProps) => [
  {
    width: '100%',
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
      cursor: 'not-allowed',
      borderColor: inputColors.disabled,
    },
    '&:disabled, &:disabled + label': {
      color: inputColors.disabled,
    },
  },
  props.withIcon && {
    paddingRight: inputIconOffset,
    backgroundPosition: `right ${rem(inputIconSize)} center`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: rem(inputIconSize),
  },
  props.error && {
    '&, &:not(:placeholder-shown)': {
      borderColor: colors.error,
    },
  },
]);
