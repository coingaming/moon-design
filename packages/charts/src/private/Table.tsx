import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  height: 100%;
  table-layout: auto;
`;

export const Cell = styled.td<{ wide?: boolean; align?: string }>(
  ({ wide, align }) => `
  padding: ${rem(4)} ${rem(16)} ${rem(4)} 0;
  width: ${wide ? '100%' : 'auto'};
  text-align: ${align || 'left'};
  &:last-child {
    padding-right: 0;
  }
`
);

export const Count = styled.span(
  ({ theme }) => `
  font-size: ${rem(12)};
  line-height: ${rem(20)};
  color: ${theme.color.trunks[100]}
`
);
