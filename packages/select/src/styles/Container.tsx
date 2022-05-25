import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
  isXLarge?: boolean;
  backgroundColor?: ColorProps;
}

const Container = styled.div<Props>(
  ({
    orientation,
    isXLarge,
    backgroundColor = 'gohan',
    theme: currentTheme,
    theme: { newTokens, colorNew },
  }) => [
    {
      display: 'flex',
      width: '100%',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      border: 'none',
      boxShadow: `0 0 0 ${newTokens.border.width.default} ${colorNew.beerus} inset`,
      position: 'relative',
      borderRadius: newTokens.borderRadius.surface.medium,
      backgroundColor: !backgroundColor
        ? 'transparent'
        : themed('colorNew', backgroundColor)(currentTheme),
    },
    orientation === 'horizontal' && {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: rem(1),
        left: '50%',
        transform: 'translateX(-50%)',
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
        height: rem(1),
        left: 0,
        transform: 'translateY(-50%)',
        background: colorNew.beerus,
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
