import styled from "styled-components";
import { rem } from '@heathmont/moon-utils';

const TD = styled.div(
  ({ theme }) => ({
    padding: rem(theme.space.default),
    paddingLeft: rem(theme.space.small),
    paddingRight: rem(theme.space.small),
    color: theme.color.bulma[100],
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '1px',
      backgroundColor: theme.color.beerus[100],
      height: '60%',
      bottom: '20%',
      right: 0,
    },
    '&:first-child': {
      borderTopLeftRadius: theme.radius.default,
      borderBottomLeftRadius: theme.radius.default,
    },
    '&:last-child': {
      borderTopRightRadius: theme.radius.default,
      borderBottomRightRadius: theme.radius.default,
      '&::after': {
        width: 0,
      },
    }
  }),
);

export default TD