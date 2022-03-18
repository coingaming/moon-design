import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface Props {
  orientation?: 'vertical' | 'horizontal';
}

const Container = styled.div<Props>(
  ({ orientation, theme: { newTokens, colorNew } }) => [
    {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      border: 'none',
      boxShadow: `0 0 0 ${newTokens.border.width.default} ${colorNew.beerus} inset`,
      position: 'relative',
      borderRadius: newTokens.borderRadius.large,
      padding: '0 1px',
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
        background: colorNew.beerus,
        zIndex: 3,
      },
      '&:hover, &:focus-within': {
        '&::after': {
          display: 'none',
        },
      },
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
  ]
);

export default Container;
