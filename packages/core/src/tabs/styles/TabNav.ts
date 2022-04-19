import {rgba} from "polished";
import rem from "polished/lib/helpers/rem";
import styled from 'styled-components';

const TabNav = styled.nav<{
  isContainer?: boolean,
  isVertical?: boolean
  isTop?: boolean
  isSegmented?: boolean
}>(({theme, isContainer, isVertical, isTop, isSegmented}) => [
  {
    position: 'relative',
    width: '100%',
    display: isContainer ? 'flex' : 'block',
    '& ul': {
      position: 'relative',
      '& > div': {
        zIndex: 1
      },
      '& li': {
        zIndex: 2,
        '&.active': {
          '& a': {
            '&.tab-link-fill': {
              backgroundColor: isSegmented ? theme.colorNew.goten : theme.colorNew.piccolo,
              color: isSegmented ? theme.colorNew.bulma : theme.colorNew.goten,
            },
            '&:not(.tab-link-fill):hover': {
              backgroundColor: 'transparent',
            },
            '&::after': {
              opacity: 1,
            },
          },
        },
        '& a': {
          '&:hover': {
            backgroundColor: isSegmented ? 'transparent' : rgba(theme.colorNew.piccolo, .12),
            borderRadius: rem(8),
            color: isSegmented ? theme.colorNew.bulma : theme.colorNew.piccolo,
          },
          '&::after': {
            opacity: 0,
            transition: `all ${theme.newTokens.transition.slow}`,
          }
        }
      }
    }
  },
  isVertical && {
    flexDirection: 'column',
    '& ul': {
      flexDirection: 'column',
      alignItems: isTop ? 'stretch' : 'flex-start',
      '& li': {
        marginLeft: 0,
        '& a::after': {
          bottom: 'initial',
          right: isTop ? 0 : 'initial',
          left: isTop ? 'initial' : 0,
          width: rem(2),
          height: '100%',
        }
      }
    }
  }
]);

export default TabNav;
