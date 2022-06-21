import React, { forwardRef } from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import Size from '../../private/enums/Size';
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
  inputSize?: TextInputSizeType | string;
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
  isTopBottomBorderHidden?: boolean;
  isSideBorderHidden?: boolean;
}
const TextInputInnerLabel = forwardRef<HTMLInputElement, TextInputMediumProps>(
  (props, ref) => {
    const {
      id,
      inputSize = Size.MEDIUM,
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
      isTopBottomBorderHidden,
      isSideBorderHidden,
      backgroundColor = 'gohan',
      ...rest
    } = props;
    const inputProps = {
      type,
      placeholder,
      dir,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      backgroundColor,
      ...rest,
    };
    const containerProps = {
      disabled,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      bgColor: backgroundColor,
    };
    return (
      <Container {...containerProps}>
        <Inner bgColor={backgroundColor}>
          <Input
            inputSize={inputSize}
            error={isError}
            ref={ref}
            id={id}
            isLabel={!!label}
            isRtl={dir === 'rtl'}
            {...inputProps}
            {...containerProps}
          />
          <LabelInner isRtl={dir === 'rtl'}>{label}</LabelInner>
        </Inner>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
);

export default TextInputInnerLabel;
