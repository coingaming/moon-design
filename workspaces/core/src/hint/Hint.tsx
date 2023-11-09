import React from 'react';
import type HintProps from './private/types/HintProps';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Hint = ({
  children,
  error: hintError,
  disabled,
  className,
}: HintProps) => {
  const { error: formItemError } = useFormItemContext('Hint');
  const error = hintError || formItemError;
  return (
    <p
      role="alert"
      className={mergeClassnames(
        'flex gap-1 items-center mt-2 text-moon-12 [&_svg]:text-moon-16',
        error ? 'text-chichi' : 'text-trunks',
        disabled && 'opacity-60 cursor-not-allowed',
        className
      )}
    >
      {children}
    </p>
  );
};

export default Hint;
