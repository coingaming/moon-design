import styled from 'styled-components';
import { rem, mq } from '@heathmont/moon-utils';

const Container = styled.div<{
  isDivider?: boolean;
  size?: 'small' | 'medium';
}>(({ theme: { breakpoint, border, color }, isDivider, size }) => [
  {
    width: '100%',
    [mq(breakpoint.medium)]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row-reverse',
    },
  },
  size && {
    padding: size === 'small' ? rem(12) : rem(24),
  },
  isDivider && {
    padding: size === 'small' ? rem(12) : rem(24),
    borderTop: border,
    borderColor: color.beerus[100],
  },
]);

export default Container;
