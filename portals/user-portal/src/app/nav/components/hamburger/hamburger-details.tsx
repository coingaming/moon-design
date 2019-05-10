/** @jsx jsx */
import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconCaptionLogo } from '../logo/icon-caption-logo';
jsx;

const DetailsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacing('large'),
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

export const HamburgerDetails = () => {
  return (
    <DetailsContainer>
      <CenteredLogo>
        <IconCaptionLogo />
        <p
          css={{
            fontSize: rem(16),
            color: colors.neutral[20],
          }}
        >
          Ivergletzeternateigh
        </p>
      </CenteredLogo>
      <div>
        <div>
          <p>1535.82</p>
          <p>Balance</p>
        </div>
        <div>
          Notification Icon
          <p>Notification</p>
        </div>
        <div>
          Live chat icon
          <p>Live chat</p>
        </div>
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
