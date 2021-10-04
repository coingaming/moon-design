import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Menu = styled.ul(({ theme }) => ({
  width: '100%',
  overflowY: 'auto',
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  listStyle: 'none',
  padding: 0,
  left: 0,
  borderRadius: rem(theme.radius.default),
}));

export default Menu;
