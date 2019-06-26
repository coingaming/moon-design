/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';

jsx;

export const BtcPaymentLayoutHeader = styled.header({
  [mq(breakpoints.medium)]: {
    gridArea: 'header',
  },
});

export const BtcPaymentLayoutMain = styled.main({
  margin: spacing(),
  [mq(breakpoints.medium)]: {
    margin: 0,
    backgroundColor: colors.neutral[90],
    gridArea: 'main',
  },
});

export const BtcPaymentGrid = styled.div({
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateRows: `max-content auto`,
    gridRowGap: spacing(),
    gridTemplateColumns: `1fr`,
    gridColumnGap: spacing(),
    gridTemplateAreas: `
      "header"
      "main"
      "footer"
    `,
    minHeight: '100vh',
  },
});

export const BtcPaymentLayoutFooter = styled.div({
  margin: spacing(),
  [mq(breakpoints.medium)]: {
    margin: 0,
    gridArea: 'footer',
  },
});
