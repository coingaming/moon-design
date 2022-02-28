import React, { forwardRef } from 'react';
import { TextInput } from '..';
import TextInputSizeType from '../textInput/private/types/SizeTypes';
import Container from './styles/Container';

export interface TextInputGroupProps {
  isRtl?: boolean;
  inputSize: TextInputSizeType | string;
  orientation: 'vertical' | 'horizontal';
  placeholder1?: string;
  placeholder2?: string;
}

const TextInputGroup = forwardRef<HTMLInputElement, TextInputGroupProps>(
  (props, ref) => {
    const {
      isRtl,
      inputSize,
      placeholder1,
      placeholder2,
      orientation = 'horizontal',
    } = props;

    return (
      <Container orientation={orientation}>
        <TextInput
          type="text"
          placeholder={placeholder1}
          inputSize={inputSize}
        ></TextInput>
        <TextInput
          type="text"
          placeholder={placeholder2}
          inputSize={inputSize}
        ></TextInput>
      </Container>
    );
  }
);

export default TextInputGroup;
