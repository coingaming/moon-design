import React, { Ref } from 'react';
import { types } from '@babel/core';
import { TextInput } from '..';
import TextInputSizeType from '../textInput/private/types/SizeTypes';
import TextInputTypes from '../textInput/private/types/TextInputTypes';
import Container from './styles/Container';

export interface TextInputGroupProps {
  inputSize: TextInputSizeType | string;
  types?: {
    input1: TextInputTypes;
    input2: TextInputTypes;
  };
  placeholder?: {
    input1?: string;
    input2?: string;
  };
  orientation?: 'vertical' | 'horizontal';
  isRtl?: boolean;
  reference?: {
    input1: React.RefObject<HTMLInputElement>;
    input2: React.RefObject<HTMLInputElement>;
  };
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  isRtl,
  inputSize,
  types,
  placeholder,
  reference,
  orientation = 'horizontal',
}) => {
  return (
    <Container orientation={orientation} dir={isRtl ? 'rtl' : 'ltr'}>
      <TextInput
        type={types && types.input1 ? types.input1 : 'text'}
        placeholder={placeholder?.input1}
        inputSize={inputSize}
        dir={isRtl ? 'rtl' : 'ltr'}
        ref={reference?.input1}
        isSharpRightSide={orientation === 'horizontal' && !isRtl}
        isSharpLeftSide={orientation === 'horizontal' && isRtl}
        isSharpBottomSide={orientation === 'vertical'}
        isNoBorderBottom={orientation === 'vertical'}
        isNoBorderEnd={orientation === 'horizontal'}
      ></TextInput>
      <TextInput
        type={types && types.input2 ? types.input2 : 'text'}
        placeholder={placeholder?.input2}
        inputSize={inputSize}
        dir={isRtl ? 'rtl' : 'ltr'}
        ref={reference?.input2}
        isSharpRightSide={orientation === 'horizontal' && isRtl}
        isSharpLeftSide={orientation === 'horizontal' && !isRtl}
        isSharpTopSide={orientation === 'vertical'}
      ></TextInput>
    </Container>
  );
};

export default TextInputGroup;
