import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const Container = styled.aside(({ theme: { colorNew, space } }) => ({
  background: colorNew.gohan,
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
