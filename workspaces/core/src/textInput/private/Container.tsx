import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getBorderRadius from './utils/getBorderRadius';

type Props = {
  disabled?: boolean;
  inputSize?: string;
  children?: React.ReactNode;
};

const Container = ({ children, disabled, inputSize }: Props) => (
  <div
    className={mergeClassnames(
      'w-full max-w-full relative z-0',
      disabled && 'opacity-60 cursor-not-allowed',
      getBorderRadius(inputSize)
    )}
  >
    {children}
  </div>
);

export default Container;
