import { ColorNew, ColorProps, SharedTheme } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
  isXLarge?: boolean;
  isError?: boolean;
  backgroundColor?: ColorProps;
}

const borderColor = (colorNew: ColorNew, isError?: boolean) => {
  return isError ? colorNew.chiChi[100] : colorNew.beerus;
};

const borderWidth = (
  newTokens: SharedTheme['newTokens'],
  isError?: boolean
) => {
  return isError
    ? newTokens.border.width.interactive
    : newTokens.border.width.default;
};

const Container = styled.div<Props>(
  ({
    orientation,
    isXLarge,
    isError,
    backgroundColor = 'gohan',
    theme: currentTheme,
    theme: { newTokens, colorNew },
  }) => [
    {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      border: 'none',
      backgroundColor: !backgroundColor
        ? 'transparent'
        : themed('colorNew', backgroundColor)(currentTheme),
      boxShadow: `0 0 0 ${borderWidth(newTokens, isError)} ${borderColor(
        colorNew,
        isError
      )} inset`,
      position: 'relative',
      borderRadius: newTokens.borderRadius.interactive.medium,
    },
    orientation === 'horizontal' && {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: isError ? rem(2) : rem(1),
        left: '50%',
        transform: 'translateX(-50%)',
        background: borderColor(colorNew, isError),
        zIndex: 3,
      },
      '&:hover, &:focus-within': {
        '&::after': {
          display: 'none',
        },
      },
    },
    isXLarge &&
      orientation === 'horizontal' && {
        padding: '0 1px',
      },
    orientation === 'vertical' && {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        bottom: 0,
        width: '100%',
        height: isError ? rem(2) : rem(1),
        left: 0,
        transform: 'translateY(-50%)',
        background: borderColor(colorNew, isError),
        zIndex: 3,
      },
      '&:hover, &:focus-within': {
        '&::after': {
          display: 'none',
        },
      },
    },
    isXLarge &&
      orientation === 'vertical' && {
        padding: '1px 0',
      },
  ]
);

export default Container;
