import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const Cell = styled.div<{
  wide?: boolean;
  align?: 'left' | 'center' | 'right';
  opacity?: number;
}>(({ wide, align, theme, opacity = 1 }) => ({
  padding: `${rem(4)} ${rem(8)}`,
  width: wide ? '100%' : 'auto',
  textAlign: align || 'left',
  position: 'relative',
  opacity,
  transition: `opacity ${theme.transitionDuration.slow}s ease`,
}));

export const Table = styled.div<{ withAdditionalCell?: boolean }>(
  ({ withAdditionalCell }) => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: withAdditionalCell
      ? 'auto auto 1fr auto'
      : 'auto 1fr auto',
    gridTemplateRows: 'repeat(5, 1fr)',
    justifyItems: 'stretch',
    alignItems: 'center',
    ...(withAdditionalCell
      ? {
          [Cell]: {
            '&:nth-child(4n  + 1)': {
              paddingLeft: 0,
            },
            '&:nth-child(4n)': {
              paddingRight: 0,
            },
            '&:nth-child(4n + 3)': {
              alignSelf: 'stretch',
              display: 'flex',
              alignItems: 'center',
            },
          },
        }
      : {
          [Cell]: {
            '&:nth-child(3n  + 1)': {
              paddingLeft: 0,
            },
            '&:nth-child(3n)': {
              paddingRight: 0,
            },
          },
        }),
  })
);

export const TableItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    marginLeft: rem(8),
    '&:first-child': {
      marginLeft: 0,
    },
  },
});

export const Count = styled.span(({ theme }) => ({
  fontSize: rem(12),
  lineHeight: rem(20),
  color: theme.color.trunks[100],
}));

export const Value = styled.div({
  whiteSpace: 'nowrap',
});
