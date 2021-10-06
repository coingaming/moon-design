import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Tooltip = styled.div<{ position?: string }>(({ theme }) => [
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
    boxShadow: theme.shadows.sm,
    // '&::after': {
    //   content: '""',
    //   borderColor: 'transparent',
    //   borderTopColor: theme.color.hit[100],
    //   borderWidth: rem(8),
    //   borderBottomWidth: 0,
    //   borderStyle: 'solid',
    //   width: 0,
    //   height: 0,
    //   position: 'absolute',
    //   top: '100%',
    //   left: rem(12),
    //   marginTop: `-${rem(1)}`,
    //   // boxShadow: theme.shadows.sm,
    // },
  },
  // ({ position }) =>
  //   position === 'bottom' && {
  //     '&::after': {
  //       top: 'initial',
  //       marginTop: 0,
  //       borderBottomWidth: rem(8),
  //       bottom: '100%',
  //       marginBottom: `-${rem(1)}`,
  //       borderTopWidth: 0,
  //       borderBottomColor: theme.color.hit[100],
  //       // boxShadow: theme.shadows.sm,
  //     },
  //   },
]);

export default Tooltip;
