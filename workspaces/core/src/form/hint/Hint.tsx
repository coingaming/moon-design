import React from 'react';
import mergeClassnames from '../../utils/mergeClassnames';
import { useFormItemContext } from '../Form';

type HintProps = {
  error?: boolean;
  className?: string;
  disabled?: boolean;
};

const Hint: React.FC<HintProps> = ({
  children,
  error,
  disabled,
  className,
}) => {
  const { error: formItemError } = useFormItemContext('Label');
  return (
    <p
      role="alert"
      className={mergeClassnames(
        'inline-block mt-2 ps-4 text-moon-12',
        error || formItemError ? 'text-chiChi' : 'text-trunks',
        disabled && 'opacity-30 cursor-not-allowed',
        className && className
      )}
    >
      {children}
    </p>
  );
};

export default Hint;
