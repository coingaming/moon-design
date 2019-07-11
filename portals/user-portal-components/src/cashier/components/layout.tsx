/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';

import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { Heading } from '@heathmont/sportsbet-components/lib/heading';

import {
  UserPortalContainer,
  userPortalContainer,
  userPortalContainerInner,
} from '../../shared/container';

jsx;

export const CashierLayout: React.FC = ({ children }) => {
  /* Add deprecation warning message */
  /* eslint-disable-next-line no-console */
  console.warn(
    'This component is deprecated and no longer necessary. Please use a standard HTML element instead such as `<div>`.'
  );
  return <div>{children}</div>;
};

const heading: CSSObject = {
  paddingTop: spacing('large'),
  paddingBottom: spacing('large'),
  borderBottom: `${border.width}px ${border.style} ${colors.neutral[70]}`,
  ...userPortalContainerInner,
};

export const StickyNav = styled.div({
  ...userPortalContainer,
  position: 'sticky',
  top: 0,
  zIndex: 5,
});

export const CashierHeading: React.FC<{ children: React.ReactChildren }> = ({
  children,
}) => (
  <UserPortalContainer>
    <Heading size="charlie" as="h1" css={heading}>
      {children}
    </Heading>
  </UserPortalContainer>
);
