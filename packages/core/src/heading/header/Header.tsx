import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Container from './styles/Container';
import RightWrapper from './styles/RightWrapper';

export interface HeaderProps {
  backButton?: JSX.Element;
  closeButton?: JSX.Element;
  icons?: JSX.Element[];
  isDivider?: boolean;
  children?: React.ReactNode;
}

const Label = styled.div({
  paddingTop: rem(4),
});

const IconWrapper = styled.span({
  marginLeft: rem(8),
});

const BackButtonIcon = styled.div({
  cursor: 'pointer',
  marginRight: rem(8),
  minWidth: rem(32),
});

const ControlsCloseIcon = styled.div({
  cursor: 'pointer',
  marginLeft: rem(8),
});

const Header: React.FC<HeaderProps> = ({
  children,
  backButton,
  closeButton,
  icons,
  isDivider,
}) => (
  <Container isDivider={isDivider}>
    {backButton && <BackButtonIcon>{backButton}</BackButtonIcon>}
    <Label>{children}</Label>
    <RightWrapper>
      {icons &&
        icons.map((item, index) => (
          <IconWrapper key={`hicon-${index}`}>{item}</IconWrapper>
        ))}
      {closeButton && <ControlsCloseIcon>{closeButton}</ControlsCloseIcon>}
    </RightWrapper>
  </Container>
);

export default Header;
