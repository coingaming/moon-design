import styled from 'styled-components';

const SidebarList = styled.ul(({ theme: { colorNew } }) => ({
  gridArea: 'sidebar',
  background: colorNew.gohan,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
}));

export default SidebarList;
