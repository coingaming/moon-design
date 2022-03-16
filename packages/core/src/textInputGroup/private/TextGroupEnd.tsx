import React from 'react';
import { TextInput, TextInputProps } from '../..';
import TextInputSizeType from '../../textInput/private/types/SizeTypes';
import TextInputTypes from '../../textInput/private/types/TextInputTypes';
import { OrientationType } from './types/OrientationType';

export interface TextGroupStartProps {
  inputProps: TextInputProps;
  orientation?: OrientationType;
}

const TextGroupStart: React.FC<TextGroupStartProps> = ({
  inputProps,
  orientation,
}) => {
  return (
    <TextInput
      {...inputProps}
      isSharpRightSide={
        orientation === 'horizontal' && inputProps.dir === 'rtl'
      }
      isSharpLeftSide={orientation === 'horizontal' && inputProps.dir !== 'rtl'}
      isSharpTopSide={orientation === 'vertical'}
    ></TextInput>
  );
};

export default TextGroupStart;
