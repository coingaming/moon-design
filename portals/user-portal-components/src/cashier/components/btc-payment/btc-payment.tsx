import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';

import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints, border, colors } from '@heathmont/sportsbet-tokens';

export const BtcPaymentDetailBlock = styled.div({
  border: `${border.width}px solid ${colors.neutral[30]}`,
  borderRadius: border.radius.small,
  [mq(breakpoints.medium)]: {
    margin: 0,
    display: 'grid',
    gridTemplate: `"card  qr" 
                   "address qr"`,
    gridTemplateColumns: '1fr 1fr',
  },
});

export const BtcPaymentBalance = styled.div({
  paddingLeft: spacing(),
  paddingTop: spacing(),
  paddingBottom: spacing(),
  [mq(breakpoints.medium)]: {
    gridArea: 'card',
  },
});

export const BtcPaymentQr = styled.div({
  display: 'none',
  [mq(breakpoints.medium)]: {
    display: 'inline',
    gridArea: 'qr',
    padding: '5rem',
    backgroundColor: colors.neutral[50],
  },
});

export const BtcPaymentAddressBlock = styled.div({
  borderTop: `${border.width}px solid ${colors.neutral[30]}`,
  padding: spacing(),
  marginTop: spacing(),
  [mq(breakpoints.medium)]: {
    gridArea: 'address',
  },
});

export const BtcPaymentAddress = styled.div({
  border: `${border.width}px solid ${colors.neutral[30]}`,
  borderRadius: border.radius.small,
  padding: spacing(),
  marginTop: spacing('small'),
});

export const BtcPaymentAddressLabel = styled.div({
  color: colors.neutral[20],
});

export const BtcPaymentCopyButton = styled.div({
  marginTop: spacing(),
});

export const BtcPaymentExchangeBlock = styled.div({
  border: `${border.width}px solid ${colors.neutral[30]}`,
  borderRadius: border.radius.small,
  marginTop: spacing(),
  [mq(breakpoints.medium)]: {
    margin: 0,
    marginTop: spacing(),
  },
});

export const TransferIcon = styled.div({
  display: 'none',
  [mq(breakpoints.medium)]: {
    alignSelf: 'center',
    display: 'block',
  },
});

export const TransferIconMobile = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export const BtcPaymentHeading = styled.div({
  padding: spacing(),
});

export const BtcPaymentExchangeGrid = styled.div({
  borderTop: `${border.width}px solid ${colors.neutral[30]}`,
  padding: spacing(),
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplate: `"rate icon label label"
                   "input icon input-to button"
                   "time time time fee"`,
    gridTemplateColumns: '3fr 1fr 3fr 2fr',
  },
});

export const BtcPaymentRate = styled.div({
  gridArea: 'rate',
  fontSize: rem(12),
  color: colors.secondary,
  display: 'flex',
  justifyContent: 'space-between',
});

export const BtcPaymentLabel = styled.div({
  gridArea: 'label',
  fontSize: rem(12),
  color: colors.secondary,
});

export const BtcPaymentInput = styled.div({
  gridArea: 'input',
  marginTop: spacing('small'),
  display: 'flex',
});

export const BtcPaymentInputTo = styled.div({
  gridArea: 'input-to',
  marginTop: spacing('small'),
  display: 'flex',
});

export const BtcPaymentIcon = styled.div({
  gridArea: 'icon',
  justifySelf: 'center',
  alignSelf: 'center',
  display: 'none',
  [mq(breakpoints.medium)]: {
    display: 'block',
  },
});

export const BtcPaymentIconMobile = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export const BtcPaymentButton = styled.div({
  gridArea: 'button',
  display: 'flex',
  marginTop: spacing('small'),
  [mq(breakpoints.medium)]: {
    marginLeft: spacing('medium'),
  },
});

export const BtcPaymentExchangeRateTime = styled.div({
  gridArea: 'time',
  fontSize: rem(12),
  color: colors.secondary,
  marginTop: spacing('small'),
});

export const BtcPaymentFee = styled.div({
  gridArea: 'fee',
  fontSize: rem(12),
  color: colors.secondary,
  textAlign: 'center',
  marginTop: spacing('small'),
  [mq(breakpoints.medium)]: {
    marginLeft: spacing('medium'),
    textAlign: 'right',
  },
});

export const BtcPaymentCurrencySelect = styled.div({
  flex: 1,
});

export const BtcPaymentBannerBlock = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridRowGap: spacing(),
  [mq(breakpoints.medium)]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: spacing(),
  },
});

export const BtcPaymentPowerByImage = styled.img({
  width: '4rem',
});

export const BtcPaymentPowerByText = styled.span({
  fontSize: rem(12),
  color: colors.neutral[20],
});

export const BtcPaymentPowerByImageBlock = styled.div({
  fontSize: rem(12),
  marginTop: spacing('small'),
  display: 'flex',
  justifyContent: 'flex-end',
});
