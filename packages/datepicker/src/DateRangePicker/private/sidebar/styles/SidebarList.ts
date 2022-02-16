import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SidebarList = styled.ul(({ theme: { colorNew } }) => ({
  gridArea: 'sidebar',
  background: colorNew.gohan,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  minWidth: rem(100),
}));

export default SidebarList;
