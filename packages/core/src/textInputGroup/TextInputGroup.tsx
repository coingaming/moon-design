import React from 'react';
import { Select , SelectProps } from '@heathmont/moon-select';

import { TextInputProps } from '..';
import TextGroupEnd from './private/TextGroupEnd';
import TextGroupStart from './private/TextGroupStart';
import { OrientationType } from './private/types/OrientationType';
import { TextInputGroupTypes } from './private/types/TextInputGroupType';
import Container from './styles/Container';

export interface TextInputGroupProps {
  types?: {
    input1: TextInputGroupTypes;
    input2: TextInputGroupTypes;
  };
  orientation?: OrientationType;
  inputProps?: {
    input1?: TextInputProps;
    input2?: TextInputProps;
  };
  selectProps?: {
    input1?: SelectProps<any>;
    input2?: SelectProps<any>;
  };
}

const determineInputStart = (
  type: TextInputGroupTypes,
  inputProps?: TextInputProps,
  orientation?: OrientationType,
  selectProps?: SelectProps<any>
) => {
  if (type === 'multi-select') {
    return <Select {...selectProps} isMulti />;
  } else if (type === 'single-select') {
    return <Select {...selectProps} />;
  } else {
    if (!inputProps) {
      throw new Error('Input props is required for input text types');
    }
    const groupProps = {
      inputProps,
      orientation,
    };
    return <TextGroupStart {...groupProps}></TextGroupStart>;
  }
};

const determineInputEnd = (
  type: TextInputGroupTypes,
  inputProps?: TextInputProps,
  orientation?: OrientationType,
  selectProps?: SelectProps<any>
) => {
  if (type === 'multi-select') {
    return <Select {...selectProps} isMulti />;
  } else if (type === 'single-select') {
    return <Select {...selectProps} />;
  } else {
    if (!inputProps) {
      throw new Error('Input props is required for input text types');
    }
    const groupProps = {
      inputProps,
      orientation,
    };
    return <TextGroupEnd {...groupProps}></TextGroupEnd>;
  }
};

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  types,
  orientation = 'horizontal',
  inputProps,
  selectProps,
}) => {
  // TODO
  // Use select props and use check the pair prop too
  const dir = inputProps?.input1?.dir ?? 'ltr';
  return (
    <Container orientation={orientation} dir={dir}>
      {determineInputStart(
        types && types.input1 ? types.input1 : 'text',
        inputProps?.input1,
        orientation,
        selectProps?.input1
      )}
      {determineInputEnd(
        types && types.input1 ? types.input1 : 'text',
        inputProps?.input2,
        orientation,
        selectProps?.input2
      )}
    </Container>
  );
};

export default TextInputGroup;
