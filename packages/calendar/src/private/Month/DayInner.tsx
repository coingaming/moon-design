import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const DayInner = styled.div<{ isWeekend?: boolean }>(
  ({ theme: { space, color, colorNew }, isWeekend }) => ({
    backgroundColor: isWeekend ? color.gohan[80] : colorNew.gohan,
    minHeight: '100%',
    width: '100%',
    padding: rem(space.default),
    display: 'flex',
    flexDirection: 'column',
  })
);
