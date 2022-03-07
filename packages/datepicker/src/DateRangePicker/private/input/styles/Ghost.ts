import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Ghost = styled.div(
  ({
    theme: {
      colorNew,
      newTokens: { transition },
    },
  }) => ({
    position: 'absolute',
    top: rem(1),
    bottom: rem(1),
    width: rem(1),
    background: colorNew.gohan,
    zIndex: 3,
    transition: `opacity ${transition.default}`,
  })
);

export default Ghost;
