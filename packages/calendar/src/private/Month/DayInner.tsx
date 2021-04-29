import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const DayInner = styled.div<{ isWeekend?: boolean }>(
  ({ theme: { space, color }, isWeekend }) => ({
    backgroundColor: isWeekend ? color.gohan[80] : color.gohan[100],
    minHeight: '100%',
    width: '100%',
    padding: rem(space.default),
    display: 'flex',
    flexDirection: 'column',
  })
);
