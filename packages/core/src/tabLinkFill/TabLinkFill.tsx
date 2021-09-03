import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import TabLinkFillStyle from './TabLinkFillStyle';

export type TabLinkFillProps = {
  elementLeft?: React.ReactElement;
  count?: string;
  size?: 'small' | 'medium';
  isTop?: boolean;
  href?: string;
};

const ElementLeftWrapper = styled.div({
  marginRight: rem(8),
});

const CountWrapper = styled.span({
  marginLeft: rem(8),
});

const TabLinkFill: React.FC<TabLinkFillProps> = ({
  children,
  href,
  elementLeft,
  size,
  count,
}) => (
  <TabLinkFillStyle size={size} href={href}>
    {elementLeft && <ElementLeftWrapper>{elementLeft}</ElementLeftWrapper>}
    {children}
    {count && <CountWrapper>{count}</CountWrapper>}
  </TabLinkFillStyle>
);

export default TabLinkFill;
