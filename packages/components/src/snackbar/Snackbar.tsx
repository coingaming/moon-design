import React from 'react';
import { rem, mq } from '@heathmont/moon-utils';
import styled from 'styled-components';

import IconError from '../private/icons/IconError';
import IconWarning from '../private/icons/IconWarning';
import IconBannerInfo from '../private/icons/IconBannerInfo';
import IconSnackbarSuccess from '../private/icons/IconSnackbarSuccess';

type SnackbarWrapperProps = {
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  position?: 'bottom' | 'top' | 'inline';
  maxWidth?: string;
};

type SnackbarProps = SnackbarWrapperProps & {
  message: any;
  alwaysVisible?: boolean;
  action?: any;
  timeout?: number; // ms
  status?: 'error' | 'warning' | 'info' | 'success';
  onClose?: any;
};

const SnackbarWrapper = styled.div<SnackbarWrapperProps>(
  ({
    theme: {
      color, space, zIndex, breakpoint,
    },
    position,
    justifyContent,
    maxWidth,
  }) => [
    { width: 'fit-content' },
    (position === 'bottom' || position === 'top') && {
      position: 'fixed',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: zIndex.dialog,
      marginBottom: space.default,
      minWidth: rem(180),
      maxWidth: maxWidth || `calc(100vw - ${space.default * 2}px)`,
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
    justifyContent && {
      justifyContent,
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
  ],
);

const MessageWrapper = styled.p(({ theme }) => [
  {
    fontSize: rem(14),
    lineHeight: 1.25,
    color: theme.color.hit[100],
    margin: 0,
  },
]);

const IconWrapper = styled.div({
  marginRight: rem(8),
});

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  action,
  position = 'bottom',
  status,
  justifyContent,
  maxWidth,
}) => (
    <SnackbarWrapper position={position} justifyContent={justifyContent} maxWidth={maxWidth}>
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
    </SnackbarWrapper>
);

export type { SnackbarProps };

export default Snackbar;
