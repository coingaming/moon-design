import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const DayInner = styled.div<{ isWeekend?: boolean }>(
  ({ theme: { color, colorNew }, isWeekend }) => ({
    backgroundColor: isWeekend ? color.gohan[80] : colorNew.gohan,
    minHeight: '100%',
    width: '100%',
    padding: rem(16),
    display: 'flex',
    flexDirection: 'column',
  })
);
