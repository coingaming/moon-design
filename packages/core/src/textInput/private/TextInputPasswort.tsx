import React, { forwardRef } from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import Size from '../../private/enums/Size';
import Container from '../styles/Container';
import Inner from '../styles/Inner';
import Label from '../styles/Label';
import LabelInner from '../styles/LabelInner';
import ShowPassword from '../styles/ShowPassword';
import HintText from './HintText';
import Input from './Input';
import TextInputSizeType from './types/SizeTypes';
import TextInputTypes from './types/TextInputTypes';

interface TextInputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  inputSize: TextInputSizeType | string;
  label?: JSX.Element | string;
  type: TextInputTypes | string;
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
  isNoBorderBottom?: boolean;
  isNoSideBorder?: boolean;
}

const TextInputPassword = forwardRef<HTMLInputElement, TextInputPasswordProps>(
  (props, ref) => {
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
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isNoBorderBottom,
      isNoSideBorder,
      backgroundColor = 'gohan',
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
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isNoBorderBottom,
      isNoSideBorder,
      ...rest,
    };

    if (inputSize === Size.XLARGE) {
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
            <LabelInner isRtl={dir === 'rtl'}>{label}</LabelInner>
            <ShowPassword
              onClick={togglePasswordVisiblity}
              isRtl={dir === 'rtl'}
            >
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
          <ShowPassword onClick={togglePasswordVisiblity} isRtl={dir === 'rtl'}>
            {showPasswordText}
          </ShowPassword>
        </Inner>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
);

export default TextInputPassword;
