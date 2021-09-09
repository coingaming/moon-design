import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import Caption from '../caption/Caption';

const KeylineText = styled(Caption)<any>(
  ({ theme: { borderWidth, color, space } }) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    color: color.trunks[100],
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      width: '100%',
      flex: '0 1 auto',
      height: borderWidth,
      backgroundColor: color.beerus[100],
    },
    '&::before': {
      marginRight: rem(space.small),
    },
    '&::after': {
      marginLeft: rem(space.small),
    },
  })
);

export default KeylineText;
