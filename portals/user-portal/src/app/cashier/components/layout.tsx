/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';

import { mq, spacing, container } from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { Heading } from '@heathmont/sportsbet-components';

const Background = styled.div([
  {
    background: `linear-gradient(${colors.neutral[90]} 18rem, 0%, ${
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
});
