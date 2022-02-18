import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import Container from '../styles/Container';
import Inner from '../styles/Inner';
import LabelInner from '../styles/LabelInner';
import HintText from './HintText';
import Input from './Input';
import TextInputSizeType from './types/SizeTypes';
import TextInputTypes from './types/TextInputTypes';

interface TextInputMediumProps
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

const TextInputInnerLabel: React.FC<TextInputMediumProps> = (props) => {
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
    backgroundColor = 'gohan',
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
      <Inner bgColor={backgroundColor}>
        <Input
          inputSize={inputSize}
          error={isError}
          ref={ref}
          id={id}
          isLabel={!!label}
          isRtl={dir === 'rtl'}
          {...inputProps}
        />
        <LabelInner isRtl={dir === 'rtl'}>{label}</LabelInner>
      </Inner>
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  );
};

export default TextInputInnerLabel;
