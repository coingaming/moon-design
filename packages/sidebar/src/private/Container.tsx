import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const Container = styled.aside(({ theme: { color, space } }) => ({
  background: color.gohan[100],
  padding: rem(space.large),
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));
