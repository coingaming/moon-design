import React from 'react';
import TextGroupEnd from './private/TextGroupEnd';
import TextGroupStart from './private/TextGroupStart';
import { OrientationType } from './private/types/OrientationType';
import Container from './styles/Container';
import type TextInputProps from '../textInput/private/types/TextInputProps';

export interface TextInputGroupProps {
  orientation?: OrientationType;
  inputProps?: {
    input1?: TextInputProps;
    input2?: TextInputProps;
  };
  isRtl?: boolean;
  backgroundColor?: string;
}

const determineInputStart = (
  inputProps?: TextInputProps,
  orientation?: OrientationType,
  isRtl?: boolean
) => {
  const groupProps = {
    inputProps,
    orientation,
    isRtl,
  };
  return <TextGroupStart {...groupProps}></TextGroupStart>;
};

const determineInputEnd = (
  inputProps?: TextInputProps,
  orientation?: OrientationType,
  isRtl?: boolean
) => {
  const groupProps = {
    inputProps,
    orientation,
    isRtl,
  };
  return <TextGroupEnd {...groupProps}></TextGroupEnd>;
};

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  orientation = 'horizontal',
  inputProps,
  isRtl,
  backgroundColor = 'bg-gohan',
}) => {
  const dir = isRtl ? 'rtl' : 'ltr';
  const isXLarge =
    inputProps?.input1?.inputSize === 'xl' ||
    inputProps?.input2?.inputSize === 'xl';
  return (
    <Container
      orientation={orientation}
      dir={dir}
      isXLarge={isXLarge}
      backgroundColor={backgroundColor}
      isError={inputProps?.input1?.isError || inputProps?.input2?.isError}
    >
      {determineInputStart(inputProps?.input1, orientation, isRtl)}
      {determineInputEnd(inputProps?.input2, orientation, isRtl)}
    </Container>
  );
};

export default TextInputGroup;
