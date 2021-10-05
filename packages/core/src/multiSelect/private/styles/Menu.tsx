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
  borderBottom: `${rem(1)} solid ${theme.color.trunks[100]}`,
  borderLeft: `${rem(1)} solid ${theme.color.trunks[100]}`,
  borderRight: `${rem(1)} solid ${theme.color.trunks[100]}`,
  borderRadius: rem(theme.radius.default),
  boxShadow: theme.boxShadow,
}));

export default Menu;
