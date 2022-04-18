import {rgba} from "polished";
import rem from "polished/lib/helpers/rem";
import styled from 'styled-components';

const TabNav = styled.nav<{
  isContainer?: boolean,
  isVertical?: boolean
  isTop?: boolean
  isSegmented?: boolean
}>(({ theme, isContainer, isVertical, isTop, isSegmented }) => [
  {
    position: 'relative',
    width: '100%',
    '& li': {
      '&.active': {
        '& a': {
          '&.tab-link-fill': {
            backgroundColor: theme.colorNew.piccolo,
            color: theme.colorNew.goten,
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
          backgroundColor: rgba(theme.colorNew.piccolo, .12),
          borderRadius: rem(8),
          color: theme.colorNew.piccolo,
        },
        '&::after': {
          opacity: 0,
          transition: `all ${theme.newTokens.transition.slow}`,
        }
      }
    }
  },
  isContainer && {
    display: 'flex',
  },
  isSegmented && {
    '& li': {
      '&.active': {
        '& a': {
          '&.tab-link-fill': {
            backgroundColor: theme.colorNew.goten,
            color: theme.colorNew.bulma,
            border: 'none',
          },
          '&:hover': {
            backgroundColor: theme.colorNew.gohan,
            color: theme.colorNew.bulma
          },
          '&::after': {
            opacity: 1,
          },
        },
      },
      '& a': {
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.colorNew.bulma
        },
      }
    },
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
