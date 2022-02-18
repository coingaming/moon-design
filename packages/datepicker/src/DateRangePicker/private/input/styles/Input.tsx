import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

type InputProps = {
  error?: boolean;
  bgColor?: ColorProps;
  isLabel?: boolean;
  isPassword?: boolean;
};

const Input = styled.input.attrs(({ type }) => ({
  type: type,
}))<InputProps>(
  ({
    theme: currentTheme,
    theme: {
      colorNew,
      hover,
      newTokens: { borderRadius, border, transition },
    },
    error,
    bgColor,
    isLabel,
    isPassword,
    dir,
  }) => [
    {
      display: 'block',
      width: '100%',
      maxWidth: '100%',
      height: rem(56),
      lineHeight: rem(56),
      letterSpacing: rem(-1.2),
      padding: `0 ${rem(16)}`,
      margin: 0,
      appearance: 'none',
      font: 'inherit',
      fontSize: rem(16),
      color: colorNew.bulma,
      backgroundColor: !bgColor
        ? 'transparent'
        : themed('colorNew', bgColor)(currentTheme),
      position: 'relative',
      zIndex: 2,
      border: 'none',
      boxShadow: `0 0 0 ${border.width.default} ${colorNew.beerus} inset`,
      borderRadius: borderRadius.large,
      transition: `box-shadow ${transition.default}`,
      WebkitAppearance: 'none',
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box',
      },
      '&::placeholder': {
        color: colorNew.trunks,
        opacity: 1,
        transition: `opacity ${transition.default}`,
        transitionDelay: `0.05s`,
      },
      '&:hover:not(:focus):not([disabled]):not([readonly])': {
        boxShadow: `0 0 0 ${border.width.interactive} ${
          !error ? hover.primary : colorNew.chiChi[100]
        } inset, 0 0 0 ${border.width.interactive} ${
          !error ? colorNew.beerus : colorNew.chiChi[100]
        } inset`,
        borderRadius: borderRadius.large,
      },
      '&:focus:not([readonly])': {
        outline: 'none',
        boxShadow: `0 0 0 ${border.width.interactive} ${
          !error ? colorNew.piccolo : colorNew.chiChi[100]
        } inset`,
        borderRadius: borderRadius.large,
      },
      '&:not(:placeholder-shown):not([type="date"]):not([type="datetime-local"]):invalid':
        {
          boxShadow: `0 0 0 ${border.width.interactive} ${colorNew.chiChi[100]} inset`,
        },
      '&[readonly]': {
        outline: 'none',
        border: 'none',
        cursor: 'not-allowed',
      },
      '&::-webkit-datetime-edit, &::-webkit-date-and-time-value': {
        display: 'block',
        padding: 0,
        height: rem(38),
        lineHeight: `${rem(38)}`,
        ...(dir === 'rtl' ? { textAlign: 'end' } : {}),
      },
      '&::-webkit-datetime-edit': {
        height: rem(54),
        lineHeight: rem(54),
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(16),
      },
      '&[type="date"]::-webkit-inner-spin-button, &[type="datetime-local"]::-webkit-inner-spin-button':
        {
          display: 'none',
        },
      '&[type="date"]::-webkit-calendar-picker-indicator, &[type="datetime-local"]::-webkit-calendar-picker-indicator':
        {
          display: 'none',
        },
    },
    isLabel && {
      height: rem(56),
      paddingTop: rem(18),
      lineHeight: rem(20),
      '&:not(:focus):not([disabled])::placeholder': {
        opacity: 0,
      },
      '&:not(:focus):not([disabled]):placeholder-shown + label': {
        top: '50%',
        marginTop: rem(-7),
        fontSize: rem(16),
        lineHeight: rem(16),
      },
      '&::-webkit-datetime-edit': {
        height: rem(36),
        lineHeight: rem(34),
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: 0,
      },
    },
    error && {
      borderRadius: borderRadius.large,
      boxShadow: `0 0 0 ${border.width.interactive} ${colorNew.chiChi[100]} inset`,
    },
    isPassword && {
      paddingRight: rem(55),
    },
  ]
);

export default Input;
