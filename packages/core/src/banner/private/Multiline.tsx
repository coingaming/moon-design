import React from 'react';
import Body from '../styles/Body';
import BodyButtonContainer from '../styles/BodyButtonContainer';
import BodyContent from '../styles/BodyContent';
import Container from '../styles/Container';
import Header from '../styles/Header';
import HeaderContent from '../styles/HeaderContent';
import HeaderIcon from '../styles/HeaderIcon';

export interface Props {
  description: string;
  title?: string;
  iconHeader?: React.ReactElement;
  buttons?: React.ReactElement[];
  isMobile?: boolean;
}

const Multiline: React.FC<Props> = ({
  description,
  title,
  iconHeader,
  buttons,
  isMobile,
}) => {
  return (
    <Container hasButtons={buttons && buttons.length > 0} isMobile={isMobile}>
      <Body isMultiline={true}>
        <Header>
          <HeaderContent>{title}</HeaderContent>
          {iconHeader && <HeaderIcon>{iconHeader}</HeaderIcon>}
        </Header>
        <BodyContent>{description}</BodyContent>
      </Body>
      {!iconHeader && (
        <BodyButtonContainer>
          {buttons &&
            buttons.map((button, index) => <span key={index}>{button}</span>)}
        </BodyButtonContainer>
      )}
    </Container>
  );
};

export default Multiline;
