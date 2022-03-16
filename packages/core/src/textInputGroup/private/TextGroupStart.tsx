import React from 'react';
import { TextInput, TextInputProps } from '../..';
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
        orientation === 'horizontal' && inputProps.dir !== 'rtl'
      }
      isSharpLeftSide={orientation === 'horizontal' && inputProps.dir === 'rtl'}
      isSharpBottomSide={orientation === 'vertical'}
      isNoBorderBottom={orientation === 'vertical'}
      isNoBorderEnd={orientation === 'horizontal'}
    ></TextInput>
  );
};

export default TextGroupStart;
