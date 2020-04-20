import * as React from 'react';
import {
  IconError,
  IconCloseSmall,
  IconWarning,
  IconBannerInfo,
} from '@heathmont/sportsbet-assets';
import { rem } from '@heathmont/sportsbet-utils';
import styled from 'styled-components';

type BannerProps = {
  message: any;
  isOpen?: boolean;
  action?: any;
  onDismiss?: any;
  status: 'error' | 'warning' | 'info';
  isCloseable?: boolean;
};

const BannerWrapper = styled.div<any>(({ theme: { color, space } }) => ({
  minWidth: rem(280),
  width: '100%',
  padding: `${space.default}px ${rem(12)}`,
  backgroundColor: color.hit[100],
  borderRadius: rem(12),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  '& > * + *': {
    marginLeft: rem(12),
  },
  alignItems: 'center',
  'P,  SPAN': {
    fontSize: rem(14),
    lineHeight: rem(20),
    margin: 0,
  },
}));

const IconWrapper = styled.div({
  marginRight: rem(8),
});

const IconCloseWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.color.goku[100],
  borderRadius: theme.radius.largest,
  marginLeft: 'auto',
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
  isCloseable = false,
}) => {
  const [visible, setVisible] = React.useState(isOpen);

  if (!visible) {
    return null;
  }

  return (
    <BannerWrapper>
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
          <IconCloseSmall fontSize="1rem" color="trunks.100" />
        </IconCloseWrapper>
      )}
    </BannerWrapper>
  );
};

export { BannerProps };

export default Banner;
