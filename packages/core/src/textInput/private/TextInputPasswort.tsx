import React from 'react';
import TextInputTypes from './types/TextInputTypes';
import Input from './Input';
import HintText from './HintText';
import Container from '../styles/Container';
import Inner from '../styles/Inner';
import Label from '../styles/Label';
import LabelInner from '../styles/LabelInner';
import ShowPassword from '../styles/ShowPassword';
import { ColorProps } from '@heathmont/moon-themes';
import TextInputSizeType from './types/SizeTypes';
import Size from '../../private/enums/Size';

interface TextInputPasswordProps
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

  if (inputSize === Size.MEDIUM) {
    return (
      <Container disabled={disabled}>
        <Inner bgColor={backgroundColor}>
          <Input
            inputSize={inputSize}
            type={passwordShown ? 'text' : 'password'}
            error={isError}
            ref={ref}
            id={id}
            isLabel={!!label}
            isPassword={true}
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
          inputSize={inputSize}
          type={passwordShown ? 'text' : 'password'}
          error={isError}
          ref={ref}
          id={id}
          bgColor={backgroundColor}
          isPassword={true}
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
