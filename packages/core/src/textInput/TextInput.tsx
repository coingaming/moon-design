import React, { forwardRef } from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import Size from '../private/enums/Size';
import TextInputBasic from './private/TextInputBasic';
import TextInputInnerLabel from './private/TextInputInnerLabel';
import TextInputPasswort from './private/TextInputPasswort';
import TextInputSizeType from './private/types/SizeTypes';
import TextInputTypes from './private/types/TextInputTypes';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize: TextInputSizeType | string;
  type: TextInputTypes | string;
  label?: JSX.Element | string;
  placeholder?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  showPasswordText?: JSX.Element | string;
  backgroundColor?: ColorProps;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  isTopBottomBorderHidden?: boolean;
  isSideBorderHidden?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { inputSize, type } = props;

  // render input with show/hide password
  if (type === 'password') {
    return <TextInputPasswort {...props} ref={ref} />;
  }
  if (inputSize === Size.XLARGE) {
    return <TextInputInnerLabel {...props} ref={ref} />;
  }
  // render rest sizes
  return <TextInputBasic {...props} ref={ref} />;
});

export default TextInput;
