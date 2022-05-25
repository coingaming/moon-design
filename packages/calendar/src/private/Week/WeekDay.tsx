import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const WeekDay = styled.div<{ isWeekend?: boolean }>(
  ({ theme: { color, colorNew, newTokens }, isWeekend }) => ({
    backgroundColor: isWeekend ? color.gohan[80] : colorNew.gohan,
    padding: rem(16),
    border: `1px solid ${colorNew.goku}`,
    boxSizing: 'border-box',
    borderRadius: newTokens.borderRadius.surface.small,
    display: 'flex',
    flexDirection: 'column',
  })
);
