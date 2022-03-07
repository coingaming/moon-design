import React from 'react';
import Body from '../styles/Body';
import BodyButtonContainer from '../styles/BodyButtonContainer';
import BodyContent from '../styles/BodyContent';
import Container from '../styles/Container';
import Header from '../styles/Header';
import HeaderContent from '../styles/HeaderContent';
import HeaderIcon from '../styles/HeaderIcon';

export interface Props {
  title: string;
  description: string;
  iconHeader?: React.ReactElement;
  buttons?: React.ReactElement[];
}

const Multiline: React.FC<Props> = ({
  title,
  description,
  iconHeader,
  buttons,
}) => {
  return (
    <Container hasButtons={buttons && buttons.length > 0} isMobile>
      <Body>
        <Header>
          <HeaderContent>{title}</HeaderContent>
          {iconHeader && <HeaderIcon>{iconHeader}</HeaderIcon>}
        </Header>
        <BodyContent>{description}</BodyContent>
      </Body>
      {!iconHeader && (
        <BodyButtonContainer>
          {buttons && buttons.map((b, index) => b)}
        </BodyButtonContainer>
      )}
    </Container>
  );
};

export default Multiline;
