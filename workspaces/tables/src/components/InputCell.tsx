import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import getSizeStyles from '../private/utils/getSizeStyles';
import type InputProps from '../private/types/InputProps';

const InputCell = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size: inputSize,
      error: inputError,
      disabled: inputDisabled,
      isRtl,
      id,
      ...rest
    },
    ref
  ) => {
    const size = inputSize;
    const disabled = inputDisabled;
    const error = inputError;
    const ariaLabelValue = rest['aria-label']
      ? rest['aria-label']
      : 'Editable cell';
    return (
      <input
        ref={ref}
        type={type}
        id={id}
        disabled={disabled}
        className={mergeClassnames(
          'block w-full max-w-full py-0 px-1 m-0 appearance-none text-bulma transition-shadow box-border relative z-[2]',
          'bg-transparent hover:bg-heles',
          'focus:shadow-input-cell-focus focus:outline-none focus:bg-heles',
          'focus-visible::shadow-input-cell-focus focus-visible::outline-none focus-visible::bg-heles',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
          getSizeStyles(size as string),
          'before:box-border after:box-border',
          'placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75',
          'read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:shadow-input read-only:focus:shadow-input read-only:focus-visible:shadow-input',
          type === 'number' && 'input-number-clear',
          type === 'date' && 'input-d',
          type === 'date' && isRtl && 'input-d-rtl',
          type === 'time' && 'input-t',
          type === 'time' && isRtl && 'input-t-rtl',
          type === 'datetime-local' && 'input-d',
          type === 'datetime-local' && isRtl && 'input-dt-local-rtl',
          size === 'lg' && 'input-lg-dt-shared',
          'input-dt-shared',
          'invalid:shadow-input-err invalid:hover:shadow-input-err invalid:focus:shadow-input-err invalid:focus-visible:shadow-input-err',
          disabled && 'opacity-60 cursor-not-allowed',
          className && className
        )}
        aria-label={ariaLabelValue}
        {...rest}
      />
    );
  }
);

export default InputCell;
