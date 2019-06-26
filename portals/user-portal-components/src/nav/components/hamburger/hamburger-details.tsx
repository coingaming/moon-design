/** @jsx jsx */
import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { Link } from '@heathmont/sportsbet-components';

jsx;

export const DetailsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(90),
  marginLeft: spacing('large'),
  marginRight: spacing('large'),
});

type ItemProps = {
  active?: boolean;
};

export const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  marginLeft: 0,
});

export const activeCss: CSSObject = {
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
export const Item = styled.li<ItemProps>(({ active }) => [
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing('large'),
    fontSize: rem(20),
    color: colors.neutral[20],
    cursor: 'pointer',
    '&:hover': activeCss,
  },
  active && activeCss,
]);

export const ItemCaption = styled.p({
  marginLeft: spacing(),
});

export const ItemCount = styled.p({
  marginLeft: 'auto',
});

export const SectionItem = styled.li({
  marginTop: spacing('large'),
  paddingTop: spacing(),
  paddingBottom: spacing(),
  fontSize: rem(22),
  color: colors.neutral[10],
  textTransform: 'uppercase',
  borderTop: `${border.width}px solid ${colors.neutral[60]}`,
  borderBottom: `${border.width}px solid ${colors.neutral[60]}`,
});

export const CenteredLogo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const column: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&:hover': {
    color: colors.neutral[10],
  },
};

export const Balance = styled.span({
  color: colors.neutral[10],
  fontSize: rem(24),
  lineHeight: '2rem',
  '&:hover': {
    color: colors.neutral[10],
  },
});

export const Username = styled.p({
  fontSize: rem(16),
  color: colors.neutral[20],
  marginTop: spacing('small'),
});

export const Icon = styled.div({
  height: rem(40),
  width: rem(40),
  border: `${border.width}px solid ${colors.neutral[60]}`,
  borderRadius: border.radius.small,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: spacing('small'),
  fontSize: rem(20),
  '&:hover': {
    border: `${border.width}px solid ${colors.neutral[20]}`,
  },
});

export const LinkItem = styled.p({
  marginTop: 0,
});

export const CuracaoSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginTop: spacing('large'),
});

export const AllRightsReserved = styled.p({
  color: colors.neutral[20],
  fontSize: rem(12),
  marginTop: spacing('large'),
});

export const TopMenuSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: spacing('large'),
});

export const TopMenuLink = styled(Link)([
  column,
  {
    '& > svg': { fontSize: '1.5rem', marginBottom: spacing('small') },
  },
]);

export const SelectSettingsSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacing('xlarge'),
  flexWrap: 'nowrap',
  '& > select': {
    boxSizing: 'border-box',
  },
  '& > select + select': {
    marginTop: spacing(),
  },
});

export const SocialSection = styled.div({
  marginTop: spacing('large'),
});

export const HamburgerDetailsCaption = styled.p({
  color: colors.neutral[20],
});

export const SocialIcons = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: spacing(),
});

export const CuracaoLogoImage = styled.img({
  width: rem(42),
  height: rem(42),
  marginRight: spacing(),
});
