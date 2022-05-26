import React, { forwardRef } from 'react';
import Size from '../private/enums/Size';
import TextInputBasic from './private/TextInputBasic';
import TextInputInnerLabel from './private/TextInputInnerLabel';
import TextInputPassword from './private/TextInputPassword';
import TextInputProps from './private/types/TextInputProps';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputSize = Size.md, type } = props;

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
