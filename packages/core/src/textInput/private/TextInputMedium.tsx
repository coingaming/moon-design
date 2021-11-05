import React from 'react';
import TextInputTypes from './TextInputTypes';
import Input from './Input';
import HintText from './HintText';
import Container from '../styles/Container';
import Inner from '../styles/Inner';
import LabelInner from '../styles/LabelInner';
import { ColorProps } from '@heathmont/moon-themes';

interface TextInputMediumProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize: 'xsmall' | 'small' | 'medium';
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

const TextInputMedium: React.FC<TextInputMediumProps> = (props) => {
  const {
    id,
    inputSize,
    type,
    disabled,
    placeholder,
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
      <Inner>
        <LabelInner>{label}</LabelInner>
        <Input
          backgroundColor={backgroundColor}
          inputSize={inputSize}
          error={isError}
          ref={ref}
          id={id}
          isLabelPresent={!!label}
          {...inputProps}
        />
      </Inner>
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  );
};

export default TextInputMedium;
