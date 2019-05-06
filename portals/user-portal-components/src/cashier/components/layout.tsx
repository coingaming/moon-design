/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';

import { mq, spacing, container } from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { Heading } from '@heathmont/sportsbet-components/lib/heading';
jsx;

const Background = styled.div([
  {
    // gridArea: 'nav',
    width: '100%',
    background: `linear-gradient(${colors.neutral[90]} 14rem, 0%, ${
      colors.neutral[80]
    })`,
  },
]);

export const CashierLayout: React.FC = ({ children }) => (
  <Background>
    <div css={container('default')}>{children}</div>
  </Background>
);

const heading: CSSObject = {
  marginTop: spacing('large'),
  paddingLeft: spacing('large'),
  [mq(breakpoints.medium)]: {
    paddingLeft: 0,
  },
};

export const CashierHeading: React.FC<{ children: any }> = ({ children }) => (
  <Heading size="charlie" element="h1" css={heading}>
    {children}
  </Heading>
);

export const HeadingDescription = styled.p({
  color: colors.neutral[20],
  marginTop: spacing('xsmall'),
  paddingLeft: spacing('large'),
  [mq(breakpoints.medium)]: {
    paddingLeft: 0,
  },
});
