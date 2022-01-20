import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const WeekDay = styled.div<{ isWeekend?: boolean }>(
  ({ theme: { space, color, colorNew, radius }, isWeekend }) => ({
    backgroundColor: isWeekend ? color.gohan[80] : colorNew.gohan,
    padding: rem(space.default),
    border: `1px solid ${colorNew.goku}`,
    boxSizing: 'border-box',
    borderRadius: rem(radius.default),
    display: 'flex',
    flexDirection: 'column',
  })
);
