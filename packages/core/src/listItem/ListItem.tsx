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
};

const MainWrapper = styled.div({
  gridArea: 'main',
});

const ElementLeftWrapper = styled.span(({ theme }) => ({
  gridArea: 'icon',
  marginRight: theme.newTokens.space.xsmall,
  display: 'flex',
  alignItems: 'center',
}));

const ElementRightWrapper = styled.span(({ theme }) => ({
  gridArea: 'meta',
  marginLeft: theme.newTokens.space.xsmall,
  display: 'flex',
  alignItems: 'center',
}));

const ListItem: React.FC<ListItemProps> = ({
  children,
  color,
  backgroundColor,
  elementLeft,
  elementRight,
  isMeta,
  subtext,
  size,
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
