import React from 'react';

const OuterWrapper: React.FC = ({ children }) => {
  return <div className={'relative h-full w-full'}>{children}</div>;
};

export default OuterWrapper;
