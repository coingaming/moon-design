import styled from 'styled-components';
import { rem, mq, themed } from '@heathmont/moon-utils';

const ToastContainer = styled.div<any>(
  ({ backgroundColor, theme, position }) => [
    {
      width: 'fit-content',
    },
    (position === 'bottom' || position === 'top') && {
      position: 'fixed',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: theme.zIndex.dialog,
      marginBottom: theme.space.default,
      minWidth: rem(180),
      maxWidth: `calc(100vw - ${theme.space.small * 2}px)`,
      [mq(theme.breakpoint.medium)]: {
        margin: theme.space.default,
      },
      [mq(theme.breakpoint.large)]: {
        maxWidth: '30%',
        width: 'fit-content',
        left: 0,
        transform: 'none',
      },
    },
    position === 'bottom' && {
      bottom: 0,
    },
    position === 'top' && {
      top: '10%',
    },
    {
      paddingTop: rem(12),
      paddingBottom: rem(12),
      paddingLeft: rem(theme.space.default),
      paddingRight: rem(theme.space.default),
      boxShadow:
        '0px 6.4px 14px 0px rgba(0,0,0,0.52), 0px 1.2px 3.6px 0px rgba(0,0,0,0.4)',
      backgroundColor:
        themed('color', backgroundColor)(theme) || theme.color.bulma[100],
      borderRadius: rem(12),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: rem(theme.space.default),
      },
    },
  ]
);

export default ToastContainer;
