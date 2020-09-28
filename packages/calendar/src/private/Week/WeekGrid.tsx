import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const WeekGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  grid-template-rows: ${rem(24)} auto;
`;
