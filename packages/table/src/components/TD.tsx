import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const TD = styled.div<{ selectable?: boolean }>(({ theme, selectable }) => ({
  padding: rem(12),
  paddingLeft: selectable ? rem(12) : rem(4),
  paddingRight: rem(4),
  color: theme.colorNew.bulma,
  position: 'relative',
  borderTop: `${rem(4)} solid transparent`,
  borderBottom: `${rem(4)} solid transparent`,
  boxSizing: 'border-box',
  '&:first-child': {
    borderLeft: `${rem(4)} solid transparent`,
    borderTopLeftRadius: theme.newTokens.borderRadius.surface.small,
    borderBottomLeftRadius: theme.newTokens.borderRadius.surface.small,
  },
  '&:last-child': {
    borderRight: `${rem(4)} solid transparent`,
    borderTopRightRadius: theme.newTokens.borderRadius.surface.small,
    borderBottomRightRadius: theme.newTokens.borderRadius.surface.small,
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
