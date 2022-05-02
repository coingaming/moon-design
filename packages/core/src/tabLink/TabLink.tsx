import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Container from './styles/Container';

export interface TabLinkProps {
  elementLeft?: React.ReactElement;
  count?: string;
  size?: 'small' | 'medium';
  isTop?: boolean;
  href?: string;
  children?: React.ReactNode;
}

const ElementLeftWrapper = styled.div({
  marginInlineEnd: rem(8),
  '& > svg': {
    width: rem(15),
    height: rem(15),
    margin: rem(4.5)
  }
});

const CountWrapper = styled.span({
  marginInlineStart: rem(8),
  width: rem(24),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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
  >
    {elementLeft && <ElementLeftWrapper>{elementLeft}</ElementLeftWrapper>}
    {children}
    {count && <CountWrapper>{count}</CountWrapper>}
  </Container>
);

export default TabLink;
