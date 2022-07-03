import React from 'react';
import { TextInputProps } from '..';
import TextGroupEnd from './private/TextGroupEnd';
import TextGroupStart from './private/TextGroupStart';
import { OrientationType } from './private/types/OrientationType';
import Container from './styles/Container';

export interface TextInputGroupProps {
  orientation?: OrientationType;
  inputProps?: {
    input1?: TextInputProps;
    input2?: TextInputProps;
  };
  isRtl?: boolean;
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
}) => {
  const dir = isRtl ? 'rtl' : 'ltr';
  const inputSize1 = inputProps?.input1?.inputSize;
  const inputSize2 = inputProps?.input2?.inputSize;
  const isXLarge =
    inputSize1 === 'xlarge' ||
    inputSize1 === 'xlarge' ||
    !inputSize1 ||
    !inputSize2;

  const isError = inputProps?.input1?.isError || inputProps?.input2?.isError;
  const backgroundColor =
    inputProps?.input1?.backgroundColor || inputProps?.input2?.backgroundColor;
  return (
    <Container
      orientation={orientation}
      dir={dir}
      isXLarge={isXLarge}
      isError={isError}
      backgroundColor={backgroundColor}
    >
      {determineInputStart(inputProps?.input1, orientation, isRtl)}
      {determineInputEnd(inputProps?.input2, orientation, isRtl)}
    </Container>
  );
};

export default TextInputGroup;
