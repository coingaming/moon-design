import {rem} from '@heathmont/moon-utils';
import styled from 'styled-components';

const TD = styled.div<{ selectable?: boolean }>(({ theme, selectable }) => ({
  padding: `calc(${theme.newTokens.space.small} - ${rem(4)})`,
  paddingLeft: `calc(${selectable ? theme.newTokens.space.small : theme.newTokens.space.twoxsmall} - ${rem(4)})`,
  paddingRight: `calc(${theme.newTokens.space.twoxsmall} - ${rem(4)})`,
  color: theme.colorNew.bulma,
  position: 'relative',
  borderTop: `${rem(4)} solid transparent`,
  borderBottom: `${rem(4)} solid transparent`,
  boxSizing: 'border-box',
  '&:first-child': {
    borderLeft: `${rem(4)} solid transparent`,
    borderTopLeftRadius: theme.newTokens.borderRadius.medium,
    borderBottomLeftRadius: theme.newTokens.borderRadius.medium,
  },
  '&:last-child': {
    borderRight: `${rem(4)} solid transparent`,
    borderTopRightRadius: theme.newTokens.borderRadius.medium,
    borderBottomRightRadius: theme.newTokens.borderRadius.medium,
    '&::after': {
      width: 0,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '1px',
    backgroundColor: theme.colorNew.beerus,
    height: '60%',
    bottom: '20%',
    right: 0,
  },
}));

export default TD;
