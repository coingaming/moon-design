import React from 'react';
import { TextInputProps } from '@heathmont/moon-core';
import SelectGroupEnd from './private/SelectGroupEnd';
import SelectGroupStart from './private/SelectGroupStart';
import { OrientationType } from './private/types/OrientationType';
import { SelectProps } from './Select';
import Container from './styles/Container';

export type DirType = 'ltr' | 'rtl' | 'auto';
export type InputPropType = Partial<SelectProps<any>> & Partial<TextInputProps> & { type: string };
export type TextInputGroupSize = "medium" | "large";

export interface TextInputGroupProps {
  orientation?: OrientationType;
  inputProps?: {
    input1?: InputPropType;
    input2?: InputPropType;
  };
  isRtl?: boolean;
  size?: TextInputGroupSize;
}

const determineInputStart = (
  orientation?: OrientationType,
  inputProps?: InputPropType,
  isRtl?: boolean,
  size?: TextInputGroupSize
) => {
  const groupProps = {
    inputProps: inputProps ?? { type: 'text' },
    orientation,
    isRtl,
    size
  };
  return <SelectGroupStart {...groupProps} />;
};

const determineInputEnd = (
  orientation?: OrientationType,
  inputProps?: InputPropType,
  isRtl?: boolean,
  size?: TextInputGroupSize
) => {
  const groupProps = {
    inputProps: inputProps ?? { type: 'text' },
    orientation,
    isRtl,
    size
  };
  return <SelectGroupEnd {...groupProps} />;
};

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  orientation = 'horizontal',
  inputProps,
  isRtl,
  size
}) => {
  const dir = isRtl ? 'rtl' : 'ltr';
  const isError = inputProps?.input1?.isError || inputProps?.input2?.isError;

  return (
    <Container orientation={orientation} dir={dir} isError={isError}>
      {determineInputStart(orientation, inputProps?.input1, isRtl, size)}
      {determineInputEnd(orientation, inputProps?.input2, isRtl, size)}
    </Container>
  );
};

export default TextInputGroup;
