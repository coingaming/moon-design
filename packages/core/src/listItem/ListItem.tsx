import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

import Container from './styles/Container';
import MetaWrapper from './styles/MetaWrapper';
import SubtextWrapper from './styles/SubtextWrapper';
import SubtextInner from './styles/SubtextInner';

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

const ElementLeftWrapper = styled.span({
  gridArea: 'icon',
  marginRight: rem(8),
});

const ElementRightWrapper = styled.span({
  gridArea: 'meta',
  marginLeft: rem(8),
});

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
