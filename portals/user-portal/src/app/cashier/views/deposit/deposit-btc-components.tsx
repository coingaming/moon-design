/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing, inlineSVG, mq } from '@heathmont/sportsbet-utils';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';

jsx;

export const DepositBTCLayout = styled.div({
  paddingLeft: spacing(),
  paddingRight: spacing(),
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gridColumnGap: spacing('large'),
    gridTemplateAreas: `
                "main     qrcode"
                "banners  banners"
                `,
  },
  [mq(breakpoints.large)]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const DepositBTCMainArea = styled.div({
  gridArea: 'main',
});

export const DepositBTCBalance = styled.div<{ icon: any }>(({ icon }) => ({
  paddingTop: spacing('large'),
  paddingBottom: spacing('large'),
  borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'luminosity',
  backgroundImage: inlineSVG(icon),
  backgroundSize: `auto 50%`,
  backgroundPosition: `center right ${spacing()}`,
}));

export const DepositBTCCaption = styled.p({
  color: colors.neutral[20],
  fontSize: rem(14),
});

export const DepositBTCBalanceAmount = styled.p({
  marginTop: spacing('xsmall'),
});

export const DepositBTCBalanceAmountDigits = styled.span({
  fontSize: rem(40),
  fontWeight: 600,
  letterSpacing: '1px',
  color: colors.neutral[10],
});

export const DepositBTCBalanceAmountCurrency = styled.span({
  fontSize: rem(30),
  letterSpacing: '1px',
  color: colors.neutral[10],
});

export const DepositBTCBalanceAmountConverted = styled.p({
  marginTop: spacing('xsmall'),
  color: colors.neutral[20],
  fontSize: rem(14),
  fontWeight: 600,
});

export const DepositBTCAddress = styled.div({
  marginTop: spacing('large'),
});

export const DepositBTCAddressField = styled.div({
  marginTop: spacing('small'),
  [mq(breakpoints.small)]: {
    padding: spacing('xsmall'),
    paddingLeft: spacing(),
    border: `${border.width}px solid ${colors.neutral[70]}`,
    borderRadius: border.radius.largest,
    backgroundColor: colors.palette.hit[60],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const DepositBTCAddressFieldCaption = styled.p({
  fontSize: rem(14),
  marginBottom: spacing(),
  color: colors.neutral[10],
  [mq(breakpoints.small)]: {
    marginBottom: 0,
    color: colors.neutral[20],
  },
});

export const DepositBTCWarning = styled.p({
  marginTop: spacing('small'),
  fontSize: rem(12),
  color: colors.warning,
});

export const DepositBTCQrArea = styled.div({
  display: 'none',
  [mq(breakpoints.medium)]: {
    display: 'block',
    gridArea: 'qrcode',
  },
});

export const DepositBTCQrCenteredImage = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const DepositBTCBannersArea = styled.div({
  marginTop: spacing('large'),
  gridArea: 'banners',
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export const DepositBTCBannersRowItem = styled.div({
  [mq(breakpoints.medium)]: {
    marginRight: spacing('medium'),
  },
});
