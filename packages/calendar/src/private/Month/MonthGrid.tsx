import styled from 'styled-components';

import { getGridTemplateColumns } from '../getGridTemplateColumns';

export const MonthGrid = styled.div<{
  weekStartsOn: number;
  isWeekendMinimized: boolean;
}>(
  ({ weekStartsOn, isWeekendMinimized }) => `
  display: grid;
  grid-template-columns: ${getGridTemplateColumns({
    weekStartsOn,
    isWeekendMinimized,
  })};
`,
);
