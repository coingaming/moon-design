import React from 'react';
import { TextInput } from '..';
import TextInputSizeType from '../textInput/private/types/SizeTypes';
import Container from './styles/Container';

export interface TextInputGroupProps {
  isRtl?: boolean;
  inputSize: TextInputSizeType | string;
  orientation: 'vertical' | 'horizontal';
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  isRtl,
  inputSize,
  orientation,
}) => {
  return (
    <Container orientation={orientation}>
      <TextInput
        type="text"
        placeholder="placeholder text"
        inputSize={inputSize}
      ></TextInput>
      <TextInput
        type="text"
        placeholder="placeholder text"
        inputSize={inputSize}
      ></TextInput>
    </Container>
  );
};

export default TextInputGroup;
