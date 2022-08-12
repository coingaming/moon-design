import React from 'react';
import classNames from '../../private/utils/classnames';

const Container: React.FC<{ disabled?: boolean; inputSize?: string }> = ({
  children,
  disabled,
}) => (
  <div
    className={classNames(
      'w-full max-w-full relative z-0',
      disabled && 'opacity-30 cursor-not-allowed'
    )}
  >
    {children}
  </div>
);

export default Container;
