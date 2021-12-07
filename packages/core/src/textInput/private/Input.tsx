import styled from 'styled-components';
import { rem, inlineSvg, themed } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import { ColorProps } from '@heathmont/moon-themes';
import TextInputSizeType from './types/SizeTypes';
import Size from '../../private/enums/Size';

type InputProps = {
  inputSize: TextInputSizeType;
  withIcon?: boolean;
  error?: boolean;
  icon?: string;
  iconColor?: string;
  type?: string;
  bgColor?: ColorProps;
  isLabel?: boolean;
  isPassword?: boolean;
};

const Input = styled.input.attrs(({ type }) => ({
  type: type,
}))<InputProps>(
  ({
    theme: currentTheme,
    theme: { color, radius, space, transitionDuration },
    inputSize,
    error,
    icon,
    type,
    bgColor,
    isLabel,
    isPassword,
  }) => [
    {
      display: 'block',
      width: '100%',
      maxWidth: '100%',
      height: rem(40),
      padding: `0 ${rem(16)}`,
      margin: 0,
      appearance: 'none',
      font: 'inherit',
      fontSize: rem(16),
      lineHeight: rem(40),
      color: color.bulma[100],
      backgroundColor: !bgColor
        ? 'transparent'
        : themed('color', bgColor)(currentTheme),
      position: 'relative',
      zIndex: 2,
      border: 'none',
      boxShadow: `0 0 0 ${rem(1)} ${color.beerus[100]} inset`,
      borderRadius: rem(radius.largest),
      transition: `box-shadow ${transitionDuration.default}s ease`,
      WebkitAppearance: 'none',
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box',
      },
      '&::placeholder': {
        color: color.trunks[100],
        opacity: 1,
        transition: `opacity ${transitionDuration.default}s ease`,
        transitionDelay: `0.1s`,
      },
      '&:hover:not(:focus):not([disabled]):not([readonly])': {
        boxShadow: `0 0 0 ${rem(2)} ${
          !error ? rgba(color.piccolo[100], 0.12) : color.chiChi[100]
        } inset`,
      },
      '&:focus:not([readonly])': {
        outline: 'none',
        boxShadow: `0 0 0 ${rem(2)} ${
          !error ? color.piccolo[100] : color.chiChi[100]
        } inset`,
      },
      '&:not(:placeholder-shown):not([type="date"]):not([type="datetime-local"]):invalid':
        {
          boxShadow: `0 0 0 ${rem(2)} ${color.chiChi[100]} inset`,
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
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(6),
      },
    },
    inputSize === Size.SMALL && {
      height: rem(48),
      lineHeight: rem(48),
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(10),
      },
    },
    inputSize === Size.MEDIUM && {
      height: rem(56),
      fontSize: rem(14),
      lineHeight: rem(56),
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(16),
      },
    },
    inputSize === Size.MEDIUM &&
      isLabel && {
        height: rem(56),
        paddingTop: rem(20),
        fontSize: rem(14),
        lineHeight: rem(20),
        '&:not(:focus):not([disabled])::placeholder': {
          opacity: 0,
        },
        '&:not(:focus):not([disabled]):placeholder-shown + label': {
          top: '50%',
          marginTop: rem(-7),
          fontSize: rem(14),
          lineHeight: rem(14),
        },
        '&::-webkit-datetime-edit': {
          lineHeight: rem(34),
        },
        '&::-webkit-date-and-time-value': {
          paddingTop: 0,
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
      boxShadow: `0 0 0 ${rem(2)} ${color.chiChi[100]} inset`,
    },
    isPassword && {
      paddingRight: rem(55),
    },
    type === 'number' && {
      MozAppearance: 'textfield',
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        opacity: 0,
      },
    },
  ]
);

export default Input;
