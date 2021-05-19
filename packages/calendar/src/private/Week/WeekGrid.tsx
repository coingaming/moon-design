import styled from 'styled-components';

import { getGridTemplateColumns } from '../getGridTemplateColumns';

export const WeekGrid = styled.div<{
  weekStartsOn: number;
  isWeekendMinimized: boolean;
}>(
  ({ weekStartsOn, isWeekendMinimized }) => `
  height: 100%;
  display: grid;
  grid-template-columns: ${getGridTemplateColumns({
    weekStartsOn,
    isWeekendMinimized,
  })};
  grid-template-rows: auto 1fr;
`,
);
