import * as React from 'react';
import { rem, mq } from '@heathmont/sportsbet-utils';
import styled from 'styled-components';
import {
  IconError,
  IconWarning,
  IconBannerInfo,
  IconSnackbarSuccess,
} from '@heathmont/sportsbet-assets';

type SnackbarProps = {
  message: any;
  isOpen?: boolean;
  action?: any;
  autoHideDuration?: number; // ms
  position?: 'bottom' | 'top';
  status: 'error' | 'warning' | 'info' | 'success';
  onClose?: any;
};

const SnackbarWrapper = styled.div<any>(
  ({ theme: { color, space, zIndex, breakpoint }, position }) => [
    { width: 'fit-content' },

    position && {
      position: 'fixed',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: zIndex.dialog,
      margin: space.default,
      maxWidth: `calc(100vw - ${space.default * 2}px)`,
      [mq(breakpoint.large)]: {
        maxWidth: '50vw',
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
      'P,  SPAN': {
        fontSize: rem(14),
        lineHeight: 1.25,
        color: color.hit[100],
        margin: 0,
      },
      '& > * + *': {
        marginLeft: space.default,
      },
    },
  ]
);

const IconWrapper = styled.div({
  marginRight: rem(8),
});

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  action,
  autoHideDuration,
  position,
  onClose,
  status,
  isOpen = true,
}) => {
  const [visible, setVisible] = React.useState(isOpen);

  if (!visible) {
    return null;
  }

  autoHideDuration &&
    setTimeout(() => {
      if (onClose && typeof onClose === 'function') {
        onClose();
      }
      setVisible(false);
    }, autoHideDuration);

  return (
    <SnackbarWrapper isActionExist={!!action} position={position}>
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
      {message && message}
      {action && action}
    </SnackbarWrapper>
  );
};

export { SnackbarProps };

export default Snackbar;
