import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.div<{ isDivider?: boolean }>(
  ({ theme: { color, colorNew, fontWeight, border }, isDivider }) => [
    {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      fontSize: rem(18),
      lineHeight: rem(24),
      color: colorNew.bulma,
      fontWeight: fontWeight.semibold,
    },
    isDivider && {
      padding: `${rem(24)} ${rem(16)}`,
      borderBottom: border,
      borderColor: colorNew.beerus,
    },
  ]
);

export default Container;
