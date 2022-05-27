import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Container from './styles/Container';
import MetaWrapper from './styles/MetaWrapper';
import SubtextInner from './styles/SubtextInner';
import SubtextWrapper from './styles/SubtextWrapper';

export type ListItemProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  elementLeft?: React.ReactElement;
  elementRight?: React.ReactElement;
  isMeta?: boolean;
  subtext?: React.ReactElement;
  size?: 'medium' | 'large';
  children?: React.ReactNode;
};

const MainWrapper = styled.div({
  gridArea: 'main',
});

const ElementLeftWrapper = styled.span({
  gridArea: 'icon',
  marginInlineEnd: rem(8),
  display: 'flex',
  alignItems: 'center',
});

const ElementRightWrapper = styled.span({
  gridArea: 'meta',
  marginInlineStart: rem(8),
  display: 'flex',
  alignItems: 'center',
});

const ListItem: React.FC<ListItemProps> = ({
  children,
  color,
  backgroundColor,
  elementLeft,
  elementRight,
  isMeta,
  subtext,
  size = 'medium' as const,
}) => (
  <Container
    size={size}
    color={color}
    backgroundColor={backgroundColor}
    isMeta={isMeta}
  >
    {elementLeft && <ElementLeftWrapper>{elementLeft}</ElementLeftWrapper>}
    <MainWrapper>{children}</MainWrapper>
    {elementRight &&
      (isMeta ? (
        <MetaWrapper>{elementRight}</MetaWrapper>
      ) : (
        <ElementRightWrapper>{elementRight}</ElementRightWrapper>
      ))}
    {subtext && (
      <SubtextWrapper>
        <SubtextInner>{subtext}</SubtextInner>
      </SubtextWrapper>
    )}
  </Container>
);

export default ListItem;
