import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import getBorderRadius from './utils/getBorderRadius';

const Container: React.FC<{
  disabled?: boolean;
  inputSize?: string;
  children?: React.ReactNode;
}> = ({ children, disabled, inputSize }) => (
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
