import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Menu = styled.div(({ theme }) => ({
  width: '100%',
  overflowY: 'auto',
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  listStyle: 'none',
  padding: 0,
  left: 0,
  top: '100%',
  borderRadius: theme.newTokens.borderRadius.medium,
  boxShadow: theme.newTokens.boxShadow.large,
  marginTop: rem(8),
}));

export default Menu;
