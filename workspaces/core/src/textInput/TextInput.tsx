import React, { forwardRef } from 'react';
import TextInputBasic from './private/TextInputBasic';
import TextInputInnerLabel from './private/TextInputInnerLabel';
import TextInputPassword from './private/TextInputPassword';
import type TextInputProps from './private/types/TextInputProps';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputSize = 'md', type } = props;

  //render input with show/hide password
  if (type === 'password') {
    return <TextInputPassword {...props} ref={ref} />;
  }
  if (inputSize === 'xl') {
    return <TextInputInnerLabel {...props} ref={ref} />;
  }
  // render rest sizes
  return <TextInputBasic {...props} ref={ref} />;
});

export default TextInput;
