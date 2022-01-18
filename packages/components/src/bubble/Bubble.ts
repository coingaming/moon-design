import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Bubble = styled.div<{ position?: string }>(({ theme }) => [
  {
    display: 'inline-block',
    textAlign: 'right',
    color: theme.color.goten[100],
    background: theme.color.hit[100],
    fontSize: rem(12),
    lineHeight: rem(16),
    padding: rem(12),
    borderRadius: rem(4),
    position: 'relative',
    boxShadow: theme.boxShadow,

    '&::after': {
      content: '""',
      borderColor: 'transparent',
      borderTopColor: theme.color.hit[100],
      borderWidth: rem(8),
      borderBottomWidth: 0,
      borderStyle: 'solid',
      width: 0,
      height: 0,
      position: 'absolute',
      top: '100%',
      right: rem(12),
      marginTop: `-${rem(1)}`,
    },
  },
  ({ position }) =>
    position === 'bottom' && {
      '&::after': {
        top: 'initial',
        marginTop: 0,
        borderBottomWidth: rem(8),
        bottom: '100%',
        marginBottom: `-${rem(1)}`,
        borderTopWidth: 0,
        borderBottomColor: theme.color.hit[100],
      },
    },
]);

export default Bubble;
