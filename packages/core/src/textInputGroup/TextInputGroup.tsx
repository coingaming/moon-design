import React from 'react';
import { TextInput } from '@heathmont/moon-components';
import Container from './styles/Container';

export interface TextInputProps {}

const TextInputGroup: React.FC<TextInputProps> = () => {
  return (
    <Container>
      <TextInput></TextInput>
      <TextInput></TextInput>
    </Container>
  );
};

export default TextInputGroup;
