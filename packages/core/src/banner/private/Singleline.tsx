import React from 'react';
import Body from '../styles/Body';
import BodyButtonContainer from '../styles/BodyButtonContainer';
import BodyContent from '../styles/BodyContent';
import Container from '../styles/Container';

export interface Props {
  description: string;
  link: React.ReactElement;
}

const Singleline: React.FC<Props> = ({ description, link }) => {
  return (
    <Container hasButtons={false}>
      <Body isMultiline={false}>
        <BodyContent isMultiline={false}>{description}</BodyContent>
        <BodyButtonContainer>{link}</BodyButtonContainer>
      </Body>
    </Container>
  );
};

export default Singleline;
