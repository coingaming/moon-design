import styled from 'styled-components';

const TabNav = styled.nav<{ isContainer?: boolean }>(({ isContainer }) => [
  {
    position: 'relative',
    width: '100%',
  },
  isContainer && {
    display: 'flex',
  },
]);

export default TabNav;
