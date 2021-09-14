import React from 'react';
import styled from 'styled-components';

import { rem } from 'polished';

interface HeaderProps {
  backButton?: JSX.Element;
  closeButton?: JSX.Element;
  icons?: JSX.Element[];
}

const Container = styled.div(({ theme: { color, fontWeight } }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  fontSize: rem(18),
  lineHeight: rem(24),
  color: color.bulma[100],
  fontWeight: fontWeight.semibold,
}));

const Label = styled.div({
  paddingTop: rem(4),
});

const RightWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  fontSize: rem(32),
});

const IconWrapper = styled.span({
  marginLeft: rem(8),
});

const ControlsChevronLeftIcon = styled.div({
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
}) => {
  return (
    <Container>
      {backButton && (
        <ControlsChevronLeftIcon>{backButton}</ControlsChevronLeftIcon>
      )}
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
};

export default Header;
