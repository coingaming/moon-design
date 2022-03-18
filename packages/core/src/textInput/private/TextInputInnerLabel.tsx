import React, { forwardRef } from 'react';
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
const TextInputInnerLabel = forwardRef<HTMLInputElement, TextInputMediumProps>(
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
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isNoBorderBottom,
      isNoSideBorder,
      backgroundColor = 'gohan',
      ...rest
    } = props;
    const inputProps = {
      disabled,
      type,
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
  }
);

export default TextInputInnerLabel;
