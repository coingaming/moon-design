import React from 'react';
import { TextInput } from '..';
import TextInputSizeType from '../textInput/private/types/SizeTypes';
import TextGroupEnd from './private/TextGroupEnd';
import TextGroupStart from './private/TextGroupStart';
import { OrientationType } from './private/types/OrientationType';
import { TextInputGroupTypes } from './private/types/TextInputGroupType';
import Container from './styles/Container';

export interface TextInputGroupProps {
  inputSize: TextInputSizeType | string;
  types?: {
    input1: TextInputGroupTypes;
    input2: TextInputGroupTypes;
  };
  placeholder?: {
    input1?: string;
    input2?: string;
  };
  orientation?: OrientationType;
  isRtl?: boolean;
  reference?: {
    input1: React.RefObject<HTMLInputElement>;
    input2: React.RefObject<HTMLInputElement>;
  };
}

const determineInputStart = (
  inputSize: TextInputSizeType | string,
  type: TextInputGroupTypes,
  placeholder?: string,
  orientation?: OrientationType,
  isRtl?: boolean,
  reference?: React.RefObject<HTMLInputElement>
) => {
  if (type !== 'select' && type !== 'multiselect') {
    const groupProps = {
      inputSize,
      type,
      placeholder,
      isRtl,
      reference,
      orientation,
    };
    return <TextGroupStart {...groupProps}></TextGroupStart>;
  }
  return <></>;
};

const determineInputEnd = (
  inputSize: TextInputSizeType | string,
  type: TextInputGroupTypes,
  placeholder?: string,
  orientation?: OrientationType,
  isRtl?: boolean,
  reference?: React.RefObject<HTMLInputElement>
) => {
  if (type !== 'select' && type !== 'multiselect') {
    const groupProps = {
      inputSize,
      type,
      placeholder,
      isRtl,
      reference,
      orientation,
    };
    return <TextGroupEnd {...groupProps}></TextGroupEnd>;
  }
  return <></>;
};

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
      {determineInputStart(
        inputSize,
        types && types.input1 ? types.input1 : 'text',
        placeholder?.input1,
        orientation,
        isRtl,
        reference?.input1
      )}
      {determineInputEnd(
        inputSize,
        types && types.input2 ? types.input2 : 'text',
        placeholder?.input2,
        orientation,
        isRtl,
        reference?.input2
      )}
    </Container>
  );
};

export default TextInputGroup;
