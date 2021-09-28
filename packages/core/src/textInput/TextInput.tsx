import React, { forwardRef } from 'react';
import TextInputTypes from './private/TextInputTypes';
import TextInputPasswort from './private/TextInputPasswort';
import TextInputMedium from './private/TextInputMedium';
import TextInputXSandSm from './private/TextInputXSandSm';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize: 'xsmall' | 'small' | 'medium';
  type: TextInputTypes;
  label?: JSX.Element | string;
  placeholder?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  showPasswordText?: JSX.Element | string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputSize, type } = props;

  if (type === 'password') {
    return <TextInputPasswort {...props} ref={ref} />;
  }
  if (inputSize === 'medium') {
    return <TextInputMedium {...props} ref={ref} />;
  }

  return <TextInputXSandSm {...props} ref={ref} />;
});

export default TextInput;
