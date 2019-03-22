import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';

const desktopHidden: CSSObject = {
  display: 'inline',
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
};

const rowContent: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: spacing('small'),
  [mq(breakpoints.medium)]: {
    justifyContent: 'flex-end',
    '> p': {
      [mq(breakpoints.medium)]: {
        width: rem(190),
        textAlign: 'right',
      },
    },
  },
};

const columnContent: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  marginBottom: spacing('small'),
};

export const Title = styled.p({
  color: colors.neutral[20],
  marginTop: 0,
});

export const Text = styled.p({
  color: colors.neutral[10],
  marginTop: 0,
});

export const DateDetails = styled.div([desktopHidden, rowContent]);

export const CurrencyDetails = styled.div([desktopHidden, rowContent]);

export const Provider = styled.div([columnContent]);

export const TimeOfTransaction = styled.div([columnContent]);

export const ProcessingFee = styled.div([rowContent]);

export const AmountSpent = styled.div([rowContent]);

export const RateApplied = styled.div([rowContent]);

export const BalanceAfter = styled.div([rowContent]);

export const ResumeTransaction = styled.div([rowContent]);
