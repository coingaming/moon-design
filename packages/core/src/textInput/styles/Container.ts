import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.div<{
  disabled?: boolean;
}>(({ disabled }) => [
  {
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    zIndex: 0,
  },
  disabled && {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
]);

export default Container;
