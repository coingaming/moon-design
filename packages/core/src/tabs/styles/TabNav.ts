import rem from "polished/lib/helpers/rem";
import styled from 'styled-components';

const TabNav = styled.nav<{
  isContainer?: boolean,
  isVertical?: boolean
  isTop?: boolean
}>(({ theme, isContainer, isVertical, isTop }) => [
  {
    position: 'relative',
    width: '100%',
  },
  isContainer && {
    display: 'flex',
  },
  isVertical && {
    flexDirection: 'column',
    '& ul': {
      flexDirection: 'column',
      alignItems: isTop ? 'stretch' : 'flex-start',
      '& li': {
        marginLeft: 0,
        '& a': {
          '&::after': {
            bottom: 'initial',
            right: isTop ? 0 : 'initial',
            left: isTop ? 'initial' : 0,
            width: rem(2),
            height: '100%',
            transform: 'scaleY(0)',
            transition: `transform ${theme.newTokens.transition.default}`,
          },
          '&:focus, &:active, &.active, &[aria-current=page]': {
            '&:after': {
              transform: 'scaleY(1)',
            },
          },
        }
      }
    }
  }
]);

export default TabNav;
