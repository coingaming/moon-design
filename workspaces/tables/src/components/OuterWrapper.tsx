import React from 'react';

const OuterWrapper: React.FC = ({ children }) => {
  return (
    <div className={'relative h-full w-full overflow-auto '}>{children}</div>
  );
};

export default OuterWrapper;
