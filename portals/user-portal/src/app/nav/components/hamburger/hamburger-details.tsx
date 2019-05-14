/** @jsx jsx */
import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconNotification } from '@heathmont/sportsbet-icons/lib/svg/IconNotification';
import { IconLiveChat } from '@heathmont/sportsbet-icons/lib/svg/IconLiveChat';
import { Link, Select } from '@heathmont/sportsbet-components';
import { IconCaptionLogo } from '../logo/icon-caption-logo';
import { IconFacebook } from '../logo/IconFacebook';
import { IconGoogle } from '../logo/IconGoogle';
import { IconTelegram } from '../logo/IconTelegram';
import { IconTwitter } from '../logo/IconTwitter';
jsx;

const DetailsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(90),
  marginLeft: spacing('large'),
  marginRight: spacing('large'),
});

type ItemProps = {
  active?: boolean;
};

const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  marginLeft: 0,
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
  // marginBottom: spacing('small'),
  '&:hover': {
    color: colors.neutral[10],
  },
});

const Username = styled.p({
  fontSize: rem(16),
  color: colors.neutral[20],
  marginTop: spacing('small'),
});

const Icon = styled.div({
  height: rem(40),
  width: rem(40),
  border: `${border.width}px solid ${colors.neutral[65]}`,
  borderRadius: border.radius.small,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginRight: spacing('small'),
  fontSize: rem(20),
  '&:hover': {
    border: `${border.width}px solid ${colors.neutral[20]}`,
  },
});

export const HamburgerDetails = () => {
  return (
    <DetailsContainer>
      <CenteredLogo>
        <IconCaptionLogo />
        <Username>Ivergletzeternateigh</Username>
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
          <IconNotification
            css={{ fontSize: '1.5rem', marginBottom: spacing('small') }}
          />
          Notification
        </Link>
        <Link css={column} href="#" optional>
          <IconLiveChat
            css={{ fontSize: '1.5rem', marginBottom: spacing('small') }}
          />
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

      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: spacing('xlarge'),
          flexWrap: 'nowrap',
        }}
      >
        <Select>
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
        </Select>
        <Select css={{ marginTop: spacing() }}>
          <option value="decimal">Decimal</option>
          <option value="american">American</option>
          <option value="hong-kong">Hong Kong</option>
        </Select>
      </div>
      <div css={{ marginTop: spacing('large') }}>
        <p css={{ color: colors.neutral[20] }}>Follow us</p>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: spacing(),
          }}
        >
          <Icon>
            <IconFacebook />
          </Icon>

          <Icon>
            <IconGoogle />
          </Icon>

          <Icon>
            <IconTelegram />
          </Icon>

          <Icon>
            <IconTwitter />
          </Icon>
        </div>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: spacing('large'),
        }}
      >
        <img
          style={{
            width: rem(42),
            height: rem(42),
            marginRight: spacing(),
          }}
          src="/assets/img/curacao.png"
          alt="Curaçao eGaming License"
        />
        <p css={{ color: colors.neutral[20] }}>Curaçao eGaming License</p>
      </div>
      <p
        css={{
          color: colors.neutral[20],
          fontSize: rem(12),
          marginTop: spacing('large'),
        }}
      >
        © All rights reserved.
      </p>
    </DetailsContainer>
  );
};
