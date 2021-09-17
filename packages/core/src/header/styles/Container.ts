import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.div<{ isDivider?: boolean }>(
  ({ theme: { color, fontWeight, border }, isDivider }) => [
    {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      fontSize: rem(18),
      lineHeight: rem(24),
      color: color.bulma[100],
      fontWeight: fontWeight.semibold,
    },
    isDivider && {
      padding: `${rem(24)} ${rem(16)}`,
      borderBottom: border,
      borderColor: color.beerus[100],
    },
  ]
);

export default Container;
