import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const Container = styled.aside(({ theme: { colorNew } }) => ({
  background: colorNew.gohan,
  padding: rem(32),
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
