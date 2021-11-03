import React from 'react';
import TextInputTypes from './TextInputTypes';
import Input from './Input';
import HintText from './HintText';
import Container from '../styles/Container';
import Inner from '../styles/Inner';
import Label from '../styles/Label';
import LabelInner from '../styles/LabelInner';
import ShowPassword from '../styles/ShowPassword';
import { ColorProps } from '@heathmont/moon-themes';

interface TextInputPasswordProps
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

const TextInputPassword: React.FC<TextInputPasswordProps> = (props) => {
  const {
    id,
    inputSize,
    type,
    disabled,
    placeholder = ' ',
    label,
    hintText,
    isError,
    dir,
    showPasswordText,
    ref,
    backgroundColor,
    ...rest
  } = props;

  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const inputProps = {
    disabled,
    placeholder,
    dir,
    ...rest,
  };

  if (inputSize === 'medium') {
    return (
      <Container disabled={disabled}>
        <Inner>
          <Input
            backgroundColor={backgroundColor}
            inputSize={inputSize}
            type={passwordShown ? 'text' : 'password'}
            error={isError}
            ref={ref}
            id={id}
            {...inputProps}
          />
          <LabelInner>{label}</LabelInner>
          <ShowPassword onClick={togglePasswordVisiblity}>
            {showPasswordText}
          </ShowPassword>
        </Inner>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
  return (
    <Container disabled={disabled}>
      {label && (
        <Label dir={dir} htmlFor={id}>
          {label}
        </Label>
      )}
      <Inner>
        <Input
          backgroundColor={backgroundColor}
          inputSize={inputSize}
          type={passwordShown ? 'text' : 'password'}
          error={isError}
          ref={ref}
          id={id}
          {...inputProps}
        />
        <ShowPassword onClick={togglePasswordVisiblity}>
          {showPasswordText}
        </ShowPassword>
      </Inner>
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  );
};

export default TextInputPassword;
