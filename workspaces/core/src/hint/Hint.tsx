import React from 'react';
import { useFormItemContext } from '../form/Form';
import mergeClassnames from '../utils/mergeClassnames';

type HintProps = {
  error?: boolean;
  className?: string;
  disabled?: boolean;
};

const Hint: React.FC<HintProps> = ({
  children,
  error: hintError,
  disabled,
  className,
}) => {
  const { error: formItemError } = useFormItemContext('Hint');
  const error = hintError || formItemError;
  return (
    <p
      role="alert"
      className={mergeClassnames(
        'inline-block mt-2 ps-4 text-moon-12',
        error ? 'text-chiChi' : 'text-trunks',
        disabled && 'opacity-30 cursor-not-allowed',
        className && className
      )}
    >
      {children}
    </p>
  );
};

export default Hint;
