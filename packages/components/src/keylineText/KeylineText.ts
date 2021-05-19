import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const KeylineText = styled.p(
  ({ theme: { borderWidth, color, space } }) => ({
    display: 'flex',
    color: color.bulma[100],
    width: '100%',
    alignItems: 'center',
    textTransform: 'uppercase',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      width: '100%',
      flex: '0 1 auto',
      height: borderWidth,
      backgroundColor: color.beerus[100],
      whiteSpace: 'nowrap',
    },
    '&::before': {
      marginRight: rem(space.medium),
    },
    '&::after': {
      marginLeft: rem(space.medium),
    },
  }),
);

export default KeylineText;
