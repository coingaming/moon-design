import React from 'react';
import { rem, mq } from '@heathmont/moon-utils';
import styled from 'styled-components';

import IconError from '../private/icons/IconError';
import IconWarning from '../private/icons/IconWarning';
import IconBannerInfo from '../private/icons/IconBannerInfo';
import IconSnackbarSuccess from '../private/icons/IconSnackbarSuccess';
import IconCloseSmall from '../private/icons/IconCloseSmall';

type SnackbarProps = {
  message: any;
  alwaysVisible?: boolean;
  action?: any;
  timeout?: number; // ms
  position?: 'bottom' | 'top' | 'inline';
  status?: 'error' | 'warning' | 'info' | 'success';
  onClose?: any;
  isCloseable?: boolean;
};

const SnackbarWrapper = styled.div<any>(
  ({ theme: { color, space, zIndex, breakpoint }, position }) => [
    { width: 'fit-content' },
    (position === 'bottom' || position === 'top') && {
      position: 'fixed',
      left: '50%',
      display: 'flex',
      flexDirection: 'row',
      gap: rem(space.default),
      transform: 'translate(-50%, 0)',
      zIndex: zIndex.dialog,
      marginBottom: space.default,
      minWidth: rem(180),
      maxWidth: `calc(100vw - ${space.default * 2}px)`,
      [mq(breakpoint.medium)]: {
        margin: space.default,
      },
      [mq(breakpoint.large)]: {
        maxWidth: '20vw',
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
      padding: space.default,
      backgroundColor: color.bulma[100],
      borderRadius: rem(12),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: space.default,
      },
    },
  ]
);

const MessageWrapper = styled.p(({ theme }) => ({
  fontSize: rem(14),
  lineHeight: 1.25,
  color: theme.color.hit[100],
  margin: 0,
}));

const IconWrapper = styled.div({
  marginRight: rem(8),
});

const IconCloseWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.color.goku[100],
  borderRadius: theme.radius.largest,
  marginLeft: 'auto',
  cursor: 'pointer',
  minWidth: rem(24),
  minHeight: rem(24),
  maxWidth: rem(24),
  maxHeight: rem(24),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  action,
  position = 'bottom',
  status,
  isCloseable,
  onClose,
}) => {
  return (
    <SnackbarWrapper position={position}>
      {status === 'error' && (
        <IconWrapper>
          <IconError fontSize="1.5rem" />
        </IconWrapper>
      )}
      {status === 'warning' && (
        <IconWrapper>
          <IconWarning fontSize="1.5rem" color="krillin.100" />
        </IconWrapper>
      )}
      {status === 'info' && (
        <IconWrapper>
          <IconBannerInfo fontSize="1.5rem" color="krillin.100" />
        </IconWrapper>
      )}
      {status === 'success' && (
        <IconWrapper>
          <IconSnackbarSuccess fontSize="1.5rem" color="krillin.100" />
        </IconWrapper>
      )}
      {message && <MessageWrapper>{message}</MessageWrapper>}
      {action && action}
      {isCloseable && (
        <IconCloseWrapper
          onClick={() => {
            if (onClose && typeof onClose === 'function') {
              onClose();
            }
          }}
        >
          <IconCloseSmall fontSize="1rem" color="trunks.100" />
        </IconCloseWrapper>
      )}
    </SnackbarWrapper>
  );
};

export { SnackbarProps };

export default Snackbar;
