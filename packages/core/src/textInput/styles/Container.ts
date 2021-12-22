import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.div<{
  disabled?: boolean;
}>(({ theme, disabled }) => [
  {
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    borderRadius: rem(theme.radius.largest),
    zIndex: 0,
  },
  disabled && {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
]);

export default Container;
