import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, spacing } from '@heathmont/sportsbet-utils';
import { IconChevronDown, IconChevronUp } from '@heathmont/sportsbet-icons';
import { inputColors } from '@heathmont/sportsbet-components/lib/private/input';
import rem from 'polished/lib/helpers/rem';

export const MyBetContainerHeader = styled.div<{}>({
  display: 'none',
  paddingLeft: spacing(),
  paddingRight: rem(48),
  alignItems: 'center',
  textAlign: 'right',
  justifyContent: 'flex-end',
  flexGrow: 1,
  backgroundColor: colors.secondary,
  color: colors.neutral[20],
  marginBottom: spacing('small'),
  height: rem(48),
  [mq(breakpoints.medium)]: {
    display: 'flex',
  },
});

export const MyBetContainerHeaderBetDetails = styled.span({
  marginRight: 'auto',
});

export const MyBetContainerHeaderStatus = styled.span({
  width: rem(75),
  textAlign: 'center',
});

export const MyBetContainerHeaderOdds = styled.span({
  width: rem(54),
  marginLeft: spacing('xsmall'),
});

export const MyBetContainerHeaderStake = styled.span({
  width: rem(105),
  marginLeft: spacing('xsmall'),
});

export const MyBetContainerHeaderPotentialWin = styled.span({
  width: rem(105),
  marginLeft: spacing('xsmall'),
});

export const MyBetContainer = styled.details({
  position: 'relative',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: colors.secondary,
  '&[open]': {
    Summary: {
      borderBottom: `${rem(1)} solid ${colors.neutral[80]}`,
      '&::-webkit-details-marker': {
        backgroundImage: inlineSVG(<IconChevronUp color={inputColors.icon} />),
      },
      [mq(breakpoints.medium)]: {
        border: 'none',
      },
    },
    footer: {
      borderTop: `${rem(1)} solid ${colors.neutral[80]}`,
      display: 'flex',
      [mq(breakpoints.medium)]: {
        display: 'none',
        border: 'none',
      },
    },
    [mq(breakpoints.medium)]: {
      marginBottom: 'auto',
    },
  },
  [mq(breakpoints.medium)]: {
    marginBottom: rem(1),
  },
});

export const MyBetHeader = styled.summary({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  cursor: 'pointer',
  boxSizing: 'border-box',
  // arrow
  '&::-webkit-details-marker': {
    display: 'none',
    [mq(breakpoints.medium)]: {
      backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
      display: 'inline-block',
      backgroundSize: 'cover',
      color: 'transparent',
      width: rem(10),
      height: rem(10),
      position: 'absolute',
      right: rem(19),
      top: rem(29),
    },
  },
});

export const MyBetHeaderContainer = styled.div({
  flexGrow: 1,
  overflow: 'hidden',
  padding: spacing(),
  boxSizing: 'border-box',
  borderRight: `${rem(1)} solid ${colors.neutral[80]}`,
  [mq(breakpoints.medium)]: {
    border: 'none',
    flexGrow: 0,
    flexShrink: 1,
    paddingTop: rem(14),
    paddingBottom: rem(8),
  },
});

export const MyBetHeaderTitle = styled.div({
  color: colors.text,
  display: 'flex',
  alignItems: 'center',
});

export const MyBetHeaderTitleAmount = styled.span({
  marginLeft: spacing('small'),
});

export const MyBetHeaderCashoutContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  boxSizing: 'border-box',
  flexGrow: 0,
  flexShrink: 0,
  padding: `${rem(12)} ${spacing()}`,
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export const MyBetHeaderCashout = styled.p({
  fontSize: rem(12),
  marginTop: spacing('xsmall'),
  color: colors.brand,
  textAlign: 'center',
});

export const MyBetHeaderCashoutAmount = styled.span({
  color: colors.warning,
});

export const MyBetHeaderCaption = styled.p({
  color: colors.neutral[20],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginTop: rem(10),
});

export const MyBetHeaderStatusContainer = styled.div({
  display: 'none',
  paddingRight: rem(48),
  alignItems: 'center',
  textAlign: 'right',
  justifyContent: 'flex-end',
  flexGrow: 1,
  [mq(breakpoints.medium)]: {
    display: 'flex',
  },
});

export const MyBetHeaderStatus = styled.span({
  width: rem(75),
  textAlign: 'center',
});

export const MyBetHeaderOdds = styled.span({
  width: rem(54),
  marginLeft: spacing('xsmall'),
});

export const MyBetHeaderStake = styled.span({
  width: rem(105),
  marginLeft: spacing('xsmall'),
});

export const MyBetHeaderPotential = styled.span({
  width: rem(105),
  marginLeft: spacing('xsmall'),
  color: colors.brand,
});

export const MyBetHeaderCaptionDate = styled.span({
  display: 'none',
  marginRight: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'inline',
  },
});
export const MyBetHeaderCaptionMatchName = styled.span();

export const MyBetContents = styled.div({
  padding: `${spacing('medium')} 0 ${spacing()} ${spacing()}`,
});

export const MyBetCaptions = styled.div({
  marginTop: spacing('large'),
  paddingRight: spacing(),

  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export const MyBetCaptionRow = styled.p({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 0,
  marginBottom: spacing('small'),
});

export const MyBetCaptionTitle = styled.span({
  color: colors.neutral[20],
});

export const MyBetCaptionValue = styled.span<{ color?: string }>(
  ({ color }) => {
    return [
      {
        width: rem(120),
        textAlign: 'right',
      },
      color && { color },
    ];
  }
);

export const MyBetFooter = styled.footer({
  padding: `${spacing()} ${spacing('medium')}`,
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  backgroundColor: colors.secondary,
  display: 'none',
  flexFlow: 'nowrap',
  alignItems: 'center',
  [mq(breakpoints.medium)]: {
    display: 'flex',
    padding: `${spacing()}`,
  },
  button: {
    width: '100%',
    [mq(breakpoints.medium)]: {
      width: 'auto',
    },
  },
});

export const MyBetFooterCashout = styled.div({
  alignItems: 'center',
  display: 'flex',
});
export const MyBetFooterAmount = styled.div({
  marginRight: rem(12),
  color: colors.warning,
});
