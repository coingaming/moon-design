import React, { forwardRef } from 'react';
import { TextInput } from '..';
import TextInputSizeType from '../textInput/private/types/SizeTypes';
import Container from './styles/Container';

export interface TextInputGroupProps {
  inputSize: TextInputSizeType | string;
  placeholder1?: string;
  placeholder2?: string;
  orientation: 'vertical' | 'horizontal';
  isRtl?: boolean;
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
      <Container orientation={orientation} dir={isRtl ? 'rtl' : 'ltr'}>
        <TextInput
          type="text"
          placeholder={placeholder1}
          inputSize={inputSize}
          dir={isRtl ? 'rtl' : 'ltr'}
        ></TextInput>
        <TextInput
          type="text"
          placeholder={placeholder2}
          inputSize={inputSize}
          dir={isRtl ? 'rtl' : 'ltr'}
        ></TextInput>
      </Container>
    );
  }
);

export default TextInputGroup;
