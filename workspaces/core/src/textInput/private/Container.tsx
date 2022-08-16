import React from 'react';
import classNames from '../../private/utils/classnames';
import getBorderRadius from './utils/getBorderRadius';

const Container: React.FC<{ disabled?: boolean; inputSize?: string }> = ({
  children,
  disabled,
  inputSize,
}) => (
  <div
    className={classNames(
      'w-full max-w-full relative z-0',
      disabled && 'opacity-30 cursor-not-allowed',
      getBorderRadius(inputSize)
    )}
  >
    {children}
  </div>
);

export default Container;
