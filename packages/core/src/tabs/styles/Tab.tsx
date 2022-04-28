import {rem} from "@heathmont/moon-utils";
import {rgba} from "polished";
import styled from "styled-components";

const Tab = styled.li<{
  isVertical?: boolean
  isTop?: boolean
  isSegmented?: boolean
}>(({theme, isVertical, isTop, isSegmented}) => ([
  {
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
        transition: `all ${theme.newTokens.transition.default}s`,
      }
    }
  },
  isVertical && {
    marginLeft: 0,
    '& a::after': {
      bottom: 'initial',
      right: isTop ? 0 : 'initial',
      left: isTop ? 'initial' : 0,
      width: rem(2),
      height: '100%',
    }
  }
]));

export default Tab;
