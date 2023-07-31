import React from 'react';
import Container from './styles/Container';
import TextGroupEnd from './styles/TextGroupEnd';
import TextGroupStart from './styles/TextGroupStart';
import type TextInputGroupProps from './private/types/TextInputGroupProps';

const TextInputGroup = ({
  orientation = 'horizontal',
  inputProps,
  isRtl,
  backgroundColor = 'bg-gohan',
}: TextInputGroupProps) => {
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
      <TextGroupStart
        inputProps={inputProps?.input1}
        orientation={orientation}
        isRtl={isRtl}
      />
      <TextGroupEnd
        inputProps={inputProps?.input2}
        orientation={orientation}
        isRtl={isRtl}
      />
    </Container>
  );
};

export default TextInputGroup;
