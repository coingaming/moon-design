import { rem, inlineSvg } from '@heathmont/moon-utils';
import styled from 'styled-components';

type InputProps = {
  withIcon?: boolean;
  error?: boolean;
  rounded?: boolean;
  icon?: any;
  iconColor?: string;
};

export const Input = styled.input<InputProps>(({ theme }) => [
  {
    width: '100%',
    maxWidth: '100%',
    padding: `${rem(theme.space.small)} ${rem(theme.space.default)}`,
    appearance: 'none',
    font: 'inherit',
    fontSize: rem(16),
    lineHeight: 1.5,
    color: theme.color.bulma[100],
    backgroundColor: theme.color.gohan[100],
    border: `${theme.borderWidth}px solid ${theme.color.beerus[100]}`,
    borderRadius: rem(theme.radius.largest),
    transition: `border-color ${theme.transitionDuration.default}s ease`,
    WebkitAppearance: 'none',
    '&::placeholder': {
      color: theme.colorNew.trunks,
      opacity: 1,
    },
    '&:hover:not(:focus):not([disabled])': {
      borderColor: theme.color.goku[40],
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
  ({ icon }) =>
    icon && {
      paddingRight: rem(theme.space.large),
      backgroundImage: inlineSvg(icon),
      backgroundPosition: `right ${rem(theme.space.default)} center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: rem(20),
    },
  ({ error }) =>
    error && {
      borderColor: theme.color.chiChi[100],
    },
]);

export default Input;
