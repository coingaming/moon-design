import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconCaptionLogo } from '../logo/icon-caption-logo';

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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const HamburgerDetails = () => {
  return (
    <DetailsContainer>
      <CenteredLogo>
        <IconCaptionLogo />
      </CenteredLogo>
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
