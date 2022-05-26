import React, { forwardRef } from 'react';
import classNames from '../../private/utils/classnames';
import TextInputProps from '../private/types/TextInputProps';
import getBorderRadius from '../private/utils/getBorderRadius';
import Container from './Container';
import HintText from './HintText';
import Input from './Input';
import ShowPassword from './ShowPassword';

const TextInputPassword = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      id,
      inputSize = 'md',
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
      isTopBottomBorderHidden,
      isSideBorderHidden,
      backgroundColor = 'bg-gohan',
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
      isTopBottomBorderHidden,
      isSideBorderHidden,
      ...rest,
    };

    if (inputSize === 'xl') {
      return (
        <Container disabled={disabled}>
          <div
            className={classNames(
              'w-full max-w-full relative ',
              getBorderRadius(inputSize),
              backgroundColor && backgroundColor
            )}
          >
            <Input
              inputSize={inputSize}
              type={passwordShown ? 'text' : 'password'}
              isError={isError}
              ref={ref}
              id={id}
              isLabel={!!label}
              isPassword={true}
              {...inputProps}
            />
            <label
              className={classNames(
                'absolute text-[0.75rem] leading-3 text-trunks top-3 z-[1] transition-all',
                dir === 'rtl' ? 'right-4' : 'left-4'
              )}
            >
              {label}
            </label>
            <ShowPassword
              onClick={togglePasswordVisiblity}
              isRtl={dir === 'rtl'}
            >
              {showPasswordText}
            </ShowPassword>
          </div>
          {hintText && <HintText isError={isError}>{hintText}</HintText>}
        </Container>
      );
    }
    return (
      <Container disabled={disabled}>
        {label && (
          <label
            dir={dir}
            htmlFor={id}
            className="block text-moon-16 text-bulma pb-2"
          >
            {label}
          </label>
        )}
        <div
          className={classNames(
            'w-full max-w-full relative ',
            getBorderRadius(inputSize)
          )}
        >
          <Input
            inputSize={inputSize}
            type={passwordShown ? 'text' : 'password'}
            isError={isError}
            ref={ref}
            id={id}
            backgroundColor={backgroundColor}
            isPassword={true}
            {...inputProps}
          />
          <ShowPassword onClick={togglePasswordVisiblity} isRtl={dir === 'rtl'}>
            {showPasswordText}
          </ShowPassword>
        </div>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  }
);

export default TextInputPassword;
