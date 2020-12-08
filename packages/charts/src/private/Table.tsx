import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const Cell = styled.td<{
  wide?: boolean;
  align?: 'left' | 'center' | 'right';
}>(({ wide, align }) => ({
  padding: `${rem(4)} ${rem(8)}`,
  width: wide ? '100%' : 'auto',
  textAlign: align || 'left',
  position: 'relative',
  '&:first-child': {
    paddingLeft: 0,
  },
  '&:last-child': {
    paddingRight: 0,
  },
}));

export const Row = styled.tr(({ theme }) => ({
  transition: `opacity ${theme.transitionDuration.slow}s ease`,
}));

export const Table = styled.table<{ isAutoSize?: boolean }>(
  ({ isAutoSize }) => ({
    width: '100%',
    height: isAutoSize ? 'auto' : '100%',
    tableLayout: 'auto',
    ...(isAutoSize && {
      [Cell]: {
        padding: `${rem(16)} ${rem(8)}`,
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
