import React, { Ref } from 'react';
import { TextInput } from '..';
import TextInputSizeType from '../textInput/private/types/SizeTypes';
import Container from './styles/Container';

export interface TextInputGroupProps {
  inputSize: TextInputSizeType | string;
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

export class TextInputGroup extends React.Component<TextInputGroupProps> {
  constructor(props: TextInputGroupProps) {
    super(props);
  }

  render() {
    const {
      isRtl,
      inputSize,
      placeholder,
      reference,
      orientation = 'horizontal',
    } = this.props;

    return (
      <Container orientation={orientation} dir={isRtl ? 'rtl' : 'ltr'}>
        <TextInput
          type="text"
          placeholder={placeholder?.input1}
          inputSize={inputSize}
          dir={isRtl ? 'rtl' : 'ltr'}
          ref={reference?.input1}
          isSharpRightSide={orientation === 'horizontal' && !isRtl}
          isSharpLeftSide={orientation === 'horizontal' && isRtl}
          isSharpBottomSide={orientation === 'vertical'}
          isNoBorderBottom={orientation === 'vertical'}
        ></TextInput>
        <TextInput
          type="text"
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
  }
}

export default TextInputGroup;
