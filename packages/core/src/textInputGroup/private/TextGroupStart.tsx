import React from 'react';
import { TextInput } from '../..';
import TextInputSizeType from '../../textInput/private/types/SizeTypes';
import TextInputTypes from '../../textInput/private/types/TextInputTypes';
import { OrientationType } from './types/OrientationType';

export interface TextGroupStartProps {
  inputSize: TextInputSizeType | string;
  type?: TextInputTypes;
  placeholder?: string;
  isRtl?: boolean;
  reference?: React.RefObject<HTMLInputElement>;
  orientation?: OrientationType;
}

const TextGroupStart: React.FC<TextGroupStartProps> = ({
  inputSize,
  type,
  placeholder,
  isRtl,
  reference,
  orientation,
}) => {
  return (
    <TextInput
      type={type ?? 'text'}
      placeholder={placeholder}
      inputSize={inputSize}
      dir={isRtl ? 'rtl' : 'ltr'}
      ref={reference}
      isSharpRightSide={orientation === 'horizontal' && !isRtl}
      isSharpLeftSide={orientation === 'horizontal' && isRtl}
      isSharpBottomSide={orientation === 'vertical'}
      isNoBorderBottom={orientation === 'vertical'}
      isNoBorderEnd={orientation === 'horizontal'}
    ></TextInput>
  );
};

export default TextGroupStart;
