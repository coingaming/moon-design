import React from 'react';
import Size from '../../private/enums/Size';
import classNames from '../../private/utils/classnames';
import getSizeStyles from '../private/utils/getSizeStyles';
import makeBorder from '../private/utils/makeBorder';
import TextInputSizeType from './types/SizeTypes';

type InputProps = {
  inputSize: TextInputSizeType | string;
  withIcon?: boolean;
  error?: boolean;
  icon?: string;
  iconColor?: string;
  type?: string;
  bgColor?: string;
  isLabel?: boolean;
  isPassword?: boolean;
  isRtl?: boolean;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  isTopBottomBorderHidden?: boolean;
  isSideBorderHidden?: boolean;
  ref: React.ForwardedRef<HTMLInputElement>;
  id?: string;
  placeholder?: string;
  isFirst?: boolean;
};

const Input: React.FC<InputProps> = (props) => {
  const {
    bgColor,
    inputSize,
    error,
    type,
    placeholder,
    isLabel,
    isRtl,
    ref,
    isSharpLeftSide,
    isSharpRightSide,
    isSharpTopSide,
    isSharpBottomSide,
    isTopBottomBorderHidden,
    isSideBorderHidden,
    isFirst,
  } = props;
  return (
    <>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={classNames(
          'block w-full max-w-full py-0 px-4 m-0 appearance-none text-[1rem] text-bulma transition-shadow box-border relative z-[2]',
          'shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
          !bgColor ? 'bg-transparent' : bgColor,
          getSizeStyles(inputSize),
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
          inputSize === Size.XL && 'input-xl-dt-shared',
          inputSize === Size.XL &&
            isLabel &&
            'input-xl pt-[1.125rem] input-xl-dt-label',
          inputSize === Size.LG && 'input-lg-dt-shared',
          'input-dt-shared',
          (isSharpLeftSide || isSharpTopSide) && !error && 'rounded-tl-none',
          (isSharpRightSide || isSharpTopSide) && !error && 'rounded-tr-none',
          (isSharpLeftSide || isSharpBottomSide) && !error && 'rounded-bl-none',
          (isSharpRightSide || isSharpBottomSide) &&
            !error &&
            'rounded-br-none',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err',
          makeBorder(
            isSideBorderHidden,
            isTopBottomBorderHidden,
            isFirst,
            isRtl,
            error
          )
        )}
        {...props}
      />
    </>
  );
};

export default Input;
