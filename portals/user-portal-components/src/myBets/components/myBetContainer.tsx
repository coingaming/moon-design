import styled from '@emotion/styled';
import { breakpoints, colors, typography } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';

import { userPortalContainerFlush } from '../../shared/container';

import { myBetsContainerColors } from './shared/utils';

export const MyBetContainerHeader = styled.div<{}>({
  ...userPortalContainerFlush,
  display: 'none',
  paddingLeft: spacing(),
  paddingRight: spacing(),
  alignItems: 'center',
  textAlign: 'right',
  backgroundColor: myBetsContainerColors.headerBackgroundColor,
  color: colors.neutral[20],
  height: rem(48),
  fontWeight: typography.fontWeight.semibold,
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateRows: `1fr`,
    gridTemplateColumns: '3fr 0.25fr 1fr 1fr 1fr',
    gridColumnGap: spacing('small'),
  },
});

export const MyBetContainerHeaderBetDetails = styled.span<{}>({
  textAlign: 'left',
});

export const MyBetContainerHeaderDate = styled.span<{}>({
  marginRight: spacing('medium'),
});

export const MyBetHeader = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: spacing('small'),
  gridTemplateRows: `minmax(${rem(30)}, 1fr) minmax(${rem(
    20
  )}, 0.5fr) minmax(${rem(20)}, 0.5fr) minmax(${rem(20)}, 0.5fr)`,
  fontWeight: typography.fontWeight.semibold,
  [mq(breakpoints.medium)]: {
    gridTemplateRows: `1fr`,
    gridTemplateColumns: '3fr 0.25fr 1fr 1fr 1fr',
  },
});

export const MyBetHeaderDate = styled.span({
  textAlign: 'right',
  marginRight: spacing('medium'),
  color: colors.neutral[20],
  [mq(breakpoints.medium)]: {
    order: 5,
  },
});

export const MyBetHeaderCaption = styled.span({
  color: colors.neutral[20],
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export const MyBetHeaderText = styled.span({
  textAlign: 'right',
  color: myBetsContainerColors.headerRowText,
});

export const MyBetHeaderGreenText = styled.span({
  textAlign: 'right',
  color: colors.brand,
});

const footerIconOffset = 6;
export const MyBetFooterIcons = styled.p({
  alignItems: 'center',
  display: 'flex',
  paddingLeft: rem(footerIconOffset),
  flexShrink: 1,
  flexGrow: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '& > svg': {
    fontSize: rem(footerIconOffset * 2),
    backgroundColor: myBetsContainerColors.backgroundColor,
    marginLeft: rem(-footerIconOffset),
  },
  '& > span': {
    marginLeft: spacing('xsmall'),
  },
});

export const MyBetFooterActions = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  '& > svg': {
    fontSize: rem(35),
  },
  '& > p': {
    fontWeight: typography.fontWeight.semibold,
    marginRight: spacing('xsmall'),
    span: {
      color: myBetsContainerColors.footerCashoutAmount,
    },
  },
  '& > *': {
    marginLeft: spacing('xsmall'),
    [mq(breakpoints.medium)]: {
      marginLeft: spacing('small'),
    },
  },
});
