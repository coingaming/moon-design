import React from 'react';
import TextInputTypes from './types/TextInputTypes';
import Input from './Input';
import HintText from './HintText';
import Container from '../styles/Container';
import Label from '../styles/Label';
import { ColorProps } from '@heathmont/moon-themes';
import TextInputSizeType from './types/SizeTypes';

interface TextInputXSandSmProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize: TextInputSizeType | string;
  label?: JSX.Element | string;
  type: TextInputTypes;
  placeholder?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  showPasswordText?: JSX.Element | string;
  ref: React.Ref<HTMLInputElement>;
  backgroundColor?: ColorProps;
}

const TextInputXsmallSmall: React.FC<TextInputXSandSmProps> = (props) => {
  const {
    id,
    inputSize,
    type,
    disabled,
    placeholder = ' ',
    label,
    hintText,
    isError,
    ref,
    dir,
    backgroundColor,
    ...rest
  } = props;
  const inputProps = {
    disabled,
    type,
    placeholder,
    dir,
    ...rest,
  };
  return (
    <Container disabled={disabled}>
      {label && (
        <Label dir={dir} htmlFor={id}>
          {label}
        </Label>
      )}
      <Input
        inputSize={inputSize}
        error={isError}
        ref={ref}
        id={id}
        bgColor={backgroundColor}
        {...inputProps}
      />
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  );
};

export default TextInputXsmallSmall;
