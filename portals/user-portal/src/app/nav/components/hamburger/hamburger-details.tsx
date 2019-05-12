/** @jsx jsx */
import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconCaptionLogo } from '../logo/icon-caption-logo';
import { IconNotification } from '@heathmont/sportsbet-icons/lib/svg/IconNotification';
import { IconLiveChat } from '@heathmont/sportsbet-icons/lib/svg/IconLiveChat';
import { Link } from '@heathmont/sportsbet-components';
jsx;

const DetailsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(90),
});

type ItemProps = {
  active?: boolean;
};

const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
});

const activeCss: CSSObject = {
  color: colors.neutral[10],
  '&::before': {
    content: '""',
    height: spacing('large'),
    position: 'absolute',
    left: 0,
    width: '1px',
    borderRight: `${border.width * 4}px solid ${colors.brand}`,
    borderRadius: border.radius.small,
  },
};
const Item = styled.li<ItemProps>(({ active }) => [
  {
    marginLeft: spacing('medium'),
    marginTop: spacing('large'),
    fontSize: rem(20),
    color: colors.neutral[20],
    cursor: 'pointer',
    '&:hover': activeCss,
  },
  active && activeCss,
]);

const CenteredLogo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const column: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&:hover': {
    color: colors.neutral[10],
  },
};

const Balance = styled.p({
  color: colors.neutral[10],
  fontSize: rem(24),
  lineHeight: rem(30),
  '&:hover': {
    color: colors.neutral[10],
  },
});

export const HamburgerDetails = () => {
  return (
    <DetailsContainer>
      <CenteredLogo>
        <IconCaptionLogo />
        <p
          css={{
            fontSize: rem(16),
            color: colors.neutral[20],
            marginTop: spacing('small'),
          }}
        >
          Ivergletzeternateigh
        </p>
      </CenteredLogo>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: spacing('large'),
        }}
      >
        <Link css={column} href="#" optional>
          <Balance>1535.82</Balance>
          Balance
        </Link>
        <Link css={column} href="#" optional>
          <IconNotification css={{ fontSize: '1.5rem' }} />
          Notification
        </Link>
        <Link css={column} href="#" optional>
          <IconLiveChat css={{ fontSize: '1.5rem' }} />
          Live chat
        </Link>
      </div>
      <List>
        <Item active>Sports</Item>
        <Item>Casino</Item>
        <Item>E-sports</Item>
        <Item>Promo</Item>
        <Item>News</Item>
        <Item>About</Item>
        <Item>Support</Item>
      </List>
    </DetailsContainer>
  );
};
