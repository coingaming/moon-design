import styled from 'styled-components';
import { rem, inlineSvg } from '@heathmont/moon-utils';
import { rgba } from 'polished';

type InputProps = {
  size?: 'xsmall' | 'small' | 'medium';
  withIcon?: boolean;
  error?: boolean;
  rounded?: boolean;
  icon?: any;
  iconColor?: string;
};

export const Input = styled.input<InputProps>(
  ({
    theme: { color, borderWidth, radius, space, transitionDuration },
    size,
    error,
  }) => [
    {
      display: 'block',
      width: '100%',
      maxWidth: '100%',
      padding: `${rem(7)} ${rem(16)}`,
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
        padding: `${rem(6)} ${rem(15)}`,
      },
      '&:focus': {
        borderColor: !error ? color.piccolo[100] : color.chiChi[100],
        borderWidth: rem(2),
        padding: `${rem(6)} ${rem(15)}`,
        outline: 'none',
      },
      // date inputs will be marked as invalid by default
      '&:not(:placeholder-shown):not([type="date"]):invalid': {
        borderColor: color.chiChi[100],
        borderWidth: rem(2),
        padding: `${rem(6)} ${rem(15)}`,
      },
      '&:invalid, :-moz-ui-invalid': {
        boxShadow: 'none', // Firefox Override
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        '& + label': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
      },
    },
    size === 'small' && {
      padding: `${rem(11)} ${rem(16)}`,
      '&:hover:not(:focus):not([disabled])': {
        padding: `${rem(10)} ${rem(16)}`,
      },
      '&:focus': {
        padding: `${rem(10)} ${rem(16)}`,
      },
      '&:not(:placeholder-shown):not([type="date"]):invalid': {
        padding: `${rem(10)} ${rem(16)}`,
      },
    },
    size === 'medium' && {
      padding: `${rem(23)} ${rem(16)} ${rem(7)}`,
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
        padding: `${rem(22)} ${rem(16)} ${rem(6)}`,
      },
      '&:focus': {
        padding: `${rem(22)} ${rem(16)} ${rem(6)}`,
      },
      '&:not(:placeholder-shown):not([type="date"]):invalid': {
        padding: `${rem(22)} ${rem(16)} ${rem(6)}`,
      },
    },
    ({ icon }) =>
      icon && {
        paddingRight: rem(space.large),
        backgroundImage: inlineSvg(icon),
        backgroundPosition: `right ${rem(space.default)} center`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: rem(20),
      },
    ({ error }) =>
      error && {
        borderColor: color.chiChi[100],
      },
  ]
);

export default Input;
