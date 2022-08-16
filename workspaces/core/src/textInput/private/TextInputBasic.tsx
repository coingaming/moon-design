import React, { forwardRef } from 'react';
import classNames from '../../private/utils/classnames';
import Container from './Container';
import HintText from './HintText';
import Input from './Input';
import type TextInputProps from '../private/types/TextInputProps';

const TextInputBasic = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      id,
      inputSize,
      type,
      disabled,
      placeholder,
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
      backgroundColor = 'bg-gohan',
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
      isTopBottomBorderHidden,
      isSideBorderHidden,
      ...rest,
    };
    return (
      <Container disabled={disabled}>
        {label && (
          <label
            dir={dir}
            htmlFor={id}
            className={classNames(
              'block text-moon-16 text-bulma pb-2',
              disabled && 'opacity-30 cursor-not-allowed'
            )}
          >
            {label}
          </label>
        )}
        <Input
          inputSize={inputSize}
          isError={isError}
          ref={ref}
          id={id}
          backgroundColor={backgroundColor}
          isRtl={dir === 'rtl'}
          {...inputProps}
        />
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
);

export default TextInputBasic;
