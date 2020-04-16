import * as React from 'react';
import { IconError, IconClose, IconWarning } from '@heathmont/sportsbet-assets';
import { rem, mq } from '@heathmont/sportsbet-utils';
import styled from 'styled-components';

type BannerProps = {
  message: any;
  isOpen?: boolean;
  action?: any;
  autoHideDuration?: number; // ms
  onDismiss?: any;
  status: 'error' | 'warning';
  position: 'bottom';
  isCloseable?: boolean;
};

const BannerWrapper = styled.div<any>(
  ({
    theme: { color, space, zIndex, breakpoint },
    isCloseable,
    position = true,
  }) => [
    position === 'bottom' && {
      position: 'fixed',
      left: 0,
      bottom: 0,
      zIndex: zIndex.dialog,
      margin: space.default,
    },
    {
      minWidth: rem(280),
      width: `calc(100% - ${space.default * 2})`,
      [mq(breakpoint.medium)]: {
        width: 'fit-content',
      },
      padding: `${space.default}px ${rem(12)}`,
      backgroundColor: color.hit[100],
      borderRadius: rem(12),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      'P,  SPAN': {
        fontSize: rem(14),
        lineHeight: rem(20),
      },
    },
    isCloseable
      ? {
          justifyContent: 'space-between',
          '& > * + *': {
            marginLeft: space.default,
          },
        }
      : { justifyContent: 'center' },
  ]
);

const IconWrapper = styled.div({
  marginRight: rem(8),
});

const IconCloseWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.color.goku[100],
  borderRadius: theme.radius.largest,
  marginLeft: rem(20),
  cursor: 'pointer',
  width: rem(24),
  height: rem(24),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Banner: React.FC<BannerProps> = ({
  message,
  onDismiss,
  isOpen = true,
  status,
  isCloseable = true,
  position,
}) => {
  const [visible, setVisible] = React.useState(isOpen);

  if (!visible) {
    return null;
  }

  return (
    <BannerWrapper position={position}>
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
      {message && message}
      {isCloseable && (
        <IconCloseWrapper
          onClick={() => {
            if (onDismiss && typeof onDismiss === 'function') {
              onDismiss();
            }
            setVisible(false);
          }}
        >
          <IconClose fontSize="1rem" color="trunks.100" />
        </IconCloseWrapper>
      )}
    </BannerWrapper>
  );
};

export { BannerProps };

export default Banner;
