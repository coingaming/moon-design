import React from 'react';

import Container from './styles/Container';
import RightWrapper from './styles/RightWrapper';
import ButtonWrapper from './styles/ButtonWrapper';

export interface FooterProps {
  primButton?: JSX.Element;
  secButton?: JSX.Element;
  tertButton?: JSX.Element;
  isDivider?: boolean;
  size?: 'small' | 'medium';
}

const Footer: React.FC<FooterProps> = ({
  primButton,
  secButton,
  tertButton,
  isDivider,
  size,
}) => {
  return (
    <Container isDivider={isDivider} size={size}>
      <RightWrapper>
        {primButton && <ButtonWrapper>{primButton}</ButtonWrapper>}
        {secButton && <ButtonWrapper>{secButton}</ButtonWrapper>}
      </RightWrapper>
      {tertButton && <ButtonWrapper>{tertButton}</ButtonWrapper>}
    </Container>
  );
};

export default Footer;
