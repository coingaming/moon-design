import React, { forwardRef } from 'react';
import TextInputTypes from './private/types/TextInputTypes';
import TextInputPasswort from './private/TextInputPasswort';
import TextInputMedium from './private/TextInputMedium';
import TextInputXSandSm from './private/TextInputXSandSm';
import { ColorProps } from '@heathmont/moon-themes';
import TextInputSizeType from './private/types/SizeTypes';
import Size from '../private/enums/Size';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize: TextInputSizeType;
  type: TextInputTypes;
  label?: JSX.Element | string;
  placeholder?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  showPasswordText?: JSX.Element | string;
  backgroundColor?: ColorProps;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputSize, type } = props;

  if (type === 'password') {
    return <TextInputPasswort {...props} ref={ref} />;
  }
  if (inputSize === Size.MEDIUM) {
    return <TextInputMedium {...props} ref={ref} />;
  }

  return <TextInputXSandSm {...props} ref={ref} />;
});

export default TextInput;
