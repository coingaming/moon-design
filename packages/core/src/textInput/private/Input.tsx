import styled from 'styled-components';
import { rem, inlineSvg } from '@heathmont/moon-utils';
import { rgba } from 'polished';

type InputProps = {
  inputSize: 'xsmall' | 'small' | 'medium';
  withIcon?: boolean;
  error?: boolean;
  icon?: string;
  iconColor?: string;
  type?: string;
};

const Input = styled.input.attrs(({ type }) => ({
  type: type,
}))<InputProps>(
  ({
    theme: { color, borderWidth, radius, space, transitionDuration },
    inputSize,
    error,
    icon,
    type,
  }) => [
    {
      display: 'block',
      width: '100%',
      maxWidth: '100%',
      padding: `${rem(7)} ${rem(15)}`,
      paddingRight: type === 'password' ? rem(55) : rem(15),
      appearance: 'none',
      font: 'inherit',
      fontSize: rem(16),
      lineHeight: rem(24),
      color: color.bulma[100],
      backgroundColor: 'transparent',
      position: 'relative',
      zIndex: 2,
      border: `${borderWidth}px solid`,
      borderColor: color.beerus[100],
      borderRadius: rem(radius.largest),
      transition: `border-color ${transitionDuration.default}s ease`,
      WebkitAppearance: 'none',
      '&::placeholder': {
        color: color.trunks[100],
        opacity: 1,
      },
      '&:hover:not(:focus):not([disabled])': {
        borderColor: rgba(color.piccolo[100], 0.12),
        borderWidth: rem(2),
        padding: `${rem(6)} ${rem(14)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      '&:focus': {
        borderColor: !error ? color.piccolo[100] : color.chiChi[100],
        borderWidth: rem(2),
        padding: `${rem(6)} ${rem(14)}`,
        outline: 'none',
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      // date inputs will be marked as invalid by default
      '&:not(:placeholder-shown):not([type="date"]):invalid': {
        borderColor: color.chiChi[100],
        borderWidth: rem(2),
        padding: `${rem(6)} ${rem(14)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      '&:invalid, :-moz-ui-invalid': {
        boxShadow: 'none', // Firefox Override
      },
    },
    inputSize === 'small' && {
      padding: `${rem(11)} ${rem(15)}`,
      paddingRight: type === 'password' ? rem(55) : rem(15),
      '&:hover:not(:focus):not([disabled])': {
        padding: `${rem(10)} ${rem(14)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      '&:focus': {
        padding: `${rem(10)} ${rem(14)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      '&:not(:placeholder-shown):not([type="date"]):invalid': {
        padding: `${rem(10)} ${rem(14)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
    },
    inputSize === 'medium' && {
      padding: `${rem(23)} ${rem(15)} ${rem(7)}`,
      paddingRight: type === 'password' ? rem(55) : rem(15),
      '&:not(:focus)::placeholder': {
        opacity: 0,
      },
      '&:not(:focus):placeholder-shown + label': {
        top: '50%',
        marginTop: rem(-7),
        fontSize: rem(14),
        lineHeight: rem(14),
      },
      '&:hover:not(:focus):not([disabled])': {
        padding: `${rem(22)} ${rem(14)} ${rem(6)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      '&:focus': {
        padding: `${rem(22)} ${rem(14)} ${rem(6)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
      '&:not(:placeholder-shown):not([type="date"]):invalid': {
        padding: `${rem(22)} ${rem(14)} ${rem(6)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
    },
    icon && {
      paddingRight: rem(space.large),
      backgroundImage: inlineSvg(icon),
      backgroundPosition: `right ${rem(space.default)} center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: rem(20),
    },
    error && {
      borderColor: `${color.chiChi[100]} !important`,
      borderWidth: rem(2),
      padding: `${rem(6)} ${rem(15)}`,
    },
    error &&
      inputSize === 'small' && {
        padding: `${rem(10)} ${rem(14)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
    error &&
      inputSize === 'medium' && {
        padding: `${rem(22)} ${rem(14)} ${rem(6)}`,
        paddingRight: type === 'password' ? rem(55) : rem(14),
      },
  ]
);

export default Input;
