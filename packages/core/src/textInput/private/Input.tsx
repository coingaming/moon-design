import { ReactElement } from 'react';
import { SharedTheme, ColorProps } from '@heathmont/moon-themes';
import { rem, inlineSvg, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../../private/enums/Size';
import makeBorderRadius from './makeBorderRadius';
import TextInputSizeType from './types/SizeTypes';

type InlineSVGProps = ReactElement<string>;

type InputProps = {
  inputSize: TextInputSizeType | string;
  withIcon?: boolean;
  error?: boolean;
  icon?: InlineSVGProps;
  iconColor?: string;
  type?: string;
  bgColor?: ColorProps;
  isLabel?: boolean;
  isPassword?: boolean;
  isRtl?: boolean;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  isTopBottomBorderHidden?: boolean;
  isSideBorderHidden?: boolean;
};

const makeBorder = (
  border: SharedTheme['newTokens']['border'],
  isSideBorderHidden?: boolean,
  isTopBottomBorderHidden?: boolean,
  isSharpLeftSide?: boolean,
  isSharpRightSide?: boolean,
  isSharpTopSide?: boolean,
  isSharpBottomSide?: boolean,
  isError?: boolean
) => {
  const defaultWidth = `-${border.width.default}`;
  const insetValue = isError ? 4 : 2;
  if (isSideBorderHidden) {
    const rightInset = isSharpLeftSide ? 0 : insetValue;
    const leftInset = isSharpRightSide ? 0 : insetValue;
    return {
      '&:not(:hover):not(:focus)': {
        clipPath: `inset(${defaultWidth} ${rem(
          rightInset
        )} ${defaultWidth} ${rem(leftInset)})`,
      },
    };
  } else if (isTopBottomBorderHidden) {
    const bottomInset = isSharpTopSide ? 0 : insetValue;
    const topInset = isSharpBottomSide ? 0 : insetValue;
    return {
      '&:not(:hover):not(:focus)': {
        clipPath: `inset(${rem(topInset)} ${defaultWidth} ${rem(
          bottomInset
        )} ${defaultWidth})`,
      },
    };
  }
  return {};
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
    inputSize,
    error,
    icon,
    type,
    bgColor,
    isLabel,
    isPassword,
    isRtl,
    isSharpLeftSide,
    isSharpRightSide,
    isSharpTopSide,
    isSharpBottomSide,
    isTopBottomBorderHidden,
    isSideBorderHidden,
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
      color: colorNew.bulma,
      backgroundColor: !bgColor
        ? 'transparent'
        : themed('colorNew', bgColor)(currentTheme),
      position: 'relative',
      zIndex: 2,
      border: 'none',
      boxShadow: `0 0 0 ${border.width.default} ${colorNew.beerus} inset`,
      ...makeBorderRadius(
        borderRadius,
        isSharpLeftSide,
        isSharpRightSide,
        isSharpTopSide,
        isSharpBottomSide
      ),
      ...makeBorder(
        border,
        isSideBorderHidden,
        isTopBottomBorderHidden,
        isSharpLeftSide,
        isSharpRightSide,
        isSharpTopSide,
        isSharpBottomSide,
        error
      ),
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
        borderRadius: borderRadius.interactive.medium,
      },
      '&:focus:not([readonly])': {
        outline: 'none',
        borderRadius: borderRadius.interactive.medium,
        boxShadow: `0 0 0 ${border.width.interactive} ${
          !error ? colorNew.piccolo : colorNew.chiChi[100]
        } inset`,
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
        ...(isRtl && type === 'date'
          ? { position: 'absolute', right: rem(0) }
          : {}),
        ...(isRtl && type === 'time'
          ? { position: 'absolute', right: rem(8) }
          : {}),
        ...(isRtl && type === 'datetime-local'
          ? { position: 'absolute', right: rem(-16) }
          : {}),
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(8),
        ...(isRtl && type === 'date'
          ? { position: 'absolute', right: rem(0) }
          : {}),
        ...(isRtl && type === 'time'
          ? { position: 'absolute', right: rem(8) }
          : {}),
        ...(isRtl && type === 'datetime-local'
          ? { position: 'absolute', right: rem(-16) }
          : {}),
      },
      '&::-webkit-calendar-picker-indicator': {
        position: 'absolute',
        ...(isRtl && (type === 'date' || type === 'datetime-local')
          ? { left: rem(-8) }
          : { right: rem(14) }),
        ...(isRtl && type === 'time' ? { left: rem(8) } : { right: rem(14) }),
      },
    },
    inputSize === Size.LARGE && {
      height: rem(48),
      lineHeight: rem(48),
      '&::-webkit-datetime-edit': {
        height: rem(46),
        lineHeight: rem(46),
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(10),
      },
    },
    inputSize === Size.XLARGE && {
      height: rem(56),
      lineHeight: rem(56),
      '&::-webkit-datetime-edit': {
        height: rem(54),
        lineHeight: rem(54),
      },
      '&::-webkit-date-and-time-value': {
        paddingTop: rem(16),
      },
    },
    inputSize === Size.XLARGE &&
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
    icon && {
      paddingInlineEnd: rem(32),
      backgroundImage: inlineSvg(icon),
      backgroundPosition: isRtl
        ? `left ${rem(4)} center`
        : `right ${rem(4)} center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: rem(20),
    },

    error && {
      boxShadow: `0 0 0 ${border.width.interactive} ${colorNew.chiChi[100]} inset`,
    },
    isPassword && {
      paddingInlineEnd: rem(55),
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
