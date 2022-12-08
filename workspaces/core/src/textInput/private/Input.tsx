import React, { forwardRef } from 'react';
import mergeClassnames from '../../utils/mergeClassnames';
import getSizeStyles from '../private/utils/getSizeStyles';
import makeBorder from '../private/utils/makeBorder';
import type TextInputProps from '../private/types/TextInputProps';

const Input = forwardRef<
  HTMLInputElement,
  TextInputProps & { isLabel?: boolean; isRtl?: boolean; isPassword?: boolean }
>((props, ref) => {
  const {
    bgColor,
    inputSize = 'md',
    isError,
    type = 'text',
    placeholder = '',
    isLabel,
    isRtl,
    isSharpLeftSide,
    isSharpRightSide,
    isSharpTopSide,
    isSharpBottomSide,
    isTopBottomBorderHidden,
    isSideBorderHidden,
    isFirst,
    isPassword,
    className,
    ...rest
  } = props;
  return (
    <>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2]',
          'shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          isError &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
          bgColor ? bgColor : 'bg-transparent',
          getSizeStyles(inputSize as string),
          'before:box-border after:box-border',
          'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
          'read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input read-only:focus:shadow-input',
          type === 'number' && 'input-number-clear',
          type === 'date' && 'input-d',
          type === 'date' && isRtl && 'input-d-rtl',
          type === 'time' && 'input-t',
          type === 'time' && isRtl && 'input-t-rtl',
          type === 'datetime-local' && 'input-d',
          type === 'datetime-local' && isRtl && 'input-dt-local-rtl',
          inputSize === 'xl' && 'input-xl-dt-shared',
          inputSize === 'xl' &&
            isLabel &&
            'input-xl pt-[1.125rem] input-xl-dt-label',
          inputSize === 'lg' && 'input-lg-dt-shared',
          'input-dt-shared',
          (isSharpLeftSide || isSharpTopSide) && !isError && 'rounded-tl-none',
          (isSharpRightSide || isSharpTopSide) && !isError && 'rounded-tr-none',
          (isSharpLeftSide || isSharpBottomSide) &&
            !isError &&
            'rounded-bl-none',
          (isSharpRightSide || isSharpBottomSide) &&
            !isError &&
            'rounded-br-none',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
          makeBorder(
            isSideBorderHidden,
            isTopBottomBorderHidden,
            isFirst,
            isRtl,
            isError
          ),
          className && className
        )}
        {...rest}
      />
    </>
  );
});

export default Input;
