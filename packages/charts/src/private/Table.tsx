import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const Table = styled.table({
  width: '100%',
  height: '100%',
  tableLayout: 'auto',
});

export const Cell = styled.td<{
  wide?: boolean;
  align?: 'left' | 'center' | 'right';
}>(({ wide, align }) => ({
  padding: `${rem(4)} ${rem(16)} ${rem(4)} 0`,
  width: wide ? '100%' : 'auto',
  textAlign: align || 'left',
  '&:last-child': {
    paddingRight: 0,
  },
}));

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
