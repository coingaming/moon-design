import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const TableChartItem = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'a b'
    'a c';
  grid-column-gap: ${rem(8)};
  & > * {
    &:nth-child(1) {
      grid-area: a;
      align-self: center;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
  }
`;

export default TableChartItem;
