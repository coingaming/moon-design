import { rem, mq, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      marginBottom: rem(16),
      minWidth: rem(180),
      maxWidth: `calc(100vw - ${rem(8)})`,
      [mq(theme.breakpoint.medium)]: {
        margin: rem(16),
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
      paddingLeft: rem(16),
      paddingRight: rem(16),
      boxShadow:
        '0px 6.4px 14px 0px rgba(0,0,0,0.52), 0px 1.2px 3.6px 0px rgba(0,0,0,0.4)',
      backgroundColor:
        themed('color', backgroundColor)(theme) || theme.colorNew.bulma,
      borderRadius: rem(12),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: rem(16),
      },
    },
  ]
);

export default ToastContainer;
