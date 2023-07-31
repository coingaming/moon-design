import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';

type Props = {
  isError?: boolean;
  children?: React.ReactNode;
};

const HintText = ({ children, isError }: Props) => (
  <p
    role="alert"
    className={mergeClassnames(
      'inline-block mt-2 ps-4 text-moon-12',
      isError ? 'text-chichi' : 'text-trunks'
    )}
  >
    {children}
  </p>
);

export default HintText;
