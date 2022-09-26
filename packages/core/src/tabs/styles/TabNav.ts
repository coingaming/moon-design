import styled from 'styled-components';

const TabNav = styled.nav<{
  isContainer?: boolean;
  isVertical?: boolean;
  isTop?: boolean;
  isSegmented?: boolean;
}>(({ isContainer, isVertical, isTop }) => [
  {
    position: 'relative',
    width: '100%',
    display: isContainer ? 'flex' : 'block',
    '& ul': {
      position: 'relative',
      '& > div': {
        zIndex: 1,
      },
    },
  },
  isVertical && {
    flexDirection: 'column',
    '& ul': {
      flexDirection: 'column',
      alignItems: isTop ? 'stretch' : 'flex-start',
    },
  },
]);

export default TabNav;
