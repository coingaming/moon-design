import React from 'react';

import SelectGroupEnd from './private/SelectGroupEnd';
import SelectGroupStart from './private/SelectGroupStart';
import { OrientationType } from './private/types/OrientationType';
import { SelectProps } from './Select';
import Container from './styles/Container';

export interface TextInputGroupProps {
  orientation?: OrientationType;
  selectProps?: {
    input1?: SelectProps<any>;
    input2?: SelectProps<any>;
  };
  isRtl?: boolean;
}

const determineInputStart = (
  orientation?: OrientationType,
  selectProps?: SelectProps<any>,
  isRtl?: boolean
) => {
  const groupProps = {
    selectProps: selectProps ?? {},
    orientation,
    isRtl,
  };
  return <SelectGroupStart {...groupProps} />;
};

const determineInputEnd = (
  orientation?: OrientationType,
  selectProps?: SelectProps<any>,
  isRtl?: boolean
) => {
  const groupProps = {
    selectProps: selectProps ?? {},
    orientation,
    isRtl,
  };
  return <SelectGroupEnd {...groupProps} />;
};

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  orientation = 'horizontal',
  selectProps,
  isRtl,
}) => {
  // TODO
  // Use select props and use check the pair prop too
  const dir = isRtl ? 'rtl' : 'ltr';
  return (
    <Container orientation={orientation} dir={dir}>
      {determineInputStart(orientation, selectProps?.input1, isRtl)}
      {determineInputEnd(orientation, selectProps?.input2, isRtl)}
    </Container>
  );
};

export default TextInputGroup;
