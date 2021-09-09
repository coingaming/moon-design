import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const WeekDay = styled.div<{ isWeekend?: boolean }>(
  ({ theme: { space, color, radius }, isWeekend }) => ({
    backgroundColor: isWeekend ? color.gohan[80] : color.gohan[100],
    padding: rem(space.default),
    border: `1px solid ${color.goku[100]}`,
    boxSizing: 'border-box',
    borderRadius: rem(radius.default),
    display: 'flex',
    flexDirection: 'column',
  })
);
