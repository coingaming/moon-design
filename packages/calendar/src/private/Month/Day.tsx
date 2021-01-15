import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const Day = styled.div(({ theme: { radius } }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  border: '1px solid transparent',
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
