import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

const Container = styled.div<{
  disabled?: boolean;
}>(({ theme, disabled }) => [
  {
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    borderRadius: rem(theme.radius.largest),
  },
  disabled && {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
]);

export default Container;
