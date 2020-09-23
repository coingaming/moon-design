import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const Day = styled.div(({ theme: { radius } }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  overflow: 'hidden',
  '&:nth-child(8)': {
    borderTopLeftRadius: rem(radius.default),
  },
  '&:nth-child(14)': {
    borderTopRightRadius: rem(radius.default),
  },
  '&:nth-last-child(7)': {
    borderBottomLeftRadius: rem(radius.default),
  },
  '&:last-child': {
    borderBottomRightRadius: rem(radius.default),
  },
  '&::before': {
    content: '""',
    display: 'block',
    paddingTop: '100%',
  },
}));

export const Month = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
`;

export const WeekDayName = styled.div(({ theme: { space } }) => ({
  textAlign: 'center',
  padding: rem(space.xsmall),
}));

export const DayInner = styled.div(({ theme: { space, color } }) => ({
  backgroundColor: color.gohan[100],
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  padding: rem(space.default),
  overflow: 'hidden',
}));

export const DayNumber = styled.div`
  text-align: right;
`;

export const DayContent = styled.div``;
