/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';

import { mq, spacing, container } from '@heathmont/sportsbet-utils';
import { breakpoints, colors, border } from '@heathmont/sportsbet-tokens';
import { Heading } from '@heathmont/sportsbet-components/lib/heading';
jsx;

const Background = styled.div([
  {
    width: '100%',
    background: `linear-gradient(${colors.neutral[90]} 14rem, 0%, ${
      colors.neutral[70]
    })`,
  },
]);

const cashierLayout: CSSObject = {
  ...container('default'),
  // prevents issues when you have some additional space on the page
  overflow: 'hidden',
  marginTop: spacing('large'),
};

export const CashierLayout: React.FC = ({ children }) => (
  <div css={cashierLayout}>{children}</div>
);

const heading: CSSObject = {
  marginTop: spacing('large'),
  paddingLeft: spacing('large'),
  paddingBottom: spacing('large'),
  borderBottom: `${border.width}px ${border.style} ${colors.neutral[70]}`,
  [mq(breakpoints.medium)]: {
    paddingLeft: 0,
  },
};

export const CashierHeading: React.FC<{ children: any }> = ({ children }) => (
  <Heading size="charlie" as="h1" css={heading}>
    {children}
  </Heading>
);
