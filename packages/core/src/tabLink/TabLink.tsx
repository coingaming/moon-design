import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import Container from './styles/Container';

export interface TabLinkProps {
  elementLeft?: React.ReactElement;
  count?: string;
  size?: 'small' | 'medium';
  isTop?: boolean;
  href?: string;
}

const ElementLeftWrapper = styled.div({
  marginInlineEnd: rem(8),
});

const CountWrapper = styled.span({
  marginInlineStart: rem(8),
});

const TabLink: React.FC<TabLinkProps> = ({
  children,
  href,
  elementLeft,
  size,
  count,
  isTop,
}) => (
  <Container
    size={size}
    isTop={isTop}
    href={href}
    paddingSize={size === 'small' ? rem(2) : rem(6)}
  >
    {elementLeft && <ElementLeftWrapper>{elementLeft}</ElementLeftWrapper>}
    {children}
    {count && <CountWrapper>{count}</CountWrapper>}
  </Container>
);

export default TabLink;
