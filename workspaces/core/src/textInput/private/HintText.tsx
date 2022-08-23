import React from 'react';
import classNames from '../../private/utils/classnames';

const HintText: React.FC<{ isError?: boolean }> = ({ children, isError }) => (
  <p
    role="alert"
    className={classNames(
      'inline-block mt-2 ps-4 text-moon-12',
      isError ? 'text-chiChi' : 'text-trunks'
    )}
  >
    {children}
  </p>
);

export default HintText;
