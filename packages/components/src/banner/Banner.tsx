import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

import IconBannerInfo from '../private/icons/IconBannerInfo';
import IconCloseSmall from '../private/icons/IconCloseSmall';
import IconError from '../private/icons/IconError';
import IconWarning from '../private/icons/IconWarning';

type BannerProps = {
  message: any;
  status: 'error' | 'warning' | 'info';
  onClose?: any;
  isCloseable?: boolean;
};

const BannerWrapper = styled.div<any>(({ theme: { color, space } }) => ({
  minWidth: rem(280),
  width: '100%',
  padding: `${space.default}px ${rem(12)}`,
  backgroundColor: color.gohan[100],
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
  borderRadius: rem(theme.radius.largest),
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
  onClose,
  status,
  isCloseable = false,
}) => {
  const [visible, setVisible] = React.useState(true);

  const closeBanner = () => setVisible(false);

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
            if (onClose && typeof onClose === 'function') {
              onClose();
            }
            closeBanner();
          }}
        >
          <IconCloseSmall fontSize="1rem" color="trunks.100" />
        </IconCloseWrapper>
      )}
    </BannerWrapper>
  );
};

export type { BannerProps };

export default Banner;
