import { rem, media } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.div<{
  isDivider?: boolean;
  size?: 'small' | 'medium';
}>(({ theme: { newTokens, border, colorNew }, isDivider, size }) => [
  {
    width: '100%',
    [media(newTokens.breakpoint.medium)]: {
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
    borderColor: colorNew.beerus,
  },
]);

export default Container;
