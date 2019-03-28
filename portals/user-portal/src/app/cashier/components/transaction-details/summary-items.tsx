import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';

const cellStyle: CSSObject = {
  marginRight: spacing(),
  boxSizing: 'border-box',
  flexGrow: 1,
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const mobileHidden: CSSObject = {
  display: 'none',
  [mq(breakpoints.medium)]: {
    display: 'inline',
  },
};

const lastCell: CSSObject = {
  marginRight: rem(32),
  [mq(breakpoints.medium)]: {
    marginRight: rem(64),
  },
};

const firstCell: CSSObject = {
  marginLeft: rem(32),
};

const rightAlighted: CSSObject = {
  textAlign: 'right',
};

export const PaymentId = styled.div([cellStyle, firstCell]);

export const Status = styled.div<{ required?: boolean }>(
  ({ required = false }) => [
    cellStyle,
    required && {
      color: colors.error,
    },
  ]
);

export const DateSummary = styled.div([
  cellStyle,
  mobileHidden,
  rightAlighted,
  {
    width: '70%',
    [mq(breakpoints.medium)]: {
      marginRight: rem(96),
    },
  },
]);

export const Currency = styled.div([
  cellStyle,
  mobileHidden,
  {
    width: '50%',
    [mq(breakpoints.medium)]: {
      marginRight: rem(40),
    },
  },
]);

export const Amount = styled.div([cellStyle, lastCell, rightAlighted]);
