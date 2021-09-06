import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import TabLinkStyle from './TabLinkStyle';

export type TabLinkProps = {
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

const TabLink: React.FC<TabLinkProps> = ({
  children,
  href,
  elementLeft,
  size,
  count,
  isTop,
}) => (
  <TabLinkStyle
    size={size}
    isTop={isTop}
    href={href}
    paddingSize={size === 'small' ? rem(2) : rem(6)}
  >
    {elementLeft && <ElementLeftWrapper>{elementLeft}</ElementLeftWrapper>}
    {children}
    {count && <CountWrapper>{count}</CountWrapper>}
  </TabLinkStyle>
);

export default TabLink;
