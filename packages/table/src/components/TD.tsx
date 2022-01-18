import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const TD = styled.div(({ theme }) => ({
  padding: rem(theme.space.default),
  paddingLeft: rem(theme.space.small),
  paddingRight: rem(theme.space.small),
  color: theme.color.bulma[100],
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '1px',
    backgroundColor: theme.colorNew.beerus,
    height: '60%',
    bottom: '20%',
    right: 0,
  },
  '&:first-child': {
    borderTopLeftRadius: rem(theme.radius.default),
    borderBottomLeftRadius: rem(theme.radius.default),
  },
  '&:last-child': {
    borderTopRightRadius: rem(theme.radius.default),
    borderBottomRightRadius: rem(theme.radius.default),
    '&::after': {
      width: 0,
    },
  },
}));

export default TD;
